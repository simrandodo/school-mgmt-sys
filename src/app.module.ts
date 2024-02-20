import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from 'env-validation';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfig } from './config/dbconfig';
import { SharedModule } from './config/shared.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      ignoreEnvFile: false,
      isGlobal: true,
      validate,
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      inject: [DbConfig],
      name: 'PostGres',
      useFactory: (configService: DbConfig) =>
        configService.getPostGresConfig(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
