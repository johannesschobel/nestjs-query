import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean } from 'class-validator';

@InputType('CompleteTodoItem')
export class CompleteTodoItemDTO {
  @IsBoolean()
  @Field({ nullable: false })
  completed!: boolean;
}
