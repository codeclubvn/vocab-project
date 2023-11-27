import { UsersModule } from 'src/users/users.module';
import SwaggerDesignPattern from './design.swagger';

export default function CustomSwagger(app) {
  const SwaggerCustom = new SwaggerDesignPattern(app);

  // -Mô phỏng api cho controller user
  // SwaggerCustom.withModule(UsersModule)
  //              .withOptions('User example', 'Mô phỏng tất cả api về Users', 'users', true)
  //              .renderRoute('/api/users');

  // // -Mô phỏng api cho controller lesson
  // SwaggerCustom.withModule(LessonModule)
  //               .withOptions(
  //                 'Lesson example',
  //                 'Mô phỏng tất cả api về Lesson',
  //                 'Lesson',
  //               )
  //               .renderRoute('/api/Lessons');
}
