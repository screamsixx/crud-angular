import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
exist:any;

  constructor() {
    this.exist=(localStorage.getItem('id'));
  }

  private isLoggedValueValid(value: string | null): boolean {
    return value !== null && value !== 'invalido';
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    window.location.reload(); // Recarga la página
  }






}
