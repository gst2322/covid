import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { SettingsModule } from './settings/settings.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { SvAppsComponent } from './sv-apps/sv-apps.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    IonicModule.forRoot(),
    CoreModule,
    ChartsModule,
    SharedModule,
    ShellModule,
    HomeModule,
    SettingsModule,
    AboutModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent, SvAppsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
