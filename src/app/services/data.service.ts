import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }

  login(email: any, password: any) {
    const data={
      email,
      password
    }
    return this.http.post("http://localhost:3000/login",data)
}
registration(uname: any, email: any, password: any,place:any) {
  const data={
    uname,
    email,
    password,
    place
  }
  return this.http.post("http://localhost:3000/registration", data)
}
addproduct(name:any,price:any,quantity:any, category:any){
  const data={
    
    name ,
    price,
    quantity,
    category
  }
  return  this.http.post("http://localhost:3000/addproduct",data)
}
viewproduct(){
  
  return  this.http.get("http://localhost:3000/viewproduct")
}
}
