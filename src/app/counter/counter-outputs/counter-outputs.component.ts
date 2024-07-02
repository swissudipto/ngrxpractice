import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-outputs',
  templateUrl: './counter-outputs.component.html',
  styleUrls: ['./counter-outputs.component.css']
})
export class CounterOutputsComponent implements OnInit {

  counter : number = 0;
  constructor(private store: Store<{counter : {counter :number}}>){
  }
  ngOnInit(): void {
    this.store.select('counter').subscribe((data)=>{

      debugger;
      this.counter = data.counter;
    })
  }
  
  
}
