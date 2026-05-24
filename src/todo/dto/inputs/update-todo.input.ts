import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

@InputType()
export class UpdateTodoInput {
  @Field(() => Int, { description: 'Todo id' })
  @IsInt({ message: 'The id must be a number' })
  @Min(1, { message: 'The id must be greater than 0' })
  id: number;

  @Field(() => String, { description: 'Todo description', nullable: true })
  @IsString({ message: 'The description must be a string' })
  @IsNotEmpty({ message: 'The description is required' })
  @MaxLength(20, { message: 'The description must be less than 20 characters' })
  @IsOptional({ message: 'The description is optional' })
  description?: string;

  @Field(() => Boolean, { description: 'Todo done', nullable: true })
  @IsBoolean({ message: 'The done must be a boolean' })
  @IsOptional({ message: 'The done is optional' })
  done?: boolean;
}
