import Entity from './Entity';
import * as schema from '../schema';
import { AbstractInstanceType } from '../types';

export default abstract class FlatEntity extends Entity {
  static denormalize<T extends typeof Entity>(
    this: T,
    entity: any,
    unvisit: schema.UnvisitFunction,
  ): [AbstractInstanceType<T>, boolean] {
    return [entity, true] as any;
  }
}