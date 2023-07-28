import { Module  } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from "@nestjs/jwt"
import { AuthenticationGuard } from './guard';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.register({
      global:true,
    }),
    ConfigModule
  ],
  controllers: [AuthController],
  providers: [AuthService]
})

export class AuthModule{}

