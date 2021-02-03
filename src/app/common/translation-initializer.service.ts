import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {loadTranslations} from '@angular/localize';
import {getCookie} from './cookie.utils';
import {TRANSLATION_TOKEN, TranslationTokenType} from './translation-token';

@Injectable({providedIn: 'root'})
export class TranslationInitializerService {

  // @Inject('BASE_URL') private originUrl: string
  constructor(
    @Inject(TRANSLATION_TOKEN) public tranlationFiles: TranslationTokenType,
    private http: HttpClient) {
  }

  loadTranslations(): Promise<object | void> {

    const cookie = getCookie('lang') || 'de';

    const files = this.tranlationFiles.find((s) => {
      return s[0] === cookie;
    });

    if (!files) {
      return Promise.resolve();
    }

    return this.http.get(files[1][0])
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
