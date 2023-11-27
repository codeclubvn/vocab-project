import { Schema, Document, ObjectId, Types } from 'mongoose';
import { Connection, model } from 'mongoose';
import { MONGODB_CONFIG } from 'src/database/database.config';

export interface IVocabulary {
  index: number;
  front_text: string;
  back_text: string;
  image_url?: string;
  sound_url?: string;
  example?: string[];
  is_star: boolean;
  tag: string[];
  is_remind: boolean;
  memory_level: 'NEW' | 'FORGOT' | 'REMEMBER';
}

export interface ILesson extends Document {
  name: string | null;
  description?: string | null;
  star: number;
  total: number;
  vocabularies: IVocabulary[];
  is_public: boolean;
  created_by: Types.ObjectId;
  receivers?: Types.ObjectId[];
  createdAt?: Date; 
  updatedAt?: Date; 
}

const VocabularySchema: Schema<IVocabulary> = new Schema(
  {
    index: { type: Number, required: true },
    front_text: { type: String, required: true },
    back_text: { type: String, required: true },
    image_url: { type: String },
    sound_url: { type: String },
    example: { type: [String] },
    is_star: { type: Boolean, required: true, default: false },
    tag: { type: [String] },
    is_remind: { type: Boolean, required: true, default: false },
    memory_level: {
      type: String,
      enum: ['NEW', 'FORGOT', 'REMEMBER'],
      required: true,
      default: 'NEW',
    },
  },
  {
    timestamps: true, // Include timestamps for createdAt and updatedAt
  },
);

const LessonSchema: Schema<ILesson> = new Schema(
  {
    name: { type: String },
    description: { type: String },
    star: { type: Number, required: true, default: 0 },
    total: { type: Number, required: true },
    vocabularies: [{ type: VocabularySchema }],
    is_public: { type: Boolean, required: true, default: false },
    created_by: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    receivers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: true, // Include timestamps for createdAt and updatedAt
  },
);

export const LessonName: string = 'Lesson';
export const lessonsProvider = [
  {
    provide: LessonName,
    useFactory: (connection: Connection) =>
      connection.model(LessonName, LessonSchema),
    inject: [MONGODB_CONFIG.DATABASE_CONNECTION],
  },
];

const LessonModel = model<ILesson>(LessonName, LessonSchema);
export default LessonModel;
