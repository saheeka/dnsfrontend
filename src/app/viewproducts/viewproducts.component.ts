import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  constructor(private ds:DataService, private router:Router) { }
  products:any[]=[]
  ngOnInit(): void {
    this.ds.viewproduct()
    .subscribe((result:any)=>{
      if(result){
        
       console.log(result );
       
this.products=result.products

      }
    },
    (result:any)=>{
      alert(result.error.message)
    })
  }
  
  
   
}
