import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  @Input() email;
  @Input() password;

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.sessionService.getAuthenticationToken(this.email, this.password).subscribe(d => {
      if (d.status === 'success') {
        localStorage.setItem('token', d.data.authentication_token);
        this.router.navigate(['articles']);
      }
    });
  }

}
