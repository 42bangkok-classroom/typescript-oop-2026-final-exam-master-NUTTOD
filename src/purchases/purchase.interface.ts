export interface Purchase<T> {
    success: boolean;
    data: T | null;
    message: string;
}

export interface PurchaseItem<T> {
    productId: number
    quantity: number
    price: number
}