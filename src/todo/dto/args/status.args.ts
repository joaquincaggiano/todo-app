import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean, IsOptional } from 'class-validator';

@ArgsType()
export class StatusArgs {
  @Field(() => Boolean, {
    nullable: true,
    description: 'The status of the todos',
  })
  @IsBoolean({ message: 'The status must be a boolean' })
  @IsOptional({ message: 'The status is optional' })
  status?: boolean;
}
