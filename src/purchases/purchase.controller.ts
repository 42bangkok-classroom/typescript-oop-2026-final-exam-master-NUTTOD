import { Controller, Get } from '@nestjs/common';
import type { ApiResponse } from './purchase.interface';
import { PurchaseService } from './purchase.service';

@Controller()
export class PurchaseController {
  constructor(private readonly PurchaseService: PurchaseService) {}

  @Get('purchases')
  getAll(): ApiResponse<object> {
    const data = this.PurchaseService.findAll();
    return {
      success: true,
      data: data,
      message: 'Fetched purchases successfully',
    };
  }
}
