import { ForbiddenException, Injectable } from '@nestjs/common';
import * as argon from "argon2"
import { Prisma } from "@prisma/client"
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from "@nestjs/config"
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/sign-up.dto';




@Injectable()
export class AuthService {
    //constructor of AuthService
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService
    ){}
    //sign-up service
    async signup(dto: AuthDto){
        const hash_password= await argon.hash(dto.password)
        try{
            const user= await this.prisma.user.create({
                data:{
                    accountId:dto.accountId,
                    hash_password,
                    email:dto.email,
                    firstName:dto.firstName,
                    lastName:dto.lastName,
                    phoneNumber:dto.phoneNumber,
                    address:dto.address
                },
            })
            return this.signToken(user.id, user.accountId, user.email)

        }catch(error){
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if(error.code="P2002"){
                    throw new ForbiddenException("Credentials taken")
                }
            }
            throw error
        }
    }

    //sign JWT Token
    async signToken(userId: number, accountId: string, email: string): Promise<{access_token: string}>{
        const payload={
            sub: userId,
            accountId: accountId,
            email: email
        }
        const secret= this.config.get("JWT_SECRET")
        const token= await this.jwt.signAsync(payload,{
            expiresIn:"30m",
            secret:secret
        })
        return { access_token: token}
    }
}
