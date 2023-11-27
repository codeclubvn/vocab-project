import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {
  IUsers,
  ROLE_PERMISSION,
  UserProvide,
  UsersModel,
} from 'src/users/entities/users.schema';
import { Command } from 'nestjs-command';
import { usersToSeed } from './user.data';
import { lessonToSeed } from './lesson.data';
import { LessonName, ILesson } from 'src/lessons/entities/lesson.schema';

@Injectable()
export class SeedService {
  constructor(
    @Inject(UserProvide)
    private UsersModel: Model<IUsers>,
    @Inject(LessonName)
    private LessonModel: Model<ILesson>,
  ) {}

  @Command({ command: 'data:import', describe: 'create a user' })
  async create() {
    await this.seedUsers();
    await console.log('CREATE USER SUCCESSFULLY!!');
    await this.seedLessons();
    await console.log('CREATE LESSON SUCCESSFULLY!!');
  }

  private async seedUsers() {
    try {
      await this.UsersModel.deleteMany();
      for (const userData of usersToSeed) {
        const user = new this.UsersModel(userData);
        await user.save();
      }
    } catch (error) {
      console.error('Error deleting users:', error);
    }
   
  }

  private async seedLessons() {
    try {
      await this.LessonModel.deleteMany();
      for (const lessonData of lessonToSeed) {
        const lesson = new this.LessonModel(lessonData);
        await lesson.save();
      }
    } catch (error) {
      console.error('Error deleting lessons:', error);
    }
    
  }
}
