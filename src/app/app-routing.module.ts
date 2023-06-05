import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent, RegisterComponent } from './account';
import { AuthGuard } from './_helpers';
import { StarshipsComponent } from './starships/starships.component';
import { InfoComponent } from './starships/info/info.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'account/login', component: LoginComponent },
    { path: 'account/register', component: RegisterComponent },
    { path: 'starships', component: StarshipsComponent, canActivate: [AuthGuard] },
    { path: 'starships/:id', component: InfoComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }