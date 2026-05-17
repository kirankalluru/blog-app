import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../../services/blog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-blog',
  imports: [FormsModule,CommonModule],
  templateUrl: './create-blog.html',
  styleUrl: './create-blog.css',
})
export class CreateBlog {
  title = '';
  description = '';
  status = '';
  
  constructor(private blogService:BlogService){

  }

  createBlog() {

  const newBlog = {

    id: this.blogService.blogs.length + 1,

    title: this.title,

    description: this.description

  };

  this.blogService.blogs.push(newBlog);
  this.status = "Blog added Successfully😊"

  alert(this.status);

  this.title = '';
  this.description = '';

}
}
