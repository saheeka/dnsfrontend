import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
uname=""
email=""
pwd=""
place=""
  constructor( private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }
  registration(){
    var uname=this.uname
    var email=this.email
    var pwd=this.pwd
    var place=this.place
   
    this.ds.registration( uname,email,pwd, place)
    .subscribe((result:any)=>{
      if (result){
        alert(result.message)
        
        //alert("successfully registered")
        this.router.navigateByUrl("")
      }
    },
    (result)=>{
      alert(result.error.message)
    
      // else{
      //   alert("user already exist..!!!")
      // }
    })
    
 
}


}
