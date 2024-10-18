import { userService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { iTodo } from '../../interfaces/i-todo';
import { iUser } from '../../interfaces/i-user';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent implements OnInit {
  ArrayofCompletedTodo: iUser[] = [];
  constructor(private todoSvc: TodoService, private userSvc: userService) {}

  ngOnInit() {
    this.userSvc.gettodoofusers(this.todoSvc.todos);
    this.ArrayofCompletedTodo = this.userSvc.users
      .map((user) => ({
        ...user,
        todos: user.todos?.filter((todo) => todo.completed) || [],
      }))
      .filter((user) => user.todos.length > 0);
    console.log(this.ArrayofCompletedTodo);
  }
}
