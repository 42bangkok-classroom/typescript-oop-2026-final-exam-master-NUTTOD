export interface PurchaseItem<T> {
    productId: number
    quantity: number
    price: number
}

export interface Purchase<T> {
    success: boolean;
    data: {
        id: number;
        customerName: string;
        purchaseDate: string;
        items: PurchaseItem<T>;
        totalPrice: number
    }
    message: string;
}