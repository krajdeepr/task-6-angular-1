import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BodyComponent } from '../body/body.component';
import { PopUpComponent } from '../pop-up/pop-up.component';


const routes: Routes = [
  {
      path: '',
      redirectTo: 'sourceData/ALL',
      pathMatch: 'full'
  },
{
      path: 'addArticle',
      component: DashboardComponent,
},
{
  path: 'sourceData/:name',
  component: BodyComponent,
},
{
  path: 'button/:id',
  component: PopUpComponent,
},
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
