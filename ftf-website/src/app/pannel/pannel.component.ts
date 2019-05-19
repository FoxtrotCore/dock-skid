import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pannel',
  templateUrl: './pannel.component.html',
  styleUrls: ['./pannel.component.css']
})
export class PannelComponent implements OnInit {
  pannel: Pannel = {
    id: 420,
    name: 'Dashboard'
  }
  constructor() {}
  ngOnInit() {}
}
