import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.validateUser(
      signInDto.username,
      signInDto.password,
    );
  }

  @UseGuards(AuthGuard)
  @Get('my-profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
