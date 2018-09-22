import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  playing = false;
  messages = {
    firstMessage: '1-minute breathing exercise',
    secondMessage: 'Bring awareness to your breath',
    breatheIn: 'breathe in',
    breatheOut: 'breathe out',
  };
  icons = {
    play: {
      className: 'play-icon',
      path: '/assets/baseline-play_arrow-24px.svg',
    },
    replay: {
      className: 'replay-icon',
      path: '/assets/baseline-replay-24px.svg',
    },
  };
  message: string;
  icon: any;
  ngOnInit() {
    this.message = this.messages.firstMessage;
    this.icon = this.icons.play;
  }
  delay(t, v) {
    return new Promise(function (resolve) {
      setTimeout(resolve.bind(null, v), t);
    });
  }
  play() {
    if (this.playing) {
      return;
    }
    this.playing = true;
    this.icon = null;
    this.delay(5000, this.message = this.messages.secondMessage)
      .then(() => this.delay(5000, this.message = this.messages.breatheIn))
      .then(() => this.delay(5000, this.message = this.messages.breatheOut))
      .then(() => this.delay(5000, this.message = this.messages.breatheIn))
      .then(() => this.delay(5000, this.message = this.messages.breatheOut))
      .then(() => this.delay(5000, this.message = this.messages.breatheIn))
      .then(() => this.delay(5000, this.message = this.messages.breatheOut))
      .then(() => this.delay(5000, this.message = this.messages.breatheIn))
      .then(() => this.delay(5000, this.message = this.messages.breatheOut))
      .then(() => this.delay(5000, this.message = this.messages.breatheIn))
      .then(() => this.delay(5000, this.message = this.messages.breatheOut))
      .then(() => this.delay(5000, this.message = this.messages.breatheIn))
      .then(() => this.delay(5000, this.message = this.messages.breatheOut))
      .then(() => this.delay(0, this.message = this.messages.firstMessage))
      .then(() => this.delay(0, this.icon = this.icons.replay))
      .then(() => this.delay(0, this.playing = false));
  }
}
