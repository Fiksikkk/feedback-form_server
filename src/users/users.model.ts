import { Model, Table, Column, DataType } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface UserCreationAttrs {
  name: string;
  email: string;
  message: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: "1", description: "Unique id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Name", description: "Users name" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  
  @ApiProperty({ example: "user@mail.com", description: "Users email" })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: "message", description: "Users message" })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  message: string;
}
