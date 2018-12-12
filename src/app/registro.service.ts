import { Injectable } from '@angular/core';
import {Headers,Http,Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  registroUrl='http://localhost:3000/Registro';
  encuestaUrl='http://localhost:3000/Encuesta';

  preURL='http://localhost:3000/Servicios/';
  
  
    constructor(private http:Http) { 
  
    }
    postRegistro(registro:any){
      const newpres=JSON.stringify(registro);
      const headers=new Headers ({'Content-Type':'application/json'});
      return this.http.post(this.registroUrl,newpres,{headers});
      // .subscribe(res=>{
      //   console.log(res.json());
      //   return res.json();
      // })
  
    }
    postEncuesta(encuesta:any){
      const newpres=JSON.stringify(encuesta);
      const headers=new Headers ({'Content-Type':'application/json'});
      return this.http.post(this.encuestaUrl,newpres,{headers});
      // .subscribe(res=>{
      //   console.log(res.json());
      //   return res.json();
      // })
  
    }
    // getServicios(){
    //   return this.http.get(this.presURL)
    //   .map(res=>res.json());
    // }
  
    // getServicio ( id$: string ) {
    //   const url = this.preURL + id$;
    //   return this.http.get(url)
    //   .map(res=>res.json());
    // }
  
    // putServicio(servicio:any,id$:string){
    //   const newpre=JSON.stringify(servicio);
    //   const headers=new Headers ({'Content-Type':'application/json'});
    //   const url = this.preURL + id$;
    //   return this.http.put(url,newpre,{headers})
    //   .map(res =>{
    //     console.log(res.json());
    //     return res.json();
    //   })
    // }
  
    // delServicio(id$:string){
    //   const url = this.preURL + id$;
    //   return this.http.delete(url)
    //   .map(res=>res.json());
    // }
}
