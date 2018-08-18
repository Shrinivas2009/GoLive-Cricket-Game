import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from './models/user';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  private apiUrl = 'https://f347674wxudw.live.gamesparks.net/rs/server/YVqot9EdwT4qoKvDGhes2XJNR341K8lm/AuthenticationRequest';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  test(): string {
    return 'working';
  }
  constructor(private http: Http) {
   }

   login(user: User): Promise<any> {
    let url: string = `${this.apiUrl}/login`;
    return this.http.post( url, user, {headers: this.headers}).toPromise();
    console.log('url');
  }

  register(user): Promise<any> {
    let url: string = `${this.apiUrl}/register`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }

  ensureAuthenticated(token): Promise<any> {
    let url: string = '${this.apiUrl}/status';
    let headers: Headers = new Headers({
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ${token}',
      Authorization : "AuthenticationRequest"

    });
    return this.http.get(url, {headers: headers}).toPromise();
  }
}
