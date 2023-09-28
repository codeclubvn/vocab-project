import { Schema, Document, ObjectId } from 'mongoose';
import { Connection, model } from 'mongoose';
import { MONGODB_CONFIG } from 'src/database/database.config';

export interface ICollection extends Document {
  _id: ObjectId;
  created_at: Date | null;
  updated_at: Date | null;
  name: String | null;
  deleted_at: Date | null;
  star: Number | null;
  total: Number | null;
  user_id: ObjectId | null;
  is_public: Boolean | null;
  receivers: ObjectId[] | null;
}

const CollectionSchema: Schema = new Schema(
  {
    name: { type: String },
    star: { type: Number, default: 5 },
    total: { type: Number, default: 0 },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    is_public: { type: Boolean, default: false },
    receivers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deleted_at: 'deleted_at',
    },
  },
);

export const CollectionName: string = 'Collection';
export const CollectionsProvider = [
  {
    provide: CollectionName,
    useFactory: (connection: Connection) =>
      connection.model(CollectionName, CollectionSchema),
    inject: [MONGODB_CONFIG.DATABASE_CONNECTION],
  },
];

const CollectionModel = model<ICollection>(CollectionName, CollectionSchema);
export default CollectionModel;
