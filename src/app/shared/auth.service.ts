import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  user:User
  urlAPI:string = 'http://localhost:3000/user'

  constructor(private http:HttpClient) {

  }
      login(username:string, password:string):Observable<boolean>{
        return this.http.get<User[]>(this.urlAPI+'?username='+username+'&password='+password)
        .map((users)=>{
          if(users.length === 1){
          this.user = users[0];
          return true;
        }
        return false;
        })
      }

      logout():void{
        this.user = null;
      }

}
