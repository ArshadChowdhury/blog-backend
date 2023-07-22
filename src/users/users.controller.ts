import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): User {
    const user = this.usersService.findById(id);

    if (!user) {
      return new NotFoundException();
    }
    return user;
  }

  @Post('new-user')
  createNewUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body);
  }
}
