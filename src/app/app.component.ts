import { Component, inject } from "@angular/core";
import { Sound } from "./sound.service";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  imports: [RouterOutlet],
})
export class AppComponent {}
