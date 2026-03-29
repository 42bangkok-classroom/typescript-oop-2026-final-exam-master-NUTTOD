import { Injectable } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PurchaseService {
  findAll(
    customerName?: string,
    startDate?: string,
    endDate?: string,
  ): Purchase[] {
    const filepath = path.join(process.cwd(), 'data', 'purchases.json');
    const data = fs.readFileSync(filepath, 'utf-8');
    let purchase = JSON.parse(data) as Purchase[];

    if (customerName) {
      purchase = purchase.filter((p) =>
        p.customerName.toLocaleLowerCase().includes(customerName.toLowerCase()),
      );
    }

    if (startDate) {
      purchase = purchase.filter((p) => p.purchaseDate >= startDate);
    }

    if (endDate) {
      purchase = purchase.filter((p) => p.purchaseDate <= endDate);
    }

    return purchase;
  }
}
