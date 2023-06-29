import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  
  constructor() {

  }

  private isLoggedValueValid(value: string | null): boolean {
    return value !== null && value !== 'invalido';
  }

  ngOnInit(): void {
  }






}
