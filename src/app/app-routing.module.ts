import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // helps in routing
import { HeroesComponent } from './heroes/heroes.component'; // directs the router to the specified heros location
import { DashboardComponent } from './dashboard/dashboard.component'; // directs the router to the specified dashboard location
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // directs the router to the specified heros detail location

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }