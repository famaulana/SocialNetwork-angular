import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-channels',
  templateUrl: './card-channels.component.html',
  styleUrls: ['./card-channels.component.css']
})
export class CardChannelsComponent implements OnInit {

  @Input() public item;

  constructor() { }

  ngOnInit(): void {
  }

}
