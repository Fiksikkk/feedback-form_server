import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example:'Yakov', description: "Users name"})
    @IsString({message: "Must be a string"})
    readonly name: string;

    @ApiProperty({example:'user@mail.com', description: "Users email"})
    @IsString({message: "Must be a string"})
    @IsEmail({}, {message: "Incorrect email"})
    readonly email: string;

    @ApiProperty({example:'Some message gere', description: "message"})
    @IsString({message: "Must be a string"})
    readonly message: string;
}