import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [CommonModule, TranslateModule, ChartsModule, IonicModule, AboutRoutingModule],
  entryComponents: [AboutComponent],
  declarations: [AboutComponent]
})
export class AboutModule {}
