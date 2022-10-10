import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from '@nestjs/config';
import { User } from "./users/users.model";
import { UsersModule } from './users/users.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
          url: process.env.DATABASE_URL,
          type: 'postgres',
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: true, // This for development
          autoLoadModels: true,
        }),
        UsersModule,
      ],
})
export class AppModule {}
