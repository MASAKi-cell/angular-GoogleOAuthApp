import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss'],
})

@Injectable()

export class TopPageComponent {

  response: Observable<any> | undefined;

  constructor(private http: HttpClient) {}

  request(){
    const url = "http://jsonplaceholder.typicode.com/todos/1"; 
    this.response = this.http.get(url);
  }

}