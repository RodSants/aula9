import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { Pagina2Component } from './pagina2/pagina2.component';

const routes: Routes = [
//{ path: '', redirectTo: '/pagina1', pathMatch: 'full' },

//{ path: 'pagina2', component: Pagina2Component }

];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule {}