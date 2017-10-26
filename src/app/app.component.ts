import { Component } from '@angular/core';
import { Sound } from 'app/sound.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'app';
    board: boolean[];
    balls: number[];
    called: number[];

    constructor(public sound: Sound) {
        this.newGame();
        sound.loadAudioFiles();
    }

    range(count) {
        return Array.from(Array(count).keys())
    }

    newGame() {
        // Track status of numbers for easy look up
        this.board = Array.from(Array(75).keys()).map(i => false);

        // Initialize a list of balls
        this.balls = Array.from(Array(75).keys()).map(i => i + 1);

        // Shuffle list
        this.shuffle(this.balls);
        this.called = [];


    }
    next() {
        if (this.balls.length > 0) {
            let called = this.balls.pop();
            this.board[called - 1] = true;
            this.sound.play(called);
            this.called.unshift(called);
        }

    }
    shuffle(array) {
        let m = array.length, t, i;
        // Shuffle every item but the first
        while (m > 1) {

            // Pick a remaining element
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        console.log(array);
        return array;
    }
}
