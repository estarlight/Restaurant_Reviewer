import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getRestaurants(){
    return this._http.get('/api/restaurants');
  }

  addRestaurant(restaurant){
    return this._http.post('/api/restaurants/new', restaurant);
  }

  getRestaurantInfo(id){
    return this._http.get(`/api/restaurants/${id}`);
  }

  // getRestaurantForReview(id){
  //   return this._http.get(`/api/restaurants/${id}/review`);
  // }

  addReview(id, review){
    return this._http.post(`/api/restaurants/${id}/review`, review);
  }

  updateRestaurant(restaurant){
    return this._http.put(`/api/restaurants/${restaurant._id}/edit`, restaurant);
  }

  deleteRestaurant(id:string){
    return this._http.delete(`/api/delete/${id}`);
  }


}
