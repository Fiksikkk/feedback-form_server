import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from '@nestjs/config';
import { User } from "./users/users.model";
import { UsersModule } from './users/users.module';
import { configService } from "./config/config.service";


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot(),
        SequelizeModule.forRoot(configService.getTypeOrmConfig()),
        UsersModule,
      ],
})
export class AppModule {}
