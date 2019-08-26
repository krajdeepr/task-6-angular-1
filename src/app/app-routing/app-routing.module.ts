import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BodyComponent } from '../body/body.component';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { LoginComponent } from '../login/login.component';


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
{
  path: 'login',
  component: LoginComponent,
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