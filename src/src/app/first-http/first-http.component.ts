import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: 'app-first-http',
  templateUrl: './first-http.component.html',
  styleUrls: ['./first-http.component.scss']
})
export class FirstHttpComponent implements OnInit {

  constructor( private http: HttpClient ,public response: Observable<any>) { }

  ngOnInit(): void {
  }

  onClick() {

  }

}
