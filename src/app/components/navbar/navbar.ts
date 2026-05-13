import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [FormsModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
   appName = 'Angular Blog App';
   searchQuery = '';

   onSearch(){
    alert("Search Term is " + this.searchQuery);
   }
   onEnter(event:KeyboardEvent){
    if (event.key === "Enter") {
      alert("Enter button clicked "+this.searchQuery);
    }
   }

}
