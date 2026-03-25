export interface Product<T> {
  success: boolean;
  data: T | null;
  message: string;
}
