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
  full_name: String | null;
  age: String | null;
  Created_at: Date | null;
  avt: String | null;
  updated_at: Date | null;
  password: String | null;
  strek: String | null;
  access_token: String | null;
  nick_name: String | null;
  gender: String | null;
  address: String | null;
  rank: String | null;
  email: String | null;
  score: Number | null;
  level: String | null;
  role: String[] | null;
}

const UsersSchema: Schema = new Schema(
  {
    full_name: { type: String },
    age: { type: String },
    avt: { type: String },
    password: { type: String },
    strek: { type: String },
    nick_name: { type: String },
    access_token: { type: String },
    gender: { type: String },
    address: { type: String },
    rank: { type: String },
    email: { type: String, unique: true },
    score: { type: Number },
    level: { type: String },
    role: [
      {
        type: String,
        default: [ROLE_PERMISSION.USER],
        enum: ['user', ' admin', ' card'],
      },
    ],
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
