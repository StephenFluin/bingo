import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
