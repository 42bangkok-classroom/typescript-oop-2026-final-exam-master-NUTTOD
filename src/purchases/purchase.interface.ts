export interface PurchaseItem {
    id: number;
    customerName: string;
    purchaseDate: string;
    items: [{
        productId: number;
        quantity: number;
        price:number;
    }];
    totalPrice: number
}

export interface Purchase<PurchaseItem> {
    success: boolean;
    data: PurchaseItem | null;
    message: string;
}