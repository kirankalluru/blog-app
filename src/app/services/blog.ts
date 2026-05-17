import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  blogs = [

    {
      id: 1,
      title: 'Angular Basics',
      description: 'Learning Angular step by step'
    },

    {
      id: 2,
      title: 'Angular Routing',
      description: 'Understanding Angular Router'
    },

    {
      id: 3,
      title: 'Angular Components',
      description: 'Components are building blocks'
    }

  ];

}