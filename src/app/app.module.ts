import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Header } from './client/pages/home/header/header.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { CategoriasComponent } from './client/pages/home/categorias/categorias.component';
import { DestaquesComponent } from './client/pages/home/destaques/destaques.component';
import { ProdutosComponent } from './client/pages/home/produtos/produtos.component';
import { HomeComponent } from './client/pages/home/home.component';
import { CartComponent } from './client/pages/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './client/pages/home/footer/footer.component';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
