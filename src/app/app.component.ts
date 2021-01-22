import { Component } from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-network';
  //data main content
  public videosComponent = {'titleComponent' : 'videos', 'overviewButtons' : 'Browse all videos'};
  public videosData = {};
  public peopleComponent = {'titleComponent' : 'people', 'overviewButtons' : 'View all'};
  public peopleData = {};
  public documentComponent = {'titleComponent' : 'document', 'overviewButtons' : 'Browse all document'};
  public documentData = {};
  //data activity
  public activityData = {};
  //data channels
  public channelsData = {};

  constructor(private homeServices : HomeService) { }

  ngOnInit(): void {
    //binding main content
    var dataVideos = this.homeServices.getVideos();
    this.videosData = [this.videosComponent, dataVideos.slice(0, 5)];
    var dataPeople = this.homeServices.getPeople();
    this.peopleData = [this.peopleComponent, dataPeople.slice(0, 5)];
    var dataDocument = this.homeServices.getDocument();
    this.documentData = [this.documentComponent, dataDocument.slice(0, 5)];
    //binding activity
    this.activityData = this.homeServices.getActivity().slice(0 ,5);
    //binding channels
    this.channelsData = this.homeServices.getChannels();
  }
}
