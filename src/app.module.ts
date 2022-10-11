import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import { User } from "./users/users.model";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      uri: process.env.DATABASE_URL,
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },

models: [User],

      synchronize: true,
      autoLoadModels: true,
    }),
    UsersModule,
  ],
})

export class AppModule {}
