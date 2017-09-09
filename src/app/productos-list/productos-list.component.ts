import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ProductoService } from '../producto/producto.service';
import { Producto } from '../producto/producto';


@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css'],
  providers: [ProductoService]
})
export class ProductosListComponent implements OnInit {
  public titulo:string;
  public productos: Producto[];

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _productoService: ProductoService
  ) {

    this.titulo="Listado de productos";
   }

  ngOnInit() {
    //console.log("productoslist cargado");
     this._productoService.getProductos().subscribe(
      result => {
        console.log(result);
        this.productos = result;
      },
      error =>{
        console.log(<any>error);
      }

     );
  }

}
