import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from '../services/ClienteService';
import { ArticuloServiceService } from '../services/ArticuloService.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TiendaServiceService } from '../services/TiendaService.service';
import { Tienda } from '../interfaces/tienda';
import { Articulo } from '../interfaces/articulo';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  articulos : Articulo[]=[];
  popupVisible = false;
  popupeliminar=false;
  popupeditar=false;
  productForm!: FormGroup;
  editorForm!: FormGroup;
  listatiendas: Tienda[] = [];
  base64String = '';
  id=0;
  articulo: Articulo | undefined;
  constructor(
    private servicioclientes: ClienteService,
    private servicioarticulo: ArticuloServiceService,
    private formBuilder: FormBuilder,
    private serviciotienda: TiendaServiceService,
    private sanitizer: DomSanitizer,
    private router:Router
  ) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      imagen: ['', Validators.required],
      stock: ['', Validators.required],
      tiendaID: ['', Validators.required],
    });
     this.editorForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      imagen: ['', Validators.required],
      stock: ['', Validators.required],
      tiendaID: ['', Validators.required],
    });


    this.serviciotienda.getTiendas().subscribe((res) => {
      console.log(res);
      this.listatiendas = res;
    });

    this.llenartabla();
  }

  ocultarEditar(){
    this.popupeditar=false;
  }

  onSubmitEditor(){
    this.popupeditar=false;
  }

  ocultarEliminar() {
    this.popupeliminar = false;
  }

  eliminarProducto() {
    const nuevoArticulo: Articulo = {
      articuloID: this.id,
      codigo: "",
      descripcion: "",
      precio: 0,
      imagen: "",
      stock: 0,
      tiendaID: 0,
    };
    this.servicioarticulo.deleteArticulobyID(nuevoArticulo).subscribe(res=>{
      console.log(res);
      this.llenartabla();
    });
    this.ocultarEliminar();
  }

  showeliminarArticulo(id: number) {
    this.id=id;//guardar el id que se quiere editar
    this.popupeliminar = true; //confirmacion
    console.log(id);
  }
  showeditarArticulo(id: number) {
    this.id=id;//guardar el id que se quiere editar
    console.log(this.id);
    this.router.navigate(['/editar-producto', this.id]);
  }

  llenartabla() {
    this.servicioarticulo.getArticulos().subscribe((res) => {
      console.log(res);
      this.articulos = res;
    });
  }
  onImageValueChanged(event: any) {
    const file: File = event.value[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.base64String = e.target.result;
        // Eliminar la parte inicial "data:image/jpeg;base64,"
        this.base64String = this.base64String.substring(
          this.base64String.indexOf(',') + 1
        );
        console.log(this.base64String);
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      const nuevoArticulo: Articulo = {
        articuloID: 0,
        codigo: this.productForm.value.codigo,
        descripcion: this.productForm.value.descripcion,
        precio: this.productForm.value.precio,
        imagen: this.base64String,
        stock: this.productForm.value.stock,
        tiendaID: parseInt(this.productForm.value.tiendaID, 10),
      };

      this.servicioarticulo.insertArticulo(nuevoArticulo).subscribe((res) => {
        console.log(res);
        this.llenartabla();
      });
      // Aquí puedes hacer lo que necesites con el objeto nuevoArticulo, como enviarlo a través de una API o manipularlo de alguna otra manera.
      console.log(nuevoArticulo); // Ejemplo: Mostrar el objeto en la consola
      this.hideAdd();
    }
  }

  onAddProductClick() {
    console.log('Botón "Añadir producto" clickeado');
  }

  showAdd() {
    this.productForm.reset();
    this.popupVisible = true;
  }

  hideAdd() {
    this.popupVisible = false;
  }
}
function getImagenHTML() {
  throw new Error('Function not implemented.');
}
