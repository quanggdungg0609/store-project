import { Controller, Post, Body, HttpCode, HttpStatus, ValidationPipe, Header, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, SignInDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    //Authentication
    @Post('sign-up')
    signup(@Body(new ValidationPipe()) dto: AuthDto){
      return this.authService.signup(dto)
    }

    @HttpCode(HttpStatus.OK)
    @Post("sign-in")
    signin(@Body() dto: SignInDto){
      return this.authService.signin(dto)
    }

    @Post("refresh-token")
    async refreshToken(@Body() body:{refreshToken:string}){
      return this.authService.refreshToken(body.refreshToken)
    }

    //Authorization
}
