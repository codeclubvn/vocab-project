import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
/**
 * SwaggerDesignPattern have builder swagger very fast
 */
class SwaggerDesignPattern {
  app: INestApplication<any>;
  options;
  module;
  constructor(app) {
    this.app = app;
  }

  withModule(module) {
    this.module = module;
    return this;
  }
  /**
   * @param title title is first parameter
   * @param description description is second parameter
   * @param tag tag is third parameter
   * @param isNeedToken isNeedToken is type bool if request need accessToken
   * @param version version default 1.0.0
   * @returns  documentation about render  all  methods (Swagger)
   */
  withOptions(
    title: string,
    description: string,
    tag: string,
    isNeedToken = false,
    version = '1.0.0',
  ) {
    this.options = new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .setVersion(version)
      .addTag(tag);
    // nếu cần nhập token thì setup isNeedToken =true
    if (isNeedToken) {
      this.options.addBearerAuth(
        {
          // I was also testing it without prefix 'Bearer ' before the JWT
          description: `[just text field] Api nào cần Đến Token thì thì nhập vào nhé: Bearer <JWT>`,
          name: 'Authorization',
          bearerFormat: 'Bearer', // I`ve tested not to use this field, but the result was the same
          scheme: 'Bearer',
          type: 'http', // I`ve attempted type: 'apiKey' too
          in: 'Header',
        },
        'access-token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
      );
    }
    this.options.build();
    return this;
  }
  renderRoute(route: string) {
    const document = SwaggerModule.createDocument(this.app, this.options, {
      include: [this.module],
    });
    SwaggerModule.setup(route, this.app, document);
  }
}
export default SwaggerDesignPattern;
