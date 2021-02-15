import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-privado',
  templateUrl: './menu-privado.component.html',
  styleUrls: ['./menu-privado.component.scss']
})
export class MenuPrivadoComponent implements OnInit {

  miColor = 'lightgreen';
  constructor() { }

  ngOnInit(): void {
  }

}
