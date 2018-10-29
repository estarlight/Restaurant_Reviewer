import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private router: Router) {}

  ngOnInit(){
    // this.getAllAuthors();

    // this._route.params.subscribe((params: Params) => {
    //   console.log("params: ", params['id']);
    //   this.id = params['id'];
    //   this.getAuthor();
  // })
  }


  // getAllAuthors(){
  //   let observable = this._httpService.getAuthors();
  //   observable.subscribe((data)=> {
  //     this.authors = data;
  //   })
  // }

  // createAuthor(){
  //   let observable = this._httpService.addAuthor(this.newAuthor);
  //   observable.subscribe((data:any)=>{
  //     // console.log("created new author"); 
  //     this.error_msgs = [];
  //     if(data.errors){
  //       console.log(data);
        
  //       console.log(data.errors.name.message);
  //       this.error_msgs.push(data.errors.name.message);  
  //     }
  //     else{
  //       console.log("trying to clear form");
  //       this.newAuthor = { name: ""};
  //       this.router.navigate(['']);
  //     }
      
  //     })

}
