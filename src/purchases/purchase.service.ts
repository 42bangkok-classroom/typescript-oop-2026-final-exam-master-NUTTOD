import { Injectable } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PurchaseService {
  findAll(): Purchase<object> {
    const filepath = path.join(process.cwd(), 'data', 'products.json');
    const data = fs.readFileSync(filepath, 'utf-8');
    const showData: object = JSON.parse(data);
    return {
      success: true,
      data: showData,
      message: 'Fetched products successfully',
    } as Purchase<object>;
  }
}
