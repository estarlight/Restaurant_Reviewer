import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newRestaurant;
  error_msgs = [];

  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newRestaurant = {name: "", cuisine: ""};
  }

  createRestaurant(){
    let observable = this._http.addRestaurant(this.newRestaurant);
    observable.subscribe((data:any)=>{
      console.log()
      this.error_msgs = [];
      if(data.errors){
        console.log(data);
       
        for (var key in data.errors){
          console.log(data.errors[key].message);
          this.error_msgs.push(data.errors[key].message);  
        }
      }
      else{
        console.log("hit else statement");
        this.goHome();
      }
      // this.goHome();
      })
      // this.goHome();
}


  goHome(){
    this._router.navigate(['/restaurants']);
  }

}
