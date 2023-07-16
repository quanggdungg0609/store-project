import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, SignInDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    //Authentication
    @Post('sign-up')
    signup(@Body() dto: AuthDto){
      return this.authService.signup(dto)
    }

    @HttpCode(HttpStatus.OK)
    @Post("sign-in")
    signin(@Body() dto: SignInDto){
      return this.authService.signin(dto)
    }


    //Authorization
}
