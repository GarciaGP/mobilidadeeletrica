import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { TodoComponent } from './views/todo/todo.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/routes';
import { LandingComponent } from './views/landing/landing.component';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from './views/landing/logo/logo.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        AboutComponent,
        ContactComponent,
        TodoComponent,
        LandingComponent,
        LogoComponent
    ],
    imports: [
        FormsModule,
        AppRoutingModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent, AboutComponent, NavbarComponent]
})
export class AppModule { }
