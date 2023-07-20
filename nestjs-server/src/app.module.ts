import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { CaslModule } from './casl/casl.module';
import { ProductModule } from './product/product.module';


@Module({
  imports: [AuthModule, PrismaModule, ConfigModule.forRoot({isGlobal:true}), UserModule, CaslModule, ProductModule]
})
export class AppModule {}
