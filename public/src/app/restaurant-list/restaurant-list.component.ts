import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants = [];

  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getAllRestaurants();
  }

  getAllRestaurants(){
    let observable = this._http.getRestaurants();
    observable.subscribe((data:any) => {
      this.restaurants = data;
    })
  }

  readReviews(id:string){
    this._router.navigate(['restaurants', id]);

  }

  clickUpdate(id:string){
    this._router.navigate([`restaurants/${id}/edit`]);

  }

  clickDelete(id:string){
    let observable = this._http.deleteRestaurant(id);
    observable.subscribe((data:any) => {
      this.getAllRestaurants();
    })
  }

}
