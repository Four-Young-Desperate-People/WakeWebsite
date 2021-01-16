import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.css']
})
export class LogbookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    foo(): void {
        console.log('IT WORKED HOLY SHIT');
    }

    navigateTo(number: number): void {

    }
}
