import { Schema, Document, ObjectId } from 'mongoose';
import { Connection, model } from 'mongoose';
import { MONGODB_CONFIG } from 'src/database/database.config';

export enum ROLE_PERMISSION {
  'USER' = 'user',
  'ADMIN' = 'admin',
  'CARD' = 'card',
}

export interface IUsers extends Document {
  _id: ObjectId;
  uid: String | null;
  email: String | null;
  password: String | null;
  nick_name: String | null;
  age: String | null;
  gender: String | null;
  avatar: String | null;
  streak: String | null;
  rank: String | null;
  score: Number | null;
  level: String | null;
  role: String | null;
  access_token: String | null;
  created_at: Date | null;
  updated_at: Date | null;
}

const UsersSchema: Schema = new Schema(
  {
    uid: { type: String },
    nick_name: { type: String, required: true },
    age: { type: String },
    avatar: {
      type: String,
      default:
        'https://drive.google.com/uc?id=1Dp7JlD7y6v96Ve3O9hxPkUR0mmMhPBmW&export=download',
    },
    password: { type: String },
    streak: { type: String, default: '0' },
    birthday: { type: String },
    access_token: { type: String },
    gender: { type: String },
    address: { type: String },
    rank: { type: String },
    email: { type: String, unique: true },
    score: { type: Number, default: 0 },
    level: { type: String },
    role: {
      type: String, // Change to array of strings
      default: ROLE_PERMISSION.USER,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

// read documents :: https://docs.nestjs.com/recipes/mongodb;

//có 2 cách sài model nhé
export const UsersModel = model<IUsers>('Users', UsersSchema);

export const UserProvide: string = 'User';
export const usersProvider = [
  {
    provide: UserProvide,
    useFactory: (connection: Connection) =>
      connection.model(UserProvide, UsersSchema),
    inject: [MONGODB_CONFIG.DATABASE_CONNECTION],
  },
];
