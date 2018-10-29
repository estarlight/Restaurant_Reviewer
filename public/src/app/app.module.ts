import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { NewComponent } from './new/new.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EditComponent } from './edit/edit.component';
import { WriteReviewComponent } from './write-review/write-review.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';



@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    NewComponent,
    ReviewsComponent,
    EditComponent,
    WriteReviewComponent,
    RestaurantListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
