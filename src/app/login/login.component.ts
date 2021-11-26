import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email=""
pwd=""

  constructor( private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }
  login(){
    var email=this.email
    var pwd=this.pwd
    this.ds.login(email,pwd)
    .subscribe((result:any)=>{
        if(result)
        {
        //   localStorage.setItem("token",result.token)
        //  localStorage.setItem("currentUser",result.currentUser)
        //   localStorage.setItem("currentAcc",email)
          alert(result.message)
          this.router.navigateByUrl("viewproducts")
        }
        },
        (result)=>{
          alert(result.error.message)
        }
    )
  
  
}
  

}
