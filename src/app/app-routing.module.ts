import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './guard/AuthGuard';
import { ProductosComponent } from './productos/productos.component';
import { EditarproductoComponent } from './editarproducto/editarproducto.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Ruta por defecto
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'carrito', component: CartComponent,canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard] },
  { path: 'productos', component: ProductosComponent,canActivate: [AuthGuard] },
  { path: 'editar-producto/:id', component: EditarproductoComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotfoundComponent } // Ruta para página no encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
