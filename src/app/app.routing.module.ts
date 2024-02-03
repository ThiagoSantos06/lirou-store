import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./client/pages/home/home.component";
import { CartComponent } from "./client/pages/cart/cart.component";
import { RegisterComponent } from "./client/pages/register/register.component";
import { LoginComponent } from "./client/pages/login/login.component";
import { DetalhesDosProdutosComponent } from "./client/pages/home/detalhes-dos-produtos/detalhes-dos-produtos.component";
import { ProdutosComponent } from "./client/pages/home/produtos/produtos.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cart', component: CartComponent},
    {path: 'product/:id', component: DetalhesDosProdutosComponent},
    {path: 'product', component: ProdutosComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}