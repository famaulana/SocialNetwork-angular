import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-activity',
  templateUrl: './card-activity.component.html',
  styleUrls: ['./card-activity.component.css']
})
export class CardActivityComponent implements OnInit {

  @Input() public item;

  public images;

  constructor() { }

  ngOnInit(): void {
    var dataImage = this.item['images'];
    if(Object.keys(dataImage).length == 0){
      this.images = null;
    }else{
      this.images = "../../assets/"+dataImage;
    }
  }

}
