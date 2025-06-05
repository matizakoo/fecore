import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideLottieOptions} from "ngx-lottie";
import {LottiePlayer} from "lottie-web";
import lottie from 'lottie-web';

export function playerFactory(): LottiePlayer {
  return lottie;
}

bootstrapApplication(AppComponent, {
  providers: [
    provideLottieOptions({
      player: playerFactory
    })
  ]
}).catch(err => console.error(err));
