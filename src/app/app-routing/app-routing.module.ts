import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BodyComponent } from '../body/body.component';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from 'src/app/authguard.service';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
  },
{
      path: 'addArticle',
      component: DashboardComponent,
      canActivate: [ AuthGuard ]
},
{
  path: 'sourceData/:name',
  component: BodyComponent,
  canActivate: [ AuthGuard ]
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
