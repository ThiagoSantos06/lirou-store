import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./client/pages/home/home.component";
import { CartComponent } from "./client/pages/cart/cart.component";
import { RegisterComponent } from "./client/pages/register/register.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cart', component: CartComponent},
    {path: 'register', component: RegisterComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}