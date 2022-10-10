import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';
import {ApiOperation, ApiResponse} from '@nestjs/swagger'

@Controller('users')
export class UsersController {
    constructor(private usersServise: UsersService){}

    @ApiOperation({summary: 'Create users request'})
    @ApiResponse({status:200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersServise.createUser(userDto);
    }

    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({status:200, type: [User]})
    @Get()
    getAll(){
        return this.usersServise.getAllUsers();
    }
}
