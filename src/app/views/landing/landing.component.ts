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
    public totalEstimadoPoluicao2021 = 266875463000

    constructor() { }

    ngOnInit(): void {
    }

    calcular() {

        let mediaDeToneladas = 4600;
        let mediaTotalEmitido = mediaDeToneladas * this.quantidadeVeiculos;
        let totalEmitidoPorVeiculosEletricos = mediaTotalEmitido * 0.37 
        let comparativo = (this.totalEstimadoPoluicao2021 - totalEmitidoPorVeiculosEletricos)
        console.log((comparativo / this.totalEstimadoPoluicao2021))
        comparativo = (comparativo / this.totalEstimadoPoluicao2021) 
        console.log(comparativo)
        comparativo =  comparativo * 100
        this.resultado = totalEmitidoPorVeiculosEletricos
        this.resultado = parseFloat(this.resultado.toFixed(2));
    }

}