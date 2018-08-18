import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import {  FormGroup,  FormBuilder,  Validators,  FormControl } from '@angular/forms';
// import { User } from './user.interface';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {AbstractControl} from '@angular/forms';
import { User } from './../models/user';
import { AuthLoginService } from './../auth-login.service'; 
// import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  user: User = new User();
  constructor(private router: Router, private auth: AuthLoginService) {}
  onRegister(): void {
    this.auth.register(this.user)
    .then((user) => {
      localStorage.setItem('token', user.json().auth_token);
    })
    .catch((err) => {
      console.log(err);
    });
  }


  // public user: User;
                    // private apiUrl = 'https://f347674wxudw.live.gamesparks.net/rs/server/YVqot9EdwT4qoKvDGhes2XJNR341K8lm/LogEventRequest';
                    // data: any = {};
                    // private formSubmitAttempt: boolean;
                     // form: FormGroup;
                    // constructor(private http: Http,
                    //             private formBuilder: FormBuilder ){
                    //             // console.log('Hello fellow user');
                    //           this.CreatePost();

                    //           // this.form = fb.group({
                    //           //   firstName: ['', Validators.required],
                    //           //   lastName: ['', Validators.required],
                    //           //   email: ['', Validators.required],
                    //           //   password: ['', Validators.required],
                    //           //   confirmPassword: ['', Validators.required]
                    //           // });
                              
                            

                    // }

  CreatePost() {
                                        // let post = { 
                                        //               "@class": ".RegistrationRequest",
                                        //               "eventKey" : "RegistrationRequest",
                                        //               "displayName": "",
                                        //               "password": "",
                                        //               "segments": {},
                                        //               "userName": ""
                                        //           };

    // this.http.post(this.apiUrl, post)
    //   .subscribe(response => {
    //     console.log(post);
    //   });
  }
  // constructor() { }

  ngOnInit() {
                                                // this.form = this.formBuilder.group({
                                                //   username: ['',Validators.required, Validators.minLength(3)],
                                                //   password: ['',Validators.required],
                                                //   confirmPassword: ['',Validators.required],
                                                //   refer: ['',Validators.required]
                                                // },{
                                                //     validator: PasswordValidation.MatchPassword
                                                // });
   
  }

  // formGroup() {
  //   this.form = this.formBuilder.group({
  //     username: new FormControl(''),
  //     password: new FormControl()
  //   });
  // }
  // isFieldValid(field: string) {
  //   return !this.form.get(field).valid && this.form.get(field).touched;
  // }
  
  // displayFieldCss(field: string) {
  //   return {
  //     'has-error': this.isFieldValid(field),
  //     'has-feedback': this.isFieldValid(field)
  //   };
  // }
  
  onSubmit() {
    // this.formSubmitAttempt = true;
    // if (this.form.valid) {
      // console.log('form submitted');
                                          // console.log(this.form);
    // }
  }
  // isFieldValid(field: string) {
  //   return (!this.form.get(field).valid && this.form.get(field).touched) ||
  //     (this.form.get(field).untouched && this.formSubmitAttempt);
  // }
                                          // get username() {
                                          //   return this.form.get('username');
                                          // }
}

export class PasswordValidation {

  static MatchPassword(AC: AbstractControl) {
     let password = AC.get('password').value; // to get value in input tag
     let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
      if(password != confirmPassword) {
          console.log('false');
          AC.get('confirmPassword').setErrors( {MatchPassword: true} )
      } else {
          console.log('true');
          return null
      }
  }
}
