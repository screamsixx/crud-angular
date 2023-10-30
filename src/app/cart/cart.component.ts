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
  identificador:number;
  constructor(private serviciocarrito:CarritoServiceService) {
   this.identificador= Number(localStorage.getItem('id'));

  }

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
    detallecarrito.clienteID=this.identificador;
    this.serviciocarrito.sumarCantidadCarrito(detallecarrito).subscribe(res=>{
      this.getmycarrito();//rellena tabla
      console.log(res);
    });
  }
  restar(detallecarrito:Detallecarrito){
    detallecarrito.clienteID=this.identificador;
    this.serviciocarrito.restarCantidadCarrito(detallecarrito).subscribe(res=>{
      this.getmycarrito();//rellena tabla
      console.log(res);
    });
  }

}
