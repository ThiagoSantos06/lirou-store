import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Header } from './client/pages/home/header/header.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { CategoriasComponent } from './client/pages/home/categorias/categorias.component';
import { DestaquesComponent } from './client/pages/home/destaques/destaques.component';
import { ProdutosComponent } from './client/pages/home/produtos/produtos.component';
import { HomeComponent } from './client/pages/home/home.component';
import { CartComponent } from './client/pages/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './client/pages/home/footer/footer.component';
import { AppRoutingModule } from './app.routing.module';
import { RegisterComponent } from './client/pages/register/register.component';
import { LoginComponent } from './client/pages/login/login.component';
import { DetalhesDosProdutosComponent } from './client/pages/purchase-product/detalhes-dos-produtos/detalhes-dos-produtos.component';
import { ProductService } from './client/services/ProductService';
import { PurchaseProductComponent } from './client/pages/purchase-product/purchase-product.component';

@NgModule({
  declarations: [
    Header,
    SearchBarComponent,
    AppComponent,
    CategoriasComponent,
    DestaquesComponent,
    ProdutosComponent,
    HomeComponent,
    CartComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    DetalhesDosProdutosComponent,
    PurchaseProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
