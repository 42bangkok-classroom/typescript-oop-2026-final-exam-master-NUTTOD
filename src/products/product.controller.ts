import { Controller, Get } from '@nestjs/common';
import type { ApiResponse } from './product.interface';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('products')
  getAll(): ApiResponse<object> {
    const products = this.productService.findAll();
    return {
      success: true,
      data: products,
      message: 'Fetched products successfully',
    };
  }
}
