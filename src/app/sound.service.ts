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
        console.log(`Playing sound for ball ${ball}`, this.files[ball - 1]);
        if (this.files[ball - 1]) {
            this.files[ball - 1].play()
                .then(() => { })
                .catch((error) => {
                    // Couldn't play the music for this ball, but that's okay
                });
        }
    }
}
