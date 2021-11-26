import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
name=""
price=""
quantity=""
category=""
  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }
  addproduct(){
    //var id= this.id
    var name=this.name
    var price=this.price
    var qnt=this.quantity
var cat=this.category    
    this.ds.addproduct(name,price,qnt,cat)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
      }
    },
    (result)=>{
      alert(result.error.message)
    }
    )
    // this.reminders.push({
    //   id:this.reminders.length,
    //   Event:event,
    //   Note:note
    //   //Date:date
    // })
      
  }


}
