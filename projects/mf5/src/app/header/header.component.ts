import { Component, OnInit } from '@angular/core';
import img from '../../assets/images/bst-logo.png';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public mainLogo = img
  constructor() { }

  ngOnInit(): void {
  }

}
