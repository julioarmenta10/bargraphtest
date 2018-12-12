import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormGroup,FormBuilder} from '@angular/forms';
import {RegistroService} from '../../app/registro.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  encuestaForm:FormGroup;
  encuesta:any;

  constructor(private pf:FormBuilder, private registroService:RegistroService) { }

  ngOnInit() {
    this.encuestaForm=this.pf.group({
      Q1:['',Validators.required],
      Q2:['',Validators.required],
      Q3:['',Validators.required],
      Q4:['',Validators.required],
      Q5:['',Validators.required],
      Q6:['',Validators.required],
      Q7:['',Validators.required],
      Q8:['',Validators.required],
      Q9:['',Validators.required],
      Q10:['',Validators.required],
      Q11:['',Validators.required],
      Q12:['',Validators.required],
      Q13:['',Validators.required],
      Q14:['',Validators.required],
      Q15:['',Validators.required],
      Q16:['',Validators.required],
      Q17:['',Validators.required],
      Q18:['',Validators.required],
      Q19:['',Validators.required],
      Q20:['',Validators.required],
      Q21:['',Validators.required],
      Q22:['',Validators.required],
      Q23:['',Validators.required],
      Q24:['',Validators.required]     

    });
  }

  onSubmit(){
    this.encuesta=this.saveEncuesta();
    console.log("gg");
    console.log(this.encuesta);
    this.registroService.postEncuesta(this.encuesta)
    .subscribe((response)=>{
      console.log(response);
    })
    this.encuestaForm.reset();
  }
  saveEncuesta(){
    const saveEncuesta ={
      Q1:this.encuestaForm.get('Q1').value,
      Q2:this.encuestaForm.get('Q2').value,
      Q3:this.encuestaForm.get('Q3').value,
      Q4:this.encuestaForm.get('Q4').value,
      Q5:this.encuestaForm.get('Q5').value,
      Q6:this.encuestaForm.get('Q6').value,
      Q7:this.encuestaForm.get('Q7').value,
      Q8:this.encuestaForm.get('Q8').value,
      Q9:this.encuestaForm.get('Q9').value,
      Q10:this.encuestaForm.get('Q10').value,
      Q11:this.encuestaForm.get('Q11').value,
      Q12:this.encuestaForm.get('Q12').value,
      Q13:this.encuestaForm.get('Q13').value,
      Q14:this.encuestaForm.get('Q14').value,
      Q15:this.encuestaForm.get('Q15').value,
      Q16:this.encuestaForm.get('Q16').value,
      Q17:this.encuestaForm.get('Q17').value,
      Q18:this.encuestaForm.get('Q18').value,
      Q19:this.encuestaForm.get('Q19').value,
      Q20:this.encuestaForm.get('Q20').value,
      Q21:this.encuestaForm.get('Q21').value,
      Q22:this.encuestaForm.get('Q22').value,
      Q23:this.encuestaForm.get('Q23').value,
      Q24:this.encuestaForm.get('Q24').value
    }
    return saveEncuesta;
      }
}
