import { Component } from '@angular/core';
import { Task} from './task';
import {Chart} from 'chart.js'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'bar-graph-test';
  create=false;
  list=false;
  time:number;
  taskName:string;
  description:string;
  startTime:Date;

  model: any={};
  listTask: Array<Task>=[];
 BarChart=[];
  createTask(){
    this.create=true;
    this.list=false;
  }
  taskList(){
    this.create=false;
    this.list=true;
  }
  onSubmit() {
    this.listTask.push({name:this.model.taskName,description:this.model.description,time:this.model.time,startTime:new Date(),finish:false});
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    this.model={};
    console.log(this.listTask);
  }

  calculo(Task){
    var canvas = <HTMLCanvasElement> document.getElementById("barChart");
    var ctx: CanvasRenderingContext2D = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    Task.finish=true;
    var time=new Date();
    var timeDif=time.getTime()-Task.startTime.getTime();
    timeDif = (timeDif/(1000 * 60 ));
    var porcentaje= (timeDif*100)/Task.time;
    this.BarChart=new Chart(ctx);
    this.BarChart=new Chart('barChart', {
      type:'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:[Task.name],
        datasets:[{
          label:'% Positivo',
          data:[
            porcentaje>100?100:Math.round(porcentaje)
          ],
          //backgroundColor:'green',
          backgroundColor:[
            'green'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },{
          label:'% Negativo',
          data:[
            porcentaje>100?-(Math.round(porcentaje)-100):0
          ],
          backgroundColor:'red',
         
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Productivity Graph',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });

  }
  
}
