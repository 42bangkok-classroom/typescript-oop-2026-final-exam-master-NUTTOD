export interface Purchase {
  id: number;
  customerName: string;
  purchaseDate: string;
  items: [
    {
      productId: number;
      quantity: number;
      price: number;
    },
  ];
  totalPrice: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  message: string;
}
