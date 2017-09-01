import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {
  public titulo:string;
  constructor(
    private _route:ActivatedRoute,
    private _router: Router
  ) {

    this.titulo="Listado de productos";
   }

  ngOnInit() {
    console.log("productoslist cargado");
  }

}
