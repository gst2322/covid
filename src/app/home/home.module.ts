import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    IonicModule,
    HomeRoutingModule
  ],
  entryComponents: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule {}
