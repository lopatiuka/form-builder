import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Location } from '@angular/common';


@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate { 
  constructor(private router: Router) {}

  canActivate() {
    const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith('accessToken='))
    ?.split('=')[1];
    
    if (cookieValue) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}