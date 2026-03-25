import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductService {
  findAll(): Product<object> {
    const filepath = path.join(process.cwd(), 'data', 'products.json');
    const data = fs.readFileSync(filepath, 'utf-8');
    const showData = JSON.parse(data);
    return {
      success: true,
      data: showData,
      message: 'Fetched products successfully',
    };
  }
}
