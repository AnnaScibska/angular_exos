import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-go-to-page',
  templateUrl: './go-to-page.component.html',
  styleUrls: ['./go-to-page.component.css']
})
export class GoToPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) { } // injecting service

  ngOnInit() {
    this.loginForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });
  }

  submit() {
    const username = this.loginForm.get('username').value;
    this.authService.login(username);
    this.router.navigate(['/dashboard']);
  }
}
