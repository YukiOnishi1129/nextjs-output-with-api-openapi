import {
  Controller,
  Post,
  Body,
  Request,
  ValidationPipe,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { SignInUserDto } from './dto/sign-in-user.dto';
import { SignUpUserDto } from './dto/sign-up-user.dto';
import { AuthResponseDto } from './dto/auth-user.dto';
import { JwtPayload } from '../lib/jwt/interfaces/jwt-payload.interface';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign_in')
  @HttpCode(200)
  @ApiOkResponse({
    type: AuthResponseDto,
    description: 'ログイン完了',
  })
  @ApiUnauthorizedResponse({
    description: '認証エラー',
  })
  async signIn(@Body(ValidationPipe) signInUserDto: SignInUserDto) {
    return await this.authService.signIn(signInUserDto);
  }

  @Post('sign_up')
  @HttpCode(201)
  @ApiCreatedResponse({
    type: AuthResponseDto,
    description: '会員登録完了',
  })
  @ApiUnauthorizedResponse({
    description: '認証エラー',
  })
  async signUp(@Body(ValidationPipe) signUpUserDto: SignUpUserDto) {
    return await this.authService.signUp(signUpUserDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post('authentication')
  @HttpCode(200)
  @ApiOkResponse({
    type: AuthResponseDto,
    description: '認証チェックOK',
  })
  @ApiUnauthorizedResponse({
    description: '認証エラー',
  })
  async authentication(@Request() req: { user: JwtPayload }) {
    return await this.authService.authCheck(req.user.userId);
  }
}
