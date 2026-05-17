import { Component } from '@angular/core';
import { BlogCard } from '../../components/blog-card/blog-card';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../services/blog';

@Component({
  selector: 'app-blog-list',
  imports: [BlogCard,CommonModule],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.css',
})
export class BlogList {
    blogs:any[] = [];
    constructor(private blogService:BlogService){
      this.blogs = this.blogService.blogs;
    }

  deleteBlog(id: any) {

    this.blogs = this.blogs.filter(

      blog => blog.id !== id

  );

}
}
