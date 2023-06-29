import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ArticuloServiceService } from '../services/ArticuloService.service';
import { Articulo } from '../interfaces/articulo';
import { CarritoServiceService } from '../services/CarritoService.service';
import { Carrito } from '../interfaces/carrito';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @ViewChild('cantidadInput', { static: false }) cantidadInput: ElementRef | undefined;

  articulos: Articulo[] = [];
  cantidad=1;
  constructor(private servicioarticulos: ArticuloServiceService,
    private carritoService: CarritoServiceService) { }

  ngOnInit() {
    this.servicioarticulos.getArticulos().subscribe(res => {
      this.articulos = res;
      // Aquí puedes trabajar con la lista de artículos recibida del servicio
      console.log(this.articulos);
    });
  }
  agregarAlCarrito(articulo: Articulo, cantidad: any) {
    console.log(articulo);
    console.log(cantidad);
    const identificarusuario = localStorage.getItem("email");

    // Llama al servicio CarritoService para insertar el carrito
    const carrito:Carrito = {
      clienteID: Number(identificarusuario),
      articuloID: articulo.articuloID,
      cantidad: cantidad,
      carritoID: 0
    };
  
    this.carritoService.insertCarrito(carrito).subscribe(
      response => {
        console.log(response.message); // Mensaje de éxito
        alert('exito al añadir');
      },
      error => {
        console.log(error.message); // Mensaje de error
        alert('error al añadir');
      }
    );
  }
  

}
