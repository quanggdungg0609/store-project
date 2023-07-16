import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { User } from "@prisma/client"
import { GetUser } from '../auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {
    // get all user
    @UseGuards(JwtGuard)
    @Get("me")
    getMe(@GetUser() user: User ){
        return user
    }

}
