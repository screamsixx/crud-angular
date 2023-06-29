import { Component, OnInit } from '@angular/core';
import { CarritoServiceService } from '../services/CarritoService.service';
import { Detallecarrito } from '../interfaces/detallecarrito';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  listacarrito: Detallecarrito[]=[];
  identificador = Number(localStorage.getItem('email'));

  constructor(private serviciocarrito:CarritoServiceService) { }

  ngOnInit() {
    this.getmycarrito();//buscar el carrito del usuario logueado
  }

  getmycarrito(){
    this.serviciocarrito.getCarritoByClienteID(this.identificador).subscribe(res=>{
      this.listacarrito=res;
      console.log(this.listacarrito);
    });
  }

  sumar(detallecarrito:Detallecarrito){
    console.log(detallecarrito);
    this.serviciocarrito.sumarCantidadCarrito(detallecarrito).subscribe(res=>{
      this.getmycarrito();//rellena tabla
      console.log(res);
    });
  }
  restar(detallecarrito:Detallecarrito){
    console.log(detallecarrito);
    this.serviciocarrito.restarCantidadCarrito(detallecarrito).subscribe(res=>{
      this.getmycarrito();//rellena tabla
      console.log(res);
    });
  }

}
