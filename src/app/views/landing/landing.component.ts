import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

    logoImage = 'assets/images/logofiap.png'

  constructor() { }

  ngOnInit(): void {
  }

}
