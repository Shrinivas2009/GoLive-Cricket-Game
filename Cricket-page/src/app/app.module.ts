// import { environment } from './../environments/environment';
// import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
// import { FormsModule } from '@angular/forms';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpServicesComponent } from './http-services/http-services.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';

import { AppRoutingModule }     from './app-routing.module';
import { AppFieldErrorDisplayComponent } from './app-field-error-display/app-field-error-display.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginRedirectService } from './services/login-redirect.service';
import { EnsureAuthenticatedService } from './services/ensure-authenticated.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AuthLoginService } from './auth-login.service';
import { StatusComponent } from './status/status.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { MyDeckComponent } from './my-deck/my-deck.component';
import { MyShopComponent } from './my-shop/my-shop.component';
const appRoutes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent, canActivate: [LoginRedirectService] },
  { path: 'status', component: StatusComponent, canActivate: [LoginRedirectService] },
  { path: 'main-page', component: MainPageComponent}, 
  { path: 'leader-board', component: LeaderBoardComponent  },
  { path: 'add-friends', component: AddFriendsComponent  },
  { path: 'my-deck', component: MyDeckComponent  },
  { path: 'my-shop', component: MyShopComponent  }
  ]
  
  
@NgModule({
  declarations: [
    AppComponent,
    HttpServicesComponent,
    LoginComponent,
    MainPageComponent,
    RegisterComponent,
    AppFieldErrorDisplayComponent,
    StatusComponent,
    LeaderBoardComponent,
    AddFriendsComponent,
    MyDeckComponent,
    MyShopComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild([{
      path: 'main-page',
      component: MainPageComponent,
      children:  [{
          path: '',
          component: MainPageComponent
      },
      {
          path: '',
          children: [{
            path: '',
            component: MainPageComponent
          },{
            path: 'leader-board', // THIS ONE WORKS ( example.com/en/imprint)
            component: LeaderBoardComponent
          },{
            path: 'add-friends', // THIS ONE WORKS ( example.com/en/imprint)
            component: AddFriendsComponent
          },{
            path: 'my-deck', // THIS ONE WORKS ( example.com/en/imprint)
            component: MyDeckComponent
          },{
            path: 'my-shop', // THIS ONE WORKS ( example.com/en/imprint)
            component: MyShopComponent
          }]
      }]
    }])
  ],
  exports: [RouterModule],
  entryComponents: [
    LoginComponent, 
    RegisterComponent
  ],
  providers: [
    AuthLoginService,
    EnsureAuthenticatedService,
    LoginRedirectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
