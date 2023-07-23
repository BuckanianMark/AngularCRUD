import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  
  ngOnInit(): void {
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
