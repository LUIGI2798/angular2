import { Component, OnInit } from '@angular/core';
import { iUser } from '../../interfaces/i-user';
import { userService } from '../../service/user.service';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  allUser: iUser[] = [];
  constructor(private userSvc: userService, private todoSvc: TodoService) {}
  ngOnInit() {
    this.userSvc.gettodoofusers(this.todoSvc.todos);
    this.allUser = this.userSvc.users;
  }
}
