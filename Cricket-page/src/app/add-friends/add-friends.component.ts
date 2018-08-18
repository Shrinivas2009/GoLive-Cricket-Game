import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css',
              './add-friends-drop.component.css',
              './add-friend-t.component.css',
              './add-friends-invite.component.css']
})
export class AddFriendsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addFriend: string[] = ['Friends List','Pending Requests'];
  selectedFriend = this.addFriend[0];
}
