import { mock, reset, instance, when } from 'ts-mockito';
import { QueryService } from '../../src';
import { ProxyQueryService } from '../../src/services/proxy-query.service';

describe('NoOpQueryService', () => {
  class TestType {
    foo!: string;
  }

  const mockQueryService: QueryService<TestType> = mock<QueryService<TestType>>();

  afterEach(() => reset(mockQueryService));

  const queryService: QueryService<TestType> = new ProxyQueryService(instance(mockQueryService));
  it('should proxy to the underlying service when calling addRelations', () => {
    const relationName = 'test';
    const id = 1;
    const relationIds = [1, 2, 3];
    const result = { foo: 'bar' };
    when(mockQueryService.addRelations(relationName, id, relationIds)).thenResolve(result);
    return expect(queryService.addRelations(relationName, id, relationIds)).resolves.toBe(result);
  });
  it('should proxy to the underlying service when calling createMany', () => {
    const entities = [{ foo: 'bar' }];
    when(mockQueryService.createMany(entities)).thenResolve(entities);
    return expect(queryService.createMany(entities)).resolves.toBe(entities);
  });
  it('should proxy to the underlying service when calling createOne', () => {
    const entity = { foo: 'bar' };
    when(mockQueryService.createOne(entity)).thenResolve(entity);
    return expect(queryService.createOne(entity)).resolves.toBe(entity);
  });
  it('should proxy to the underlying service when calling deleteMany', () => {
    const filter = {};
    const result = { deletedCount: 2 };
    when(mockQueryService.deleteMany(filter)).thenResolve(result);
    return expect(queryService.deleteMany(filter)).resolves.toBe(result);
  });
  it('should proxy to the underlying service when calling deleteOne', () => {
    const result = { foo: 'bar' };
    when(mockQueryService.deleteOne(1)).thenResolve(result);
    return expect(queryService.deleteOne(1)).resolves.toBe(result);
  });
  it('should proxy to the underlying service when calling findById', () => {
    const result = { foo: 'bar' };
    when(mockQueryService.findById(1)).thenResolve(result);
    return expect(queryService.findById(1)).resolves.toBe(result);
  });
  it('should proxy to the underlying service when calling findRelation with one dto', () => {
    const relationName = 'test';
    const dto = new TestType();
    const result = { foo: 'bar' };
    when(mockQueryService.findRelation(TestType, relationName, dto)).thenResolve(result);
    return expect(queryService.findRelation(TestType, relationName, dto)).resolves.toBe(result);
  });

  it('should proxy to the underlying service when calling findRelation with multiple dtos', () => {
    const relationName = 'test';
    const dtos = [new TestType()];
    const result = new Map([[{ foo: 'bar' }, undefined]]);
    when(mockQueryService.findRelation(TestType, relationName, dtos)).thenResolve(result);
    return expect(queryService.findRelation(TestType, relationName, dtos)).resolves.toBe(result);
  });

  it('should proxy to the underlying service when calling getById', () => {
    const result = { foo: 'bar' };
    when(mockQueryService.getById(1)).thenResolve(result);
    return expect(queryService.getById(1)).resolves.toBe(result);
  });
  it('should proxy to the underlying service when calling query', () => {
    const query = {};
    const result = [{ foo: 'bar' }];
    when(mockQueryService.query(query)).thenResolve(result);
    return expect(queryService.query(query)).resolves.toBe(result);
  });
  it('should proxy to the underlying service when calling queryRelations with one dto', () => {
    const relationName = 'test';
    const dto = new TestType();
    const query = {};
    const result = [{ foo: 'bar' }];
    when(mockQueryService.queryRelations(TestType, relationName, dto, query)).thenResolve(result);
    return expect(queryService.queryRelations(TestType, relationName, dto, query)).resolves.toBe(result);
  });

  it('should proxy to the underlying service when calling queryRelations with many dtos', () => {
    const relationName = 'test';
    const dtos = [new TestType()];
    const query = {};
    const result = new Map([[{ foo: 'bar' }, []]]);
    when(mockQueryService.queryRelations(TestType, relationName, dtos, query)).thenResolve(result);
    return expect(queryService.queryRelations(TestType, relationName, dtos, query)).resolves.toBe(result);
  });

  it('should proxy to the underlying service when calling removeRelation', () => {
    const relationName = 'test';
    const id = 1;
    const relationId = 2;
    const result = { foo: 'bar' };
    when(mockQueryService.removeRelation(relationName, id, relationId)).thenResolve(result);
    return expect(queryService.removeRelation(relationName, id, relationId)).resolves.toBe(result);
  });
  it('should proxy to the underlying service when calling removeRelations', () => {
    const relationName = 'test';
    const id = 1;
    const relationIds = [2];
    const result = { foo: 'bar' };
    when(mockQueryService.removeRelations(relationName, id, relationIds)).thenResolve(result);
    return expect(queryService.removeRelations(relationName, id, relationIds)).resolves.toBe(result);
  });
  it('should proxy to the underlying service when calling setRelation', () => {
    const relationName = 'test';
    const id = 1;
    const relationId = 2;
    const result = { foo: 'bar' };
    when(mockQueryService.setRelation(relationName, id, relationId)).thenResolve(result);
    return expect(queryService.setRelation(relationName, id, relationId)).resolves.toBe(result);
  });
  it('should proxy to the underlying service when calling updateMany', () => {
    const update = { foo: 'bar' };
    const filter = {};
    const result = { updatedCount: 1 };
    when(mockQueryService.updateMany(update, filter)).thenResolve(result);
    return expect(queryService.updateMany(update, filter)).resolves.toBe(result);
  });
  it('should proxy to the underlying service when calling updateOne', () => {
    const id = 1;
    const update = { foo: 'bar' };
    const result = { foo: 'bar' };
    when(mockQueryService.updateOne(id, update)).thenResolve(result);
    return expect(queryService.updateOne(id, update)).resolves.toBe(result);
  });
});
