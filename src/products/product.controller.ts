import { Controller, Get } from '@nestjs/common';
import type { Product } from './product.interface';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('products')
  getAll(): Product<object> {
    return this.productService.findAll();
  }
}
