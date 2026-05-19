import { Float, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, { name: 'hello', description: 'Hello World Message' })
  helloWorld(): string {
    return 'Hello World';
  }

  @Query(() => Float, { name: 'randoNumber', description: 'Random Number' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }
}
