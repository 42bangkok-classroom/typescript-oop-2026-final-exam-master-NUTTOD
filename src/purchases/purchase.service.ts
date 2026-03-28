import { Injectable } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PurchaseService {
  findAll(): Purchase[] {
    const filepath = path.join(process.cwd(), 'data', 'purchases.json');
    const data = fs.readFileSync(filepath, 'utf-8');
    const showData = JSON.parse(data) as Purchase[];
    return showData;
  }
}
