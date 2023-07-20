import { ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
                    role: "user"
                },
            })
            delete user.hash_password
            return {status: HttpStatus.OK, data: user }

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
        //finbd user on database
        const user= await this.prisma.user.findUnique({
            where:{
                accountId:dto.accountId
            }
        })
        // if user not exist throw forbidden
        if(!user){
            throw new ForbiddenException("AccountID incorrect")
        }
        // if password not macthed thorw forbidden
        const passwordMatches= await argon.verify(user.hash_password, dto.password)
        if(!passwordMatches){
            throw new ForbiddenException("Password incorrect")
        }

        //sign refresh token and access token
        const refresh_token=await this.signRefreshToken(user.id,user.accountId, user.email, user.role)
        const access_token= await this.signAccessToken(user.id,user.accountId, user.email, user.role)
        try{
            //verify if user have refresh token or not on database
            const user_withRefresh= await this.prisma.refreshToken.findUnique({
                where:{
                    accountId:user.accountId
                }
            })
            // if user exist => refresh token exist => update new refresh token
            if (user_withRefresh){
                await this.prisma.refreshToken.update({
                    where:{
                        accountId:user.accountId
                    },
                    data:{
                        refreshToken:refresh_token.refresh_token
                    }
                })
                return {
                    access_token: access_token.access_token,
                    refresh_token: refresh_token.refresh_token
                }
            }
            // else add new refresh toekn on database
            await this.prisma.refreshToken.create({
                data:{
                    accountId:user.accountId,
                    refreshToken: refresh_token.refresh_token
                }
            })
            return {
                access_token: access_token.access_token,
                refresh_token: refresh_token.refresh_token
            }
        }
        catch(error){
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if(error.code="P2002"){
                    throw new ForbiddenException("Cannot add refresh token")
                }
            }
            throw error
        }

        
    }

    async refreshToken(refreshToken:string){
        try{
            const verify= await this.jwt.verifyAsync(refreshToken,{
                secret: this.config.get("JWT_SECRET")
            })
            const checkExistToken= await this.prisma.refreshToken.findUnique({
                where:{
                    accountId:verify.accountId,
                    refreshToken:refreshToken
                }
            })
            if (checkExistToken){
                return this.signAccessToken(verify.sub, verify.accountID, verify.email, verify.role)
            }
        }   
        catch(error){
            throw new HttpException("Refresh token is not valid", HttpStatus.BAD_REQUEST)
        }
    }

    //sign JWT Access Token
    private async signAccessToken(userId: number, accountId: string, email: string, role:string): Promise<{access_token: string}>{
        const payload={
            sub: userId,
            accountId: accountId,
            email: email,
            role: role
        }
        const secret= this.config.get("JWT_SECRET")
        const token= await this.jwt.signAsync(payload,{
            expiresIn:this.config.get("EXP_TIME_ACCESS_TOKEN"),
            secret:secret
        })
        return { access_token: token}
    }

    //sign JWT refresh token
    private async signRefreshToken(userId: number, accountId: string, email: string, role: string):Promise<{refresh_token:string}>{
        const payload={
            sub:userId,
            accountId: accountId,
            email: email,
            role: role
        }
        const secret= this.config.get("JWT_SECRET")
        const token= await this.jwt.signAsync(payload,{
            expiresIn:this.config.get("EXP_TIME_REFRESH_TOKEN"),
            secret:secret
        })
        return { refresh_token: token}
    }
}
