import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment.dev';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

    constructor(private httpclient:HttpClient) {  }
    getCustomers(){
      let url = enviroment.CUSTOMER_BASE_URL + enviroment.CUSTOMER_.GET_ALL_CUSTOMERS;
      return this.httpclient.get(url)
      
      
    }
//     viewcustomer(id){

//     }
//     editcustomer(id, customerObj){
      
//     }
//     deletecustomer(id){
//     }
//     searchcustomer(id){
      
// }
 


}
