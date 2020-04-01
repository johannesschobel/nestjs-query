import { ConnectionType, QueryArgsType, UpdateOneInputType } from '@nestjs-query/query-graphql';
import { ArgsType, InputType } from '@nestjs/graphql';
import { TodoItemDTO } from './dto/todo-item.dto';
import { CompleteTodoItemDTO } from './dto/complete-todo-item.dto';

export const TodoItemConnection = ConnectionType(TodoItemDTO);

@ArgsType()
export class TodoItemQuery extends QueryArgsType(TodoItemDTO, { defaultResultSize: 2 }) {}

@InputType()
export class CompleteTodoItemInputType extends UpdateOneInputType(TodoItemDTO, CompleteTodoItemDTO) {}
