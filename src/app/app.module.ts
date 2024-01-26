import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Header } from './client/header/header.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { CategoriasComponent } from './client/categorias/categorias.component';
import { DestaquesComponent } from './client/destaques/destaques.component';
import { ProdutosComponent } from './client/produtos/produtos.component';

@NgModule({
  declarations: [
    Header,
    SearchBarComponent,
    AppComponent,
    CategoriasComponent,
    DestaquesComponent,
    ProdutosComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
