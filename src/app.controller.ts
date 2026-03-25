import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import type { ApiResponse } from './interfaces/response.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): ApiResponse<object> {
    return this.appService.statusCheck();
  }
}
