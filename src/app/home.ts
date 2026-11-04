import { Component, inject, signal } from "@angular/core";
import { Sound } from "./sound.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.ng.html",
})
export class HomeComponent {
  sound = inject(Sound);

  title = "app";
  board = signal<boolean[]>([]);
  balls: number[];
  called = signal<number[]>([]);

  constructor() {
    this.newGame();
    this.sound.loadAudioFiles();
  }

  range(count) {
    return Array.from(Array(count).keys());
  }

  newGame() {
    // Confirmation alert when starting new game in the middle of existing game
    if (this.called().length > 0) {
      const clearBoard = confirm(
        "Are you sure you want to erase your numbers and start over?"
      );
      if (clearBoard === false) {
        return;
      }
    }

    // Track status of numbers for easy look up
    this.board.set(Array.from(Array(75).keys()).map((i) => false));

    // Initialize a list of balls
    this.balls = Array.from(Array(75).keys()).map((i) => i + 1);

    // Shuffle list
    this.shuffle(this.balls);
    this.called.set([]);
  }
  next() {
    if (this.balls.length > 0) {
      let called = this.balls.pop();
      this.board.update((board) => board.map((v, i) => v || i === called - 1));
      this.sound.play(called);
      this.called.update((list) => [called, ...list]);
    }
  }
  shuffle(array) {
    let m = array.length,
      t,
      i;
    // Shuffle every item but the first
    while (m > 1) {
      // Pick a remaining element
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
}
