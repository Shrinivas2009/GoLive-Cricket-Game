import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthLoginService } from './../auth-login.service'; 
import 'rxjs/add/operator/toPromise';
import { User } from './../models/user';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // private apiUrl = 'https://f347674wxudw.live.gamesparks.net/rs/server/YVqot9EdwT4qoKvDGhes2XJNR341K8lm/LogEventRequest';
  // data: any = {};
  // test: string = 'just a test';
  user: User = new User();
  constructor(private router: Router, private auth: AuthLoginService, private modalService: NgbModal){
    // console.log('Hello fellow user');
  //  this.CreatePost();
  //  this.ngOnInit();
  }


  onLogin(): void {
    this.auth.login(this.user)
    .then((user) => {
      localStorage.setItem('token', user.json().auth_token);
      console.log("hello");
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  CreatePost() {
    // let post = { 
    //               "@class" : ".AuthenticationRequest",
    //               "eventKey" : "AuthenticationRequest",
    //               "userName": "",
    //               "password": ""

                  // "playerId" : "5aa00dc21c687304dae58d4a"
                // "@class" : ".LogEventRequest",
                //  "endDate": "2018-08-17T00:00:00.000Z",
                // "eventKey" : "AnalyticsPracticeMatchPlayers",
                // "playerId" : "5aa00dc21c687304dae58d4a",
                // "startDate" : "2018-08-01T00:00:00.000Z"
              // };

    // this.http.post(this.apiUrl, post)
    //   .subscribe(response => {
    //     console.log(post);
    //   });
  }
  // constructor() { }

  
  ngOnInit(): void {
                    // let post = { 
                    //   "@class" : ".AuthenticationRequest",
                    //   "eventKey" : "AuthenticationRequest",
                    //   "userName": "",
                    //   "password": ""
                    // };
    // this.http.post(this.apiUrl, post)
    // .subscribe(response => {
      // console.log(post);
    // });

                      // let sampleUser: any = {
                      //   username: 'michael@realpython.com' as string,
                      //   password: 'michael' as string
                      // };
                      // this.auth.register(sampleUser)
                      // .then((user) => {
                      //   console.log(user.json());
                      // })
                      // .catch((err) => {
                      //   console.log(err);
                      // });
                      // this.auth.login(sampleUser).then((user) => {
                      //   console.log(user.json());
                      // })
                      // .catch((err) => {
                      //   console.log(err);
                      // });


    // console.log(this.auth.test());

  } 

  


  // loginUser(e) {
  //   e.preventDefault();
  //   console.log(e);
  //   var username = e.target.elements[0].value;
  //   var password = e.target.elements[1].value;
  //   // console.log(username, password);
  //   // return false;
  //   if(username == 'admin' && password== 'admin123'){
  //     console.log('Welcome to user');
  //   }
  // }

  open(forgetPassword) {
    this.modalService.open(forgetPassword, { centered: true });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
