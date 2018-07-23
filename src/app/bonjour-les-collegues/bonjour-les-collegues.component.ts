import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonjour-les-collegues',
  templateUrl: './bonjour-les-collegues.component.html',
  styleUrls: ['./bonjour-les-collegues.component.css']
})
export class BonjourLesColleguesComponent implements OnInit {

  collegues:string[];

  constructor() {
    this.collegues = ['test1','test2','test3'];
   }

  ngOnInit() {
  }

}
