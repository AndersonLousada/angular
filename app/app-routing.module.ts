import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {OverviewComponent} from "./components/overview/overview.component";
import {LoginComponent} from "./components/login/login.component";
import {GaleriaComponent} from "./components/galeria/galeria.component"

const routes: Routes = [
    {path: '', component: OverviewComponent},
    {path: 'Login', component: LoginComponent},
    {path: 'Galeria', component: GaleriaComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {};