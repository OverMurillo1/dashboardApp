import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    new Todo('Esta es una tarea'),
    new Todo('Otra Tarea por hacer')
  ]

  constructor() {
  }

  getTodos(){
    return this.todos;
  }

  getTodo(id:string){
    return this.todos.find( t => t.id === id );
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }

  updateTodo( id: string, updateTodoFields: Partial<Todo>){
    const todo = this.getTodo(id);
    Object.assign(todo, updateTodoFields);
  }

  deleteTodo(id : string){
    const index = this.todos.findIndex( t => t.id === id)
    if (index == -1) return
    this.todos.splice(index,1);
  }
}
