import { Component } from '@angular/core';

@Component({
  selector: 'app-lenguajes',
  templateUrl: './lenguajes.component.html',
  styleUrls: ['./lenguajes.component.css']
})
export class LenguajesComponent {
  titulo ="FRAMEWORK ANGULAR"

  curso = ['PHP', 'C++'];

  agregarCurso(nombre:String){
    this.curso.push(String(nombre));
  }


}

