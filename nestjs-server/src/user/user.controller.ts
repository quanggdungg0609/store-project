import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from "@prisma/client"
import { GetUser } from '../auth/decorator';
import {  AuthenticationGuard } from 'src/auth/guard';


@Controller('users')
export class UserController {
    // get all user
    // @UseGuards(JwtGuard) //TODO: activate later
    @UseGuards(AuthenticationGuard)
    @Get("me")
    getMe(@GetUser() user: User ){
        return user
    }

}
