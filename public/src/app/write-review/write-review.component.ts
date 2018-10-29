import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.css']
})
export class WriteReviewComponent implements OnInit {

  restaurant = {name: "", cuisine: ""};
  id;
  error_msgs = [];
  newReview;

  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  

  ngOnInit() {
    this.newReview = {name: "", stars: "", review: ""};

    this._route.params.subscribe((params: Params) => {
      console.log("params: ", params['id']);
      this.id = params['id'];
      this.getRestaurant();
      
  })

  }


  getRestaurant(){
    let observable = this._http.getRestaurantInfo(this.id);
    observable.subscribe((data:any) => {
      this.restaurant = data;
      // this.name = data.name;
      console.log(data.name);
      console.log(this.restaurant);
      console.log(this.restaurant.name);
    })
  }

  createReview(){
    let observable = this._http.addReview(this.id, this.newReview);
    observable.subscribe((data:any) => {
      this.error_msgs = [];
      
      if(data.errors){
        console.log(data);
       
        for (var key in data.errors){
          console.log(data.errors[key].message);
          this.error_msgs.push(data.errors[key].message);  
        }
      }
      else{
        console.log("trying to clear form");
        // this.newRestaurant = { name: ""};
        this.goHome();
      }
    })
  }

  goHome(){
    this._router.navigate([`restaurants/${this.id}`]);
  }

}
