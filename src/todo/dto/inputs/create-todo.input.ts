import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateTodoInput {
  @Field(() => String, { description: 'Todo description' })
  @IsString({ message: 'The description must be a string' })
  @IsNotEmpty({ message: 'The description is required' })
  @MaxLength(20, { message: 'The description must be less than 20 characters' })
  description: string;
}
