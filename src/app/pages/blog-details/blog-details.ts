import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-details',
  imports: [CommonModule],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css',
})
export class BlogDetails {

  blog:any;
  constructor(
  private route: ActivatedRoute,
  private blogService: BlogService) 
  {
    const id = Number(this.route.snapshot.params['id']);
    this.blog = this.blogService.blogs.find(
      blog => blog.id === id
    );
  }


}
