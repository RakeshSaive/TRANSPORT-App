import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
    },
    {
      path:'login',
      component:LoginComponent,pathMatch:'full'
    },
    {
      path:'dashboard/:username',
      component:DashboardComponent,canActivate:[AuthServiceService]
    },
    {
      path:'dashboard',
      component:DashboardComponent,canActivate:[AuthServiceService]
    },
    {
      path:'register',
      component:RegisterComponent
    },
    {
      path:'prof',
      component:ProfileComponent,canActivate:[AuthServiceService]
    },
    {
      path:'prof/:username',
      component:ProfileComponent,canActivate:[AuthServiceService]
    },
    {
      path:'edit/:userId',
      component:ProfileComponent,canActivate:[AuthServiceService]
    },
    {
      path:'change/:username',
      component:ChangePwdComponent,canActivate:[AuthServiceService]
    },
    {
      path:'check/:username',
      component:ChangePwdComponent,canActivate:[AuthServiceService]
    },
    {
      path:'areas/:username',
      component:DashboardComponent,canActivate:[AuthServiceService]
    },
    {
      path:'add',
      component:DashboardComponent,canActivate:[AuthServiceService]
    },
    {
      path:'wishlist/:username',
      component:WishlistComponent,canActivate:[AuthServiceService]
    }
    ,
    {
      path:'delete/:username/:placeId',
      component:WishlistComponent
    },
    {
      path:'stations/:val',
      component:DashboardComponent
    },
    {
      path:'buses/:val',
      component:DashboardComponent
    }
    
    








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
