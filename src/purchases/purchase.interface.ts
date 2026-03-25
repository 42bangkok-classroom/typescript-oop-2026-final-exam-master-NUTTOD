export interface PurchaseItem {
    productId: number
    quantity: number
    price: number
}

export interface Purchase<T> {
    success: boolean;
    data: T | null;
    message: string;
}