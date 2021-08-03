import { NgModule  } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./views/about/about.component";
import { ContactComponent } from "./views/contact/contact.component";
import { TodoComponent } from "./views/todo/todo.component";

const routes: Routes = [
    // {path: '', component: AboutComponent},
    // {path: 'about', component: ContactComponent},
    // {path: 'contact', component: ContactComponent},
    // {path: 'todo', component: TodoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}