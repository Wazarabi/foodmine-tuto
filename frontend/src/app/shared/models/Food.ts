export class Food{
  id!: string; // ! for requiered
  name!: string;
  price!: number;
  tags?: string[]; // ? for optionel
  favorite!: boolean;
  stars!: number;
  imageUrl!: string;
  origins!: string[];
  cookTime!:string;
}
