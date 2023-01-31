import { MatDialog } from '@angular/material/dialog';
import { LoginUserDialog } from './login-user-dialog/login-user-dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as localforage from 'localforage';

export interface User {

  first_name: string,
  last_name: string,
  birthday: string,
  country: string;


}

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.scss']
})
export class UserSectionComponent implements OnInit {

  logged_in: string = '';
  users: User[] = [

    {
      first_name: 'Simon',
      last_name: 'Mouawad',
      birthday: '16-01-2004',
      country: 'Lebanon'
    },
    {
      first_name: 'Elite',
      last_name: 'Keryakos',
      birthday: '06-02-2001',
      country: 'Lebanon'
    },
    {
      first_name: 'Charbel',
      last_name: 'Gerges',
      birthday: '11-01-2004',
      country: 'Lebanon'
    },
    {
      first_name: 'Daniel',
      last_name: 'Khater',
      birthday: '06-06-2002',
      country: 'Retarded Land'
    }

  ];

  constructor (private dialog: MatDialog, private router: Router) {
    localforage.config({
      name: 'App Storage'
    });

  }
  ngOnInit(): void {

    this.getUser();

  }

  goToRooms() {

    this.router.navigate(['/rooms']);

  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginUserDialog, {

      data: { users: this.users }
    });

    dialogRef.afterClosed().subscribe((result: number) => {

      localforage.setItem('loggedInUser', this.users[result]).then(result => this.getUser());

    });
  }

  getUser() {

    localforage.getItem('loggedInUser').then(

      result => this.logged_in = (result as User).first_name

    );
  }

  login() {

    localforage.setItem('loggedInUser', this.users[1]).then(result => this.getUser());
      
    }

}
