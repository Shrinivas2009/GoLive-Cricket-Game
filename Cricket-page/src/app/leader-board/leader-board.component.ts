import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css',
              './leader-board-style-drop.component.css', 
              './leader-board-style-inti.component.css']
})
export class LeaderBoardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
