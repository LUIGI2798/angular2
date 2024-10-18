import { Component, OnInit } from '@angular/core';
import { iUser } from '../../interfaces/i-user';
import { userService } from '../../service/user.service';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  todohome: iUser[] = [];
  constructor(private userSvc: userService, private todoSvc: TodoService) {}
  ngOnInit() {
    this.userSvc.gettodoofusers(this.todoSvc.todos);
    this.todohome = this.userSvc.users.map((todo) => ({
      ...todo,
      users: todo,
    }));
  }
}
