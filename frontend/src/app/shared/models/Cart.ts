import { CartIterm } from "./CartItem";

export class Cart {
    items: CartIterm[] = []; // new Cart()
    totalPrice: number = 0; // Tổng cộng giá tiền của tất cả CartItem
    totalCount: number = 0; // Tổng cộng quantity của tất cả CartItem
}