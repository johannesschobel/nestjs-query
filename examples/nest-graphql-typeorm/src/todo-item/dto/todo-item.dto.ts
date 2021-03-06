import { FilterableField, Connection } from '@nestjs-query/query-graphql';
import { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';
import { AuthGuard } from '../../auth.guard';
import { SubTaskDTO } from '../../sub-task/dto/sub-task.dto';
import { TagDTO } from '../../tag/dto/tag.dto';

@ObjectType('TodoItem')
@Connection('subTasks', () => SubTaskDTO, { disableRemove: true, guards: [AuthGuard] })
@Connection('tags', () => TagDTO, { guards: [AuthGuard] })
export class TodoItemDTO {
  @FilterableField(() => ID)
  id!: number;

  @FilterableField()
  title!: string;

  @FilterableField({ nullable: true })
  description?: string;

  @FilterableField()
  completed!: boolean;

  @FilterableField(() => GraphQLISODateTime)
  created!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updated!: Date;

  @Field()
  age!: number;
}
