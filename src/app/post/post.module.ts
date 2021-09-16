import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleComponent } from './single/single.component';

import { PostComponent } from './post.component';

// const routes: Routes = [
//   {
//     path: 'post',
//     component: PostComponent,
//     children: [
//       {
//         path: 'single',
//         loadChildren: () => import('./single/single.component').then(m => m.SingleComponent)
//       },
//       {
//         path: 'right-sidebar',
//         loadChildren: () => import('./right-sidebar/right-sidebar.component').then(m => m.RightSidebarComponent)
//       },
//       {
//         path: '',
//         redirectTo: 'home',
//         pathMatch: 'full'
//       }
//     ]
//   },
  
// ];

const routes: Routes = [
  {   path: 'single',      component: SingleComponent   },
  {   path: 'right-sidebar',   component: RightSidebarComponent   },
];

@NgModule({
  declarations: [
     SingleComponent,
    RightSidebarComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PostModule { }
