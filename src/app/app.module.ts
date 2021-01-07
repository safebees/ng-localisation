import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppComponent} from './app.component';

import {loadTranslations} from '@angular/localize';
import {HttpClientModule} from '@angular/common/http';
import {TranslationInitializerService} from './common/translation-initializer.service';

loadTranslations({
  HelloWorld: 'Hallo Wältli!!'
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [

    {
      provide: APP_INITIALIZER,
      useFactory: (configService: TranslationInitializerService) =>
        () => configService.loadTranslations(),
      deps: [TranslationInitializerService],
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
