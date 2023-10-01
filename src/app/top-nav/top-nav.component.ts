import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
constructor(public router: Router){
  console.log(this.router.getCurrentNavigation());
}
}
