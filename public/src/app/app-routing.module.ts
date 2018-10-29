import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { NewComponent } from './new/new.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EditComponent } from './edit/edit.component';
import { WriteReviewComponent } from './write-review/write-review.component';

const routes: Routes = [
  {path: 'restaurants', component: RestaurantsComponent, children: [
    {path: '', component: RestaurantListComponent},
    {path: 'new', component: NewComponent},
    {path: ':id', component: ReviewsComponent},
    {path: ':id/edit', component: EditComponent},
    {path: ':id/review', component: WriteReviewComponent},
  ]
},

  {path: '', pathMatch: 'full', redirectTo: '/restaurants'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
