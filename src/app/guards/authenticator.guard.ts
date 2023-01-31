import { User } from './../components/user-section/user-section.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import * as localforage from 'localforage';


@Injectable({
  providedIn: 'root'
})
export class DanyGuard implements CanActivate {

  // Guards the browsing section to Logged in users
  constructor (private snackBar: MatSnackBar, private route: Router) {

    localforage.config({
      name: 'App Storage'
    });

  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return await this.checkAuth();
  }

  private async checkAuth() {

    let state = false;
    await localforage.getItem('loggedInUser').then(result => {

      if (result) {
        state = (result as User).first_name != 'Daniel';
      }
    });
    return state || this.routeToLogin();

  }

  private routeToLogin(): boolean {

    this.route.navigate(['/users']);
    this.snackBar.open("Dany is not allowed here", "Done");
    return false;

  }
}
