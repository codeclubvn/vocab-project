import { UsersModule } from 'src/users/users.module';
import SwaggerDesignPattern from './design.swagger';
import { CollectionsModule } from 'src/collections/collections.module';

export default function CustomSwagger(app) {
  const SwaggerCustom = new SwaggerDesignPattern(app);
  SwaggerCustom.withModule(UsersModule)
    .withOptions('User example', 'Mô phỏng tất cả api về Users', 'users', true)
    .renderRoute('/api/users');

  // -Mô phỏng api cho controller collections
  SwaggerCustom.withModule(CollectionsModule)
    .withOptions(
      'Collects example',
      'Mô phỏng tất cả api về Collections',
      'collections',
    )
    .renderRoute('/api/collects');
}
