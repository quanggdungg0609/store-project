import { Controller, Post, Body, HttpCode, HttpStatus, ValidationPipe, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, RefreshTokenDto, SignInDto } from './dto';
import { ApiBearerAuth, ApiTags, ApiResponse } from '@nestjs/swagger';
import { AuthenticationGuard } from './guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    //Register (sign up)
    @ApiTags("Auth")
    @ApiResponse({
      status:200,
      description:"Register request successful"
    })
    @ApiResponse({
      status:400,
      description:"Bad Request. Missing params"
    })
    @ApiResponse({
      status:403,
      description:"Credentials taken"
    })
    @Post('sign-up')
    signup(@Body(new ValidationPipe()) dto: AuthDto){
      return this.authService.signup(dto)
    }

    //Login(sign in)
    
    @ApiTags("Auth")
    @HttpCode(HttpStatus.OK)
    @Post("sign-in")
    signin(@Body() dto: SignInDto){
      return this.authService.signin(dto)
    }


    //Refresh token
    @ApiBearerAuth()
    @ApiTags("Auth")
    @ApiResponse({
      status:401,
      description:"Authorize failed, need access token"
    })
    @ApiResponse({
      status:201,
      description:"Request success new access token"
    })
    @ApiResponse({
      status:400,
      description:" Refresh token is not valid"
    })
    @Post("refresh-token")
    @UseGuards(AuthenticationGuard)
    async refreshToken(@Body() dto:RefreshTokenDto){
      return this.authService.refreshToken(dto)
    }

    //Authorization
}
