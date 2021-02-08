import { Routes } from '@angular/router';
import { AddPostComponent } from 'src/app/add-post/add-post.component';
import { ListPostComponent } from 'src/app/list-post/list-post.component';
import { UpdatePostComponent } from 'src/app/update-post/update-post.component';





const appRoutes: Routes = [
    {
        path: 'addPost',
        component: AddPostComponent

    },
    {
        path: 'listPost',
        component: ListPostComponent
    },
    {
        path: 'updatePost/:titre',
        component: UpdatePostComponent
    },

    // {
    //     path: 'salle/:id',
    //     component: SalleComponent
    // }
];
export default appRoutes;