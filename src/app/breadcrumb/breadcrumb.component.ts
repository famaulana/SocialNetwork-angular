import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  menus = ['Videos', 'People', 'Document', 'events', 'Communities', 'favorites', 'channels']

  constructor() { }

  ngOnInit(): void {
  }

}
