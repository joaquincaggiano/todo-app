import { Injectable } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      description: 'Todo 1',
      done: false,
    },
    {
      id: 2,
      description: 'Todo 2',
      done: false,
    },
    {
      id: 3,
      description: 'Todo 3',
      done: false,
    },
  ];

  findAll(): Todo[] {
    return this.todos;
  }
}
