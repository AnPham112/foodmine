import { Food } from "./Food";

export class CartIterm {
  // food!: Food;
  // quantity: number = 1;
  // price: number = this.food.price;

  // constructor(food: Food) {
  //   this.food = food;
  // }

  constructor(public food: Food) { }

  quantity: number = 1;
  price: number = this.food.price

}
