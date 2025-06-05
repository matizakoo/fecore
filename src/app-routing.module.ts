import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app/app.component";

// , canActivate: [AuthGuard]
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: AppComponent,
        children: [
          {path: '', loadChildren: () => import('./app.module').then(m => m.AppModule)},
        ]
      }
    ], {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
