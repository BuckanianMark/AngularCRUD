import { Component,OnInit  } from '@angular/core';

import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{

customerresult:any;
customerlist:any;

constructor(private customerservice:CustomerService){}

getCustomerlist(){
  this.customerservice.getCustomers().subscribe((data: any)=>{
    this.customerresult = data;
    this.customerlist = this.customerresult.results;
    console.log(this.customerlist)
  })
}
  
  ngOnInit(): void {

    this.getCustomerlist()
      let show = document.querySelector('.add-user')
      let adding = document.querySelector('.input')
      let cancel = document.querySelector('.cancel')

      show?.addEventListener('click',()=>{
        adding?.classList.toggle("active")
      })
      cancel?.addEventListener('click',()=>{
        adding?.classList.toggle("active")
      })
  }

}
