import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  users: User[] = [];
  loading: boolean = false;
  error: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.select('users').subscribe({
      next: ({users, loading, error}) => {
        this.users = users
        this.loading = loading
        this.error = error
      }
    })

    this.store.dispatch(loadUsers())
    // this.userService.getUsers()
    //     .subscribe( users => {
    //       console.log(users);
    //       this.users = users;
    //     });

  }

}
