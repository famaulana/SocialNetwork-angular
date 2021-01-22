import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  @Input() public datas;

  constructor() { }

  ngOnInit(): void {
  }

}
