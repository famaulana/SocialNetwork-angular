import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getVideos(){
    var data = [
      {'id' : '1', 'title' : 'How to improve your skills', 'subtitle' : 'wasem arshad', 'views' : '1087628'},
      {'id' : '2', 'title' : 'Learn UI/UX basic', 'subtitle' : 'michael koligh', 'views' : '157628'},
      {'id' : '3', 'title' : 'Learn Agular', 'subtitle' : 'Ahmed yasin', 'views' : '1984'},
      {'id' : '4', 'title' : 'Learn motion in css', 'subtitle' : 'jhon stainior', 'views' : '19284'},
      {'id' : '5', 'title' : 'vue is very easy for beginner', 'subtitle' : 'jhon doe', 'views' : '234632'},
      {'id' : '6', 'title' : 'How to improve your skills', 'subtitle' : 'wasem arshad', 'views' : '1087628'},
      {'id' : '7', 'title' : 'Learn UI/UX basic', 'subtitle' : 'michael koligh', 'views' : '157628'},
      {'id' : '8', 'title' : 'Learn Agular', 'subtitle' : 'Ahmed yasin', 'views' : '1984'},
    ]

    return data;
  }
  
  getPeople(){
    var data = [
      {'id' : '1', 'title' :  'wasem arshad', 'subtitle' : 'User Interface designer', 'views' : '1087628'},
      {'id' : '2', 'title' :  'michael koligh', 'subtitle' : 'UI/UX designer', 'views' : '157628'},
      {'id' : '3', 'title' :  'Ahmed yasin', 'subtitle' : 'front-end programmer', 'views' : '1984'},
      {'id' : '4', 'title' :  'jhon stainior', 'subtitle' : 'front-end programmer', 'views' : '19284'},
      {'id' : '5', 'title' :  'jhon doe', 'subtitle' : 'front-end programmer', 'views' : '234632'},
      {'id' : '6', 'title' :  'wasem arshad', 'subtitle' : 'User Interface designer', 'views' : '1087628'},
      {'id' : '7', 'title' :  'michael koligh', 'subtitle' : 'UI/UX designer', 'views' : '157628'},
      {'id' : '8', 'title' :  'Ahmed yasin', 'subtitle' : 'front-end programmer', 'views' : '1984'},
    ]

    return data;
  }

  getDocument(){
    var data = [
      {'id' : '1', 'title' : 'Mobile ui & ux guide 2013', 'subtitle' : 'wasem arshad', 'views' : '1087628'},
      {'id' : '2', 'title' : 'HTML 5 and Usage', 'subtitle' : 'michael koligh', 'views' : '157628'},
      {'id' : '3', 'title' : 'How to become an expert?', 'subtitle' : 'Ahmed yasin', 'views' : '1984'},
      {'id' : '4', 'title' : '2013 marketing trends', 'subtitle' : 'jhon stainior', 'views' : '19284'},
      {'id' : '5', 'title' : 'vue guide for beginer', 'subtitle' : 'jhon doe', 'views' : '234632'},
      {'id' : '6', 'title' : 'Mobile ui & ux guide 2013', 'subtitle' : 'wasem arshad', 'views' : '1087628'},
      {'id' : '7', 'title' : 'HTML 5 and Usage', 'subtitle' : 'michael koligh', 'views' : '157628'},
      {'id' : '8', 'title' : 'How to become an expert?', 'subtitle' : 'Ahmed yasin', 'views' : '1984'},
    ]

    return data;
  }
  
  getActivity(){
    var data = [
      {'id' : '1', 'action' : 'comment', 'images' : '', 'messages' : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ', 'creator' : 'wasem arshad', 'update_at' : '2 seconds'},
      {'id' : '2', 'action' : 'uploadVideo', 'images' : '', 'messages' : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ', 'creator' : 'michael koligh', 'update_at' : '5 minutes'},
      {'id' : '3', 'action' : 'shareDocument', 'images' : '', 'messages' : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ', 'creator' : 'Ahmed yasin', 'update_at' : '1 day'},
      {'id' : '4', 'action' : 'achivement', 'images' : '', 'messages' : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ', 'creator' : 'jhon stainior', 'update_at' : '44 minutes'},
      {'id' : '5', 'action' : 'uploadVideo', 'images' : '', 'messages' : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ', 'creator' : 'jhon doe', 'update_at' : '1 hour'},
      {'id' : '6', 'action' : 'likeVideo', 'images' : '', 'messages' : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ', 'creator' : 'wasem arshad', 'update_at' : '19 minutes'},
      {'id' : '7', 'action' : 'uploadVideo', 'images' : '', 'messages' : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ', 'creator' : 'michael koligh', 'update_at' : '2 day'},
      {'id' : '8', 'action' : 'shareDocument', 'images' : '', 'messages' : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ', 'creator' : 'Ahmed yasin', 'update_at' : '1 day'},
    ]

    return data;
  }
  
  getChannels(){
    var data = [
      {'id' : '1', 'channels' : 'Google'},
      {'id' : '2', 'channels' : 'Dribble'},
      {'id' : '3', 'channels' : 'Microsoft'},
      {'id' : '4', 'channels' : 'Behance'},
      {'id' : '5', 'channels' : 'Weather Channel'},
      {'id' : '6', 'channels' : 'Gurus'},
      {'id' : '7', 'channels' : 'iMedia'},
      {'id' : '8', 'channels' : 'Cretiveeye'},
    ]

    return data;
  }
}
