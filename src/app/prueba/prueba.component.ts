import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormGroup,FormBuilder} from '@angular/forms';
import {RegistroService} from '../../app/registro.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  registroForm:FormGroup;
  registro:any;

  constructor(private pf:FormBuilder,private registroService:RegistroService) { }

  ngOnInit() {
    this.registroForm=this.pf.group({
      nombre:['',Validators.required],
      apellido:['',[Validators.required,Validators.minLength(10)]],
      fecha:['',Validators.required],
      genero:['',Validators.required],
      carrera:['',Validators.required],
      promedio:['',Validators.required],
      trabaja:['',Validators.required],
      edad:['',Validators.required],
      grupo:[''],
      ano:['']

    });
  }

  registroTest(){
    this.registro=this.saveRegistro();
    console.log("gg");
    console.log(this.registro);
    this.registroService.postRegistro(this.registro)
    .subscribe((response)=>{
      console.log(response);
    })
    this.registroForm.reset();
  }
  saveRegistro(){
    const saveRegistro ={
      nombre:this.registroForm.get('nombre').value,
      apellido:this.registroForm.get('apellido').value,
      fecha:this.registroForm.get('fecha').value,
      genero:parseInt(this.registroForm.get('genero').value),
      carrera:parseInt(this.registroForm.get('carrera').value),
      promedio:this.registroForm.get('promedio').value,
      grupo:this.registroForm.get('grupo').value,
      trabaja:parseInt(this.registroForm.get('trabaja').value),
      edad:this.registroForm.get('edad').value,
      ano:this.registroForm.get('ano').value
    };
    return saveRegistro;
      }
    
}

