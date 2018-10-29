import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  restaurant;
  reviews;
  id;

  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.reviews = [];
    this._route.params.subscribe((params: Params) => {
      console.log("params: ", params['id']);
      this.id = params['id'];
      this.getRestaurant();
  })
    // this.getReviews;
}

  getRestaurant(){
    let observable = this._http.getRestaurantInfo(this.id);
    observable.subscribe((data:any) => {
      this.restaurant = data;
      this.reviews = data.reviews;
    })
  }

  // getReviews(){
  //   this.reviews=this.restaurant.reviews;
  // }


  writeReview(){
    this._router.navigate([`restaurants/${this.id}/review`]);
  }

}
