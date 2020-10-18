import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public sum:any;

  public sum1:any;


  public resultado:number;
  constructor() {

this.sum=2;
this.sum1=3;
  }

  ngOnInit()
  {
    this.sumando();
  }

 sumando(){



    this.resultado= this.sum+this.sum1;
    }

}



  
