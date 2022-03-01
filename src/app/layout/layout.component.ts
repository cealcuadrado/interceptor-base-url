import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  data = '';

  constructor(
    private register: RegisterService
  ) { }

  ngOnInit(): void {
  }

  getData(): void {
    this.register.getPhotos().subscribe(photos => {
      this.data = JSON.stringify(photos); 
    });
  }

}
