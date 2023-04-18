import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  code!: string | null;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('code');
    console.log(this.route.snapshot.paramMap)
  }

}
