import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

import { GsFormsModule } from 'projects/gs-forms/src/public-api';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const googleMapApiKey  = 'AIzaSyCwAXnKQC-MQvISYKDmk1sX5Sr6WwEl89k'; // Jhon ApiKey
// const googleMapApiKey  = 'AIzaSyCiRKFR26H1puMRdI5jgKD7w9Igh75Yy1k'; // Eva

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    GsFormsModule.forRoot({
      color: {
        font: '#fcf9f8',
        primary: '#faba53',
        secondary: '#aa7f46',
        neutral: '#757574',
        white: null
      },
      ui: {
        fontSize: '1rem',
        input: {
          padding: '.6rem .8rem',
          color: '#fcf9f8',
          background: '#333333',
          borderSize: '0',
          borderRadius: '0'
        },
        primaryButton: {
          padding: '.6rem .8rem',
          color: '#181818',
          background: '#faba53',
          borderColor: '#faba53',
          borderRadius: '0'
        },
        secondaryButton: {
          padding: '.6rem .8rem',
          color: '#181818',
          background: '#b0a89b',
          borderColor: '#b0a89b',
          borderRadius: '0'
        },
      }
    }, googleMapApiKey),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
