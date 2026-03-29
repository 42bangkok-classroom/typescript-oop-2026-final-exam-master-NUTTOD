import { Controller, Get, Query } from '@nestjs/common';
import type { ApiResponse } from './purchase.interface';
import { PurchaseService } from './purchase.service';

@Controller()
export class PurchaseController {
  constructor(private readonly PurchaseService: PurchaseService) {}

  @Get('purchases')
  getAll( 
    @Query('customerName') customerName?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ): ApiResponse<object> {
    const data = this.PurchaseService.findAll(customerName, startDate, endDate);

    const hasfiltered = customerName || startDate || endDate;
    const message = hasfiltered ? "Filtered purchases successfully" : "Fetched purchases successfully" ;
    return {
      success: true,
      data: data,
      message: message,
    };
  }
}
