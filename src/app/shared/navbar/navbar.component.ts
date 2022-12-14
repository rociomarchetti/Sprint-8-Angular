import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from './../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/auth/pages/login/login.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;

  constructor(
    public router: Router,
    private AuthService: AuthService,
    public mymodal: NgbModal
  ) {}

  get loggedUser() {
    return this.AuthService.loggedUser;
  }

  get loginControl() {
    return this.AuthService.loginControl;
  }
  
  logout() {
    this.AuthService.logout();
  }

  ngOnInit(): void {}
}
