import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  nombreFormControl = new FormControl('', [
    Validators.required
    ]);
    apellidoFormControl = new FormControl('', [
      Validators.required
      ]);
      fechaFormControl = new FormControl('', [
        Validators.required
        ]);
        generoFormControl = new FormControl('', [
          Validators.required
          ]);
          carreraFormControl = new FormControl('', [
            Validators.required
            ]);
            promedioFormControl = new FormControl('', [
              Validators.required
              ]);
  constructor() { }

  ngOnInit() {
  }

}
