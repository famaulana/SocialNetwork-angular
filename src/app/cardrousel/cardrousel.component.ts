import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardrousel',
  templateUrl: './cardrousel.component.html',
  styleUrls: ['./cardrousel.component.css']
})
export class CardrouselComponent implements OnInit {

  @Input() public datas;

  constructor() { }

  ngOnInit(): void {
  }

}
