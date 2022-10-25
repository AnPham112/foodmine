import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { CartIterm } from '../shared/models/CartItem';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // private cart: Cart = new Cart();
  private cart: Cart = this.getCartFromLocalStorage()
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }

  addToCart(food: Food): void {
    let cartItem = this.cart.items
      .find(item => item.food.id === food.id)

    // Nếu food đã tồn tại trong cart rồi thì return 
    if (cartItem) {
      return
    }
    // Nếu nó chưa tồn tại trong cart thì push nó vào cart
    this.cart.items.push(new CartIterm(food))
    this.setCartToLocalStorage()
  }

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items
      .filter(item => item.food.id !== foodId)
    this.setCartToLocalStorage()
  }

  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items
      .find(item => item.food.id === foodId);

    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage()
  }

  clearCart() {
    this.cart = new Cart()
    this.setCartToLocalStorage()
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0)
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currenItem) => prevSum + currenItem.quantity, 0)
    const cartJson = JSON.stringify(this.cart)
    localStorage.setItem("Cart", cartJson)

    this.cartSubject.next(this.cart)
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem("Cart");
    return cartJson ? JSON.parse(cartJson) : new Cart()
  }
}
