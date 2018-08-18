import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/Rx';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'app work!';
  model: any = {};
  
  // onSubmit() {
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  // }
  // private apiUrl = 'https://f347674wxudw.live.gamesparks.net/rs/server/YVqot9EdwT4qoKvDGhes2XJNR341K8lm/LogEventRequest';
  // data: any = {};
  // constructor(private http: Http){
    // console.log('Hello fellow user');
  //  this.CreatePost();
  // }

  // CreatePost() {
    // let post = { 
                  // "@class" : ".AuthenticationRequest",
                  // "eventKey" : "AuthenticationRequest",
                  // "userName": "",
                  // "password": ""
              // };

    // this.http.post(this.apiUrl, post)
      // .subscribe(response => {
        // console.log(response);
      // });
  // }
}
// export class AppComponent implements OnInit {
 
  // constructor(private http: Http){}
  
  // ngOnInit() {
    // this.http.get('https://d355537ZfEjV.preview.gamesparks.net/rs/debug/rfezu04XshUZCblRcLECr50VWfEWiBw0/LogEventRequest')
    // .subscribe(data => {
    //   console.log(data);
    // });
  // }
 
// }
