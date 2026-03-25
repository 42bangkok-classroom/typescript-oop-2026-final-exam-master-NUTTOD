export interface PurchaseItem<T> {
    productId: number
    quantity: number
    price: number
}

export interface Purchase<T> {
    success: boolean;
    data: T | null | PurchaseItem<T>;
    message: string;
}