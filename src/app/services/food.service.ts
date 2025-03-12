import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods } from '../data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { 
  }


  getAll(): Food[]{
    return sample_foods;
  }


  getAllFoodsBySearchTerm(searchTerm: string){
    return this.getAll().filter((food)=> food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }
}
