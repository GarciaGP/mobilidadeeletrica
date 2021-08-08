import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    odsImage = 'assets/images/AGENDA_2030_cpia.png'

  constructor() { }

  ngOnInit(): void {
  }

}
