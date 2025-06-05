import { Component } from '@angular/core';
import {NavComponent} from "./components/nav/nav.component";
import {HomeComponent} from "./components/home/home.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles.css'],
  imports: [NavComponent, HomeComponent]
})
export class AppComponent {

}
