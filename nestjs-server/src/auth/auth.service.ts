import { ForbiddenException, Injectable } from '@nestjs/common';
import * as argon from "argon2"
import { Prisma } from "@prisma/client"
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from "@nestjs/config"
import { JwtService } from '@nestjs/jwt';
import { AuthDto, SignInDto } from './dto';




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
        // verify if email exist
        const users= await this.prisma.user.findMany({
            where:{
                email: dto.email
            }
        })
        if (users.length !== 0){
            throw new ForbiddenException("Email has been used")
        }
        

        //hash password
        const hash_password= await argon.hash(dto.password)
        try{
            //create user
            const user= await this.prisma.user.create({
                data:{
                    accountId:dto.accountId,
                    hash_password,
                    email:dto.email,
                    firstName:dto.firstName,
                    lastName:dto.lastName,
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

    // sign-in service
    async signin(dto: SignInDto){
        const user= await this.prisma.user.findUnique({
            where:{
                accountId:dto.accountId
            }
        })
        if(!user){
            throw new ForbiddenException("AccountID incorrect")
        }

        const passwordMatches= await argon.verify(user.hash_password, dto.password)
        if(!passwordMatches){
            throw new ForbiddenException("Password incorrect")
        }

        return this.signToken(user.id,user.accountId, user.email)
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
