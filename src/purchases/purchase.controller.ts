import { Controller, Get } from '@nestjs/common';
import type { Purchase } from './purchase.interface';
import { PurchaseService } from './purchase.service';
import { PurchaseItem } from './purchase.interface';


@Controller()
export class PurchaseController {
  constructor(private readonly productService: PurchaseService) {}

  @Get('purchases')
  getAll(): Purchase<PurchaseItem> {
    return this.productService.findAll();
  }
}
