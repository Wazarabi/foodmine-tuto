import { Observable } from 'rxjs';
import { FoodService } from './../../../services/food.service';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute) {
    let foodObservable:Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        foodObservable = foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if(params.tag)
        foodObservable = foodService.getAllFoodsByTag(params.tag);
      else
        foodObservable = foodService.getAll();

      foodObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      })

    })
   }

  ngOnInit(): void {
  }

}
