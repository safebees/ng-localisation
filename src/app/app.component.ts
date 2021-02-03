import {Component} from '@angular/core';
import {getCookie, setCookie} from './common/cookie.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = $localize`:@@HelloWorld:Hello World!!`;
  // localisation with default
  titleWithoutDefault = $localize`:@@HelloWorld:`;

  toDe(): void {
    let cookie = getCookie('lang');

    cookie = 'fr' === cookie ? 'de' : 'fr';

    setCookie('lang', cookie, 5);
    location.reload();
  }
}
