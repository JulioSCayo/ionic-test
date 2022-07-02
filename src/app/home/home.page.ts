import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Arreglo de objetos en el que se guardarán los usuarios de la API con los atributos necesarios
  users = [{
    id: '',
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Se obtiene los usuarios de la API
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      // console.log(json); // Para pruebas
      this.users = json; // Se guardan los usarios en el arreglo de objetos que se muestra en el html
    });
  }
}
