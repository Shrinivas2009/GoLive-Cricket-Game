import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { Component } from '@angular/core';
// import { DashboardComponent }   from './dashboard/dashboard.component';
// import { HeroesComponent }      from './heroes/heroes.component';
// import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';

// @Component({
//     selector: 'app-root',
//     templateUrl: 'app.component.html',
//     styleUrls: ['app.component.css']
//   })
const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'main-page', component: MainPageComponent }
//   { path: 'heroes', component: HeroesComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}