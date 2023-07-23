import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  constructor(){
  }
  ngOnInit(): void {
    const menubar = document.querySelector(".fa-bars");
    const navbar = document.querySelector(".container");
    menubar?.addEventListener('click', ()=>{
      navbar?.classList.toggle("active")
    })
  }
}
