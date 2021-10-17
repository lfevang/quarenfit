import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";

const routes: Routes = [
    //{path: '', component: },
    {path: 'entrar', component: MenuComponent}
]

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule{

}
