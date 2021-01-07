import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {loadTranslations} from '@angular/localize';

@Injectable()
export class LocalizeGuard implements CanActivate {

  constructor(private http: HttpClient) {
  }

  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.get('/assets/i18n/de.json')
        .subscribe(response => {
          loadTranslations(response as any);
          resolve(true);
        });
    });
  }
}
