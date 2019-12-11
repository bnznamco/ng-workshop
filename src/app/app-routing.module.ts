import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'policy'
},
{
    path: 'policy',
    component: ArticleListComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
