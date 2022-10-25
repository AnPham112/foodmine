// Exclamation mark (!) says that this field is required
export class Food {
  id!: string;
  name!: string;
  price!: number;
  tags?: string[];
  favorite!: boolean;
  stars!: number;
  imageUrl!: string;
  origins!: string[];
  cookTime!: string;
  slug!: string;
}
