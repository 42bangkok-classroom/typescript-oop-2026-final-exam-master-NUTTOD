import { Injectable } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import { PurchaseItem } from './purchase.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PurchaseService {
  findAll(): Purchase<PurchaseItem> {
    const filepath = path.join(process.cwd(), 'data', 'purchases.json');
    const data = fs.readFileSync(filepath, 'utf-8');
    const showData = JSON.parse(data) as PurchaseItem;
    return {
      success: true,
      data: showData,
      message: 'Fetched products successfully',
    };
  }
}
