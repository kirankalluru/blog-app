import { Component } from '@angular/core';
import { BlogCard } from '../../components/blog-card/blog-card';
import { RouterLink } from '@angular/router';
import { CommonModule} from '@angular/common';
import { BlogService } from '../../services/blog';

@Component({
  selector: 'app-home',
  imports: [BlogCard, RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  featuredBlogs:Array<object> = [];
  constructor(private blogsService:BlogService){
    this.featuredBlogs = this.blogsService.blogs; 
  }
}
