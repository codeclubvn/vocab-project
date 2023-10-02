import { Controller, Post, Body } from '@nestjs/common';
import { CollectionCreateDto } from './dto/collections.dto';

@Controller('collections')
export class CollectionsController {

  @Post('create')
  createCollection(@Body() collectionCreate: CollectionCreateDto) {
    return collectionCreate;
  }
  
}
