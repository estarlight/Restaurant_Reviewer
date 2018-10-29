import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id;
  restaurant = {name: "", cuisine: ""};
  error_msgs = [];

  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
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
    })
  }

  editRestaurant(){
    let observable = this._http.updateRestaurant(this.restaurant);
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
        console.log("successfully updated");
       
        this.goHome();
      }
    })
  }

  goHome(){
    this._router.navigate(['/restaurants']);
  }

}
