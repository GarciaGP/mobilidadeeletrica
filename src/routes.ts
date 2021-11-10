import { NgModule  } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./app/views/about/about.component";
import { ContactComponent } from "./app/views/contact/contact.component";
import { LandingComponent } from "./app/views/landing/landing.component";
import { ResultadosComponent } from "./app/views/resultados/resultados.component";
import { TodoComponent } from "./app/views/todo/todo.component";

const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'todo', component: TodoComponent},
    {path: 'resultados', component: ResultadosComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}