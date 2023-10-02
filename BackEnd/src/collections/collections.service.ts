import { Inject, Injectable } from '@nestjs/common';
import { CollectionName, ICollection } from './schema/collections.schema';
import { Model } from 'mongoose';

@Injectable()
export class CollectionsService {

  constructor(
    @Inject(CollectionName)
    private CollectionModel: Model<ICollection>,
  ) {}
  
}
