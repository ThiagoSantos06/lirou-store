import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { DestaquesComponent } from './destaques/destaques.component';
import { ProdutosComponent } from './produtos/produtos.component';

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
