import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../interfaces/articulo';
import { ArticuloServiceService } from '../services/ArticuloService.service';
@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrls: ['./editarproducto.component.css'],
})
export class EditarproductoComponent implements OnInit {
  private id = 0;
  objeto = [];
  popupconfirmar=false;
  articuloaeditar!: Articulo;
  constructor(
    private route: ActivatedRoute,
    private servicioarticulo: ArticuloServiceService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.buscararticulo();
  }
  guardarProducto(){
    this.popupconfirmar=false;
    this.servicioarticulo.updateArticulo(this.articuloaeditar).subscribe((res) => {
      console.log(res);
    });

  }
  ocultarpopup(){
    this.popupconfirmar=false;
  }

  buscararticulo() {
    this.servicioarticulo.getProductosById(this.id).subscribe((res) => {
      this.objeto = res;
      console.log(res);
    });
  }

  showguardar(articulo: Articulo) {
    this.popupconfirmar=true;
    this.articuloaeditar=articulo;
  }
}
