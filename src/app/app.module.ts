import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxPopupModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DxDataGridModule } from 'devextreme-angular';
import { RouterOutlet } from '@angular/router';
import { DxBoxModule } from 'devextreme-angular';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DxFileUploaderModule } from 'devextreme-angular/ui/file-uploader';
import { ProductosComponent } from './productos/productos.component';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CarouselModule } from 'primeng/carousel';
import { EditarproductoComponent } from './editarproducto/editarproducto.component';


@NgModule({
  declarations: [								
    AppComponent,
      LoginComponent,
      SignupComponent,
      CartComponent,
      DashboardComponent,
      NotfoundComponent,
      FooterComponent,
      ProductosComponent,
      EditarproductoComponent
   ],
  imports: [
    CarouselModule,
    ScrollPanelModule,
    TableModule,
    DxFileUploaderModule,
    DxPopupModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    RouterOutlet,
    DxBoxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
