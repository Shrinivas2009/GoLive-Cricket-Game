import { Component, OnInit } from '@angular/core';

// import '../../../src/assets/css/style-drop.css';
// import '../../../src/assets/css/style-invite.css';
// import '/assets/plugins/ionRangeSlider/css/ion.rangeSlider.css';
// import '../../../src/assets/css/style-profile.css';
// import 'D:\sreenivash\Cricket-page\src\app\my-deck';
@Component({
  selector: 'my-deck',
  templateUrl: './my-deck.component.html',
  styleUrls: ['./my-deck.component.css',
              './my-deck-drop.component.css',
              './my-deck-invite.component.css',
              './my-deck-profile.component.css'
              // "../../../src/assets/css/style-drop.css",
              // '../../../src/assets/css/style-invite.css',
              // '../../../src/assets/css/style-profile.css'
            ]
})
export class MyDeckComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  coinwallet: string[] = ['Batting','Bowling'];
  selectedwallet = this.coinwallet[0];

  cardSelected: string[] = ['Locked','Unlocked'];
  selectedCard = this.cardSelected[0];
}
