import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SvAppsComponent } from './sv-apps/sv-apps.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  {path:'sv', component:SvAppsComponent},
  { path: '**', redirectTo: 'sv', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
