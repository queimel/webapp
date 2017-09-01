import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   public titulo: string;
  constructor() { 
    this.titulo = "Web App de productos con Angular 4";
  }

  ngOnInit(){
    console.log("se cargo el componente home");
  }



}
