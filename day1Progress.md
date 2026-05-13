````md
# 🚀 Angular Blog App

A project-based Angular learning application built while understanding real-world Angular concepts step-by-step.

---

# 📌 Current Project Status

## ✅ Completed Progress: ~40%

The foundational architecture of the Blog App is completed.

Current application features:

- Static Navbar
- Multiple Pages
- Angular Routing
- Navigation Between Pages
- Dynamic Route Setup
- Component-Based Architecture

---

# 🧱 Current Application Structure

```text
src/
│
├── app/
│   │
│   ├── components/
│   │   └── navbar/
│   │
│   ├── pages/
│   │   ├── home/
│   │   ├── blog-list/
│   │   ├── create-blog/
│   │   └── blog-details/
│   │
│   ├── app.ts
│   ├── app.html
│   ├── app.css
│   ├── app.routes.ts
│   └── app.config.ts
````

---

# ✅ Concepts Learned

# 1️⃣ Angular Project Setup

Learned:

* Angular CLI
* Project creation
* Development server
* Folder structure

Commands used:

```bash
ng new blog-app
ng serve
```

---

# 2️⃣ Angular Components

Learned:

* `@Component`
* selector
* templateUrl
* styleUrl
* standalone components

Created:

* Navbar Component
* Page Components

Example:

```ts
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
```

---

# 3️⃣ Data Binding

Learned:

## ✅ Interpolation

```html
{{ title }}
```

---

## ✅ Property Binding

```html
[src]="imageUrl"
```

---

## ✅ Event Binding

```html
(click)="showMessage()"
```

---

## ✅ Two-Way Binding

```html
[(ngModel)]="searchText"
```

---

# 4️⃣ Event Handling

Learned:

* click events
* keyboard events
* Enter key handling
* mouse events
* `$event` object

Examples:

```html
(keyup.enter)="searchBlog()"
```

```html
(mouseenter)="hoverEffect()"
```

---

# 5️⃣ Angular Directives

Learned:

## ✅ *ngFor

Used for looping.

```html
<div *ngFor="let blog of blogs">
```

---

## ✅ *ngIf

Used for conditional rendering.

```html
<div *ngIf="showBlogs">
```

---

# 6️⃣ Angular Routing

Learned:

* Routes
* RouterLink
* RouterOutlet
* Dynamic Routes
* Route Parameters

---

## Configured Routes

```ts
export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'blogs',
    component: BlogList
  },

  {
    path: 'create',
    component: CreateBlog
  },

  {
    path: 'blog/:id',
    component: BlogDetails
  }

];
```

---

# 7️⃣ Navigation

Used:

```html
<a routerLink="/blogs">
```

---

# 8️⃣ Router Outlet

Used:

```html
<router-outlet></router-outlet>
```

This dynamically loads pages based on URL.

---

# 🌐 Current Available Routes

| Route       | Page         |
| ----------- | ------------ |
| `/`         | Home Page    |
| `/blogs`    | Blog List    |
| `/create`   | Create Blog  |
| `/blog/:id` | Blog Details |

---

# 🧠 Important Angular Concepts Understood

* Component-based architecture
* SPA (Single Page Application)
* Dynamic UI rendering
* Angular change detection
* DOM manipulation using directives
* Navigation without page reload

