import { Controller, Get } from '@nestjs/common';
import type { Purchase } from './purchase.interface';
import { PurchaseService } from './purchase.service';

@Controller()
export class PurchaseController {
  constructor(private readonly productService: PurchaseService) {}

  @Get('purchases')
  getAll(): Purchase<object> {
    return this.productService.findAll();
  }
}
