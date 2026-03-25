export interface PurchaseItem<T> {
    item: {
        productId: number
        quantity: number
        price: number
    }
}

export interface Purchase<T> {
    success: boolean;
    data: PurchaseItem<T>;
    message: string;
}