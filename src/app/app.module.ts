import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

import { GStyles, GsFormsModule } from 'projects/gs-forms/src/public-api';
// import { GsFormsModule, GStyles } from '@rappipay/gs-forms';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const formStyles: GStyles = {
  color: {
    font: '#1f2532',
    primary: '#f33959',
    secondary: '#ffffff',
    neutral: '#757574',
    white: null
  },
  ui: {
    fontSize: '15px',
    input: {
      padding: '.8rem 1rem',
      color: null,
      background: '#ffffff',
      borderSize: '2px',
      borderStyle: 'solid',
      borderColor: '#bcbcba',
      borderRadius: null,
      borderTop: '0',
      borderRight: '0',
      borderBottom: null,
      borderLeft: '0',
    },
    primaryButton: {
      padding: '.6rem',
      color: '#ffffff',
      background: '#f33959',
      borderColor: '#f33959',
      borderRadius: '24px'
    },
    secondaryButton: {
      padding: '.6rem',
      color: '#1f2532',
      background: '#ffffff',
      borderColor: '#ffffff',
      borderRadius: '24px'
    },
  }
};

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
    GsFormsModule.forRoot(formStyles, googleMapApiKey),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
