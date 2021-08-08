import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

    public quantidadeVeiculos = 0;
    public resultado = 0;
    public logoImage = 'assets/images/logofiap.svg'

    constructor() { }

    ngOnInit(): void {
    }

    calcular() {
        this.resultado = this.quantidadeVeiculos * 0.19;
        this.resultado = parseFloat(this.resultado.toFixed(2));
    }

}