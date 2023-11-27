import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { ILesson, LessonName } from './entities/lesson.schema';
import { Model, Types } from 'mongoose';
import { ResponseCustomData } from 'src/commons/response';

@Injectable()
export class LessonsService {
  constructor(
    @Inject(LessonName)
    private LessonModel: Model<ILesson>,
  ) {}

  async create(createLessonDto: CreateLessonDto) {
    const createLesson = new this.LessonModel({
      ...createLessonDto,
      total: createLessonDto.vocabularies.length,
      created_by: '656090c66ce502edc28e6aae',
    });
    const saved = await createLesson.save();
    return new ResponseCustomData(
      saved._id,
      'Create new lesson successfully',
      HttpStatus.CREATED,
    );
  }

  async findAll() {
    const userId = '656090c66ce502edc28e6aae';
    const listPreviewLesson = await this.LessonModel.find({
      created_by: new Types.ObjectId(userId),
    }).exec();

    const listWithPreviewImages = await Promise.all(
      listPreviewLesson.map(async (lesson) => {
        const vocabularies = lesson.vocabularies || [];
        const previewImage =
          vocabularies.length > 0 ? vocabularies[0].image_url || '' : '';

        const lessonWithPreviewImage = {
          _id: lesson._id,
          created_by: lesson.created_by,
          name: lesson.name,
          description: lesson.description,
          star: lesson.star,
          total: lesson.total,
          is_public: lesson.is_public,
          created_at: lesson.createdAt,
          updated_at: lesson.updatedAt,
          previewImage: previewImage,
        };

        return lessonWithPreviewImage;
      }),
    );

    return new ResponseCustomData(
      listWithPreviewImages,
      'Find lessons successfully',
      HttpStatus.FOUND,
    );
  }

  async findOne(id: number) {
    const lessson: ILesson = await this.LessonModel.findById({
      _id: new Types.ObjectId(id),
    });
    return new ResponseCustomData(
      lessson,
      'Find lessons successfully',
      HttpStatus.FOUND,
    );
  }

  findAllVocabulary(lessonid: number) {
    return `This action returns a #${lessonid} lesson with all vocab`;
  }

  update(id: number, updateLessonDto: UpdateLessonDto) {
    return `This action updates a #${id} lesson`;
  }

  updateVocabulary(
    id: number,
    idvocab: number,
    updateLessonDto: UpdateLessonDto,
  ) {
    return `This action updates a #${id} lesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} lesson`;
  }

  removeVocabulary(id: number, idvocab: number) {
    return `This action removes a #${id} lesson ${idvocab}`;
  }
}
