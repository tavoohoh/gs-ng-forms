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
    GsFormsModule.forRoot(null, googleMapApiKey),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
