import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../../services/todos.service';
import { Observable, filter, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  // public todos: Todo[]
  public todos$: Observable<Todo[]>
  constructor(private todoService: TodosService) { }

  public observable = new Observable((observer) => {
    // генерация данных:
    observer.next('Value 1')
    observer.next('Value 2')
    observer.next('Value 3')
    observer.next('Value 4')
    observer.complete()
    // observer.error()
  })

  ngOnInit(): void {
    // this.todoService.getTodos().subscribe((data) => {
    //   this.todos = data
    //   console.log(this.todos)
    // });
    this.todos$ = this.todoService.getTodos()
    // this.observable.subscribe(data => console.log(data))
    this.observable.pipe(
      map(value => value + 'Test'),
      filter(value => value.includes('2') || value.includes('4'))
    )
    .subscribe({
      next: (value) => console.log(value),
      error: (error) => console.log(error),
      complete: () => console.log('Done')
    })
  }
}
