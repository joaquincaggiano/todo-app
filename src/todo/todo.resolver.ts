import { Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';

@Resolver()
export class TodoResolver {
  @Query(() => [Todo], { name: 'todos' })
  findAll(): Todo[] {
    return [
      {
        id: 1,
        description: 'Todo 1',
        done: false,
      },
    ];
  }

  findOne() {}

  createTodo() {}

  updateTodo() {}

  removeTodo() {}
}
