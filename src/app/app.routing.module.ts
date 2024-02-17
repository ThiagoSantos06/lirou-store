import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./client/pages/home/home.component";
import { CartComponent } from "./client/pages/cart/cart.component";
import { RegisterComponent } from "./client/pages/register/register.component";
import { LoginComponent } from "./client/pages/login/login.component";
import { PurchaseProductComponent } from "./client/pages/purchase-product/purchase-product.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cart', component: CartComponent},
    {path: 'product/:id', component: PurchaseProductComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
