import { Controller, Get, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  // @Post('login')
  // login(@Request() req): any {
  //   return this.authService.login(req.user);
  // }

  @Get('me')
  getHello(): string {
    return this.appService.getHello();
  }
}
