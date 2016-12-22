import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { NoContentComponent } from './no-content/no-content.component';
import { ContactsComponent } from './contacts/contacts.component';
import { StaticPageComponent } from './static-page/static-page.component';

const routes: Routes = [
 
   {
    path: '',
    component: PostListComponent,
    pathMatch: 'full'
  },

  { 
    path: 'contacts',
    component: ContactsComponent,
  },

  { 
    path: 'page-not-found',
    component: NoContentComponent,
  },

  {
    path: ':page',
    component: StaticPageComponent,
  },
  
  {
  	path: 'posts/:slug',
  	component: PostSingleComponent,
  },

  

  { 
    path: '**',
    component: NoContentComponent,
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Wpng2RoutingModule { }