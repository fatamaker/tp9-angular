import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'formation';
  constructor (public authService: AuthService,private router :Router) {}

  onLogout(){
    this.authService.logout();

  }

  ngOnInit () {
    let isloggedin: string;
    let loggedUser:string;
    isloggedin= localStorage.getItem('isloggedIn')!;
    loggedUser= localStorage.getItem('loggedUser')!;
    if (isloggedin!="true" || !loggedUser)
    this.router.navigate(['/login']);
    else
    this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
    
}
