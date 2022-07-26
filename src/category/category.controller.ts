import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('category')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista todas as Categorias',
  })
  findAll() /*: Promise<Category[]>*/ {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Categoria por ID',
  })
  findById(@Param('id') id: string) {
    return this.categoryService.findById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Cria uma nova categoria',
  })
  create(@Body() createTableDto: CreateCategoryDto)/*: Promise<Category> */{
    return this.categoryService.create(createTableDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    summary: 'Deletar categoria',
  })
  delete(@Param('id') id: string) {
    return this.categoryService.delete(id);
  }

  @Patch('update/:id')
  @ApiOperation({
    summary: 'Atualizar Categoria',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCategoryDto,
  ) /*: Promise<Category | void>*/ {
    return this.categoryService.update(id, dto);
  }
}
