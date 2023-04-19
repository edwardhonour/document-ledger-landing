import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { InviteCodeComponent } from './pages/invite-code/invite-code.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { FA2Resolver, EnrollResolver } from './data.resolver';
import { RegisterFa2Component } from './pages/register-fa2/register-fa2.component';
import { Fa2ChoiceComponent } from './pages/fa2-choice/fa2-choice.component';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'register', component: SignupPageComponent },
  { path: 'invite-code', component: InviteCodeComponent },
  { path: 'login', component: SigninPageComponent },
  { path: 'fa2-choice', component: Fa2ChoiceComponent },
  { path: 'enroll-2fa', component: RegisterFa2Component, resolve: { data: FA2Resolver } },
  { path: 'e/:id', component: ActivateAccountComponent, resolve: { data: EnrollResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
