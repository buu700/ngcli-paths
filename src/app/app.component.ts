import { Component } from '@angular/core';
import * as test63987 from 'test63987';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status = test63987.libsodiumReplacement ? 'success' : 'failure';
  ngOnInit () {
    console.log(test63987);
  }
}
