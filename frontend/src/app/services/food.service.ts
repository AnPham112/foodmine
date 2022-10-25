import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    console.log(sample_foods)
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(food => food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }

  getFoodBySlug(foodSlug: string): Food {
    return this.getAll().find((food) => food.slug.toLowerCase() === foodSlug.toLowerCase()) ?? new Food()
  }

  getAllTags(): Tag[] {
    return sample_tags
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag === "All"
      ? this.getAll()
      : this.getAll().filter(food => food.tags?.includes(tag))
  }
}
