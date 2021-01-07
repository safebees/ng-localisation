import {Component} from '@angular/core';
import {getCookie, setCookie} from './common/cookie.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title2 = $localize`:@@HelloWorld:Hello World!!`;

  // title = $localize`:@@HelloWorld:`;
  xs = '';

  toDe(): void {
    let cookie = getCookie('lang');

    cookie = 'fr.json' === cookie ? 'de.json' : 'fr.json';

    setCookie('lang', cookie, 5);
    location.reload();
  }
}
