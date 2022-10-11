import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from '@nestjs/config';
import { User } from "./users/users.model";
import { UsersModule } from './users/users.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot(
          // { envFilePath: `.${process.env.NODE_ENV}.env`}
            ),
        SequelizeModule.forRoot({
          uri: process.env.DATABASE_URL,
          dialect: 'postgres',
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false
            }
          },
          synchronize: true,
          autoLoadModels: true,
        }),
        UsersModule,
      ],
})
export class AppModule {}
