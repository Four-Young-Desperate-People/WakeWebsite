import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  foo(): void {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  }

}
