import {
  Controller,
  Post,
  Body,
  Request,
  ValidationPipe,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { SignInUserDto } from './dto/sign-in-user.dto';
import { SignUpUserDto } from './dto/sign-up-user.dto';
import { JwtPayload } from '../lib/jwt/interfaces/jwt-payload.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign_in')
  @HttpCode(200)
  async signIn(@Body(ValidationPipe) signInUserDto: SignInUserDto) {
    return await this.authService.signIn(signInUserDto);
  }

  @Post('sign_up')
  @HttpCode(201)
  async signUp(@Body(ValidationPipe) signUpUserDto: SignUpUserDto) {
    return await this.authService.signUp(signUpUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('authentication')
  @HttpCode(200)
  async authentication(@Request() req: { user: JwtPayload }) {
    return await this.authService.authCheck(req.user.userId);
  }
}
