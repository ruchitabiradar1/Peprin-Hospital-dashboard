import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
   name:string='';
  constructor(private websock: WebsocketService) { }
  ngOnInit(): void {
    this.websock.listen('sending').subscribe((data) => {
	     console.log("Rec at doc");
		console.log(data);
  var temperature = document.getElementById('temperature');
  var dateandtime = document.getElementById('dateandtime');
  var pulse = document.getElementById('pulse');
  var BP = document.getElementById('BP');


function typedKeys<T>(o: T): (keyof T)[] {
    // type cast should be safe because that's what really Object.keys() does
    return Object.keys(o) as (keyof T)[];
}
var details: Array<string>=[]; 
	typedKeys(data).forEach(k=>{details.push(data[k]);});    
	//output.innerHTML += '<p>' + 'The patient has a temperature of '+ details[0] +'deg Fahr, a pulse rate of '+details[1]+'/min and BP of '+details[2]+'mmHG and breathing rate of '+details[3]+'/sec </p>';
  pulse.innerHTML+= '<p>' + details[4];
  temperature.innerHTML+= '<p>' + details[2];
  this.name=details[0];
  BP.innerHTML+= '<p>' + details[3];
  dateandtime.innerHTML+= '<p>' + details[1];
  
    }
    )}

}


