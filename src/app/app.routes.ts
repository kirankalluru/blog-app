import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { BlogList } from './pages/blog-list/blog-list';
import { CreateBlog } from './pages/create-blog/create-blog';
import { BlogDetails } from './pages/blog-details/blog-details';

export const routes: Routes = [
    {
        path:"",
        component:Home
    },
    {
        path:"blogs",
        component:BlogList
    },
    {
        path:"create",
        component:CreateBlog
    },
    {
        path:"blog/:id",
        component:BlogDetails
    }
];
