import { Injectable } from '@angular/core';

@Injectable()
export class Sound {
    files = [];
    loadAudioFiles() {
        for (let i = 1; i <= 75; i++) {
            let file = new Audio(`/assets/sounds/${i}.mp3`);
            this.files.push(file);
        }
    }
    play(ball: number) {
        if (this.files[ball]) {
                this.files[ball].play()
                .then(() => {})
                .catch((error) => {
                    // Couldn't play the music for this ball, but that's okay
                });
            }
    }
}
