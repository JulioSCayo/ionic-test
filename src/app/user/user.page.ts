import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  // Objeto en el que se guarda la información del usuario obtenido a partir del id recibido
  user = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
    };

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Se recibe el id como parámetro desde la página anterior
    let id = this.activatedRoute.snapshot.params.id;

    // Se obtiene el usuario que coincide con el id recibido
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(response => response.json())
    .then(json => {
      // console.log(json); // Para pruebas
      this.user = json; // Se guarda el usuario en el objeto que se muestra en el html
    });
  }
}
