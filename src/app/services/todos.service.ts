import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

export interface Todo{
  userID: number,
  id: number,
  title: string,
  completed: boolean
} 

@Injectable({
  providedIn: 'root'
})

export class TodosService {

  constructor(private http: HttpClient) { }

  // хз что за обсёрвабл <*Какие типы данные должны быть* *тип, например масиив - []*>
  public getTodos(): Observable<Todo[]>{
    // получение данных с API (GET запрос)
    // pipe отслеживает изменения, вроде как
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').pipe(tap(() => console.log('Сетевой запрос выполнен')))
  }

}
