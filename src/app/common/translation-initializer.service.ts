import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {loadTranslations} from '@angular/localize';
import {getCookie} from './cookie.utils';

@Injectable({providedIn: 'root'})
export class TranslationInitializerService {

  // @Inject('BASE_URL') private originUrl: string
  constructor(
    private http: HttpClient) {
  }

  loadTranslations(): Promise<object> {

    const cookie = getCookie('lang') || 'de.json';

    return this.http.get(`/assets/i18n/${cookie}`)
      .pipe(
        tap((event) => this.handleResponse(event),
          (error) => this.handleError(error))
      ).toPromise();
  }

  private handleResponse(event: object): void {
    loadTranslations(event as any);
  }

  private handleError(error: any): void {

  }
}
