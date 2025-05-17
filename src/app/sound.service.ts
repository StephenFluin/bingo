import { isPlatformBrowser, isPlatformServer } from "@angular/common";
import { inject, Injectable, PLATFORM_ID } from "@angular/core";

@Injectable({ providedIn: "root" })
export class Sound {
  files = [];
  platformId = inject(PLATFORM_ID);

  loadAudioFiles() {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    for (let i = 1; i <= 75; i++) {
      let file = new Audio(`/assets/sounds/${i}.mp3`);
      this.files.push(file);
    }
  }
  play(ball: number) {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    //console.log(`Playing sound for ball ${ball}`, this.files[ball - 1]);
    if (this.files[ball - 1]) {
      this.files[ball - 1]
        .play()
        .then(() => {})
        .catch((error) => {
          // Couldn't play the music for this ball, but that's okay
        });
    }
  }
}
