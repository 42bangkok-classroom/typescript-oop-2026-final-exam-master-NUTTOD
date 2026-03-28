import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductService {
  findAll(): Product[] {
    const filepath = path.join(process.cwd(), 'data', 'products.json');
    const data = fs.readFileSync(filepath, 'utf-8');
    const showData = JSON.parse(data) as Product[];
    return showData;
  }
}
