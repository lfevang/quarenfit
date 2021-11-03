import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  panelOpenStateNutri = false;
  panelOpenStateFis = false;

  displayedColumns: string[] = ['item', 'descricao', 'quantidade' ,'horario'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {

  }

}

export interface Dieta{
  item: string;
  descricao: string;
  quantidade: string;
  horario: string;

}

const ELEMENT_DATA: Dieta[] = [
  {item: '1', descricao: 'Hydrogen', quantidade: '3', horario: 'M / T / N'},
  {item: '2', descricao: 'jujuba', quantidade: '3', horario: 'M'},
  {item: '3', descricao: 'agua', quantidade: '5', horario: 'M / T / N'},

];
