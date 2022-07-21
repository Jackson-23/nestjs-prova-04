import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description:
      'Define se usuário é admin ou CommonUser',
    example: 'Admin',
  })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description:
      'Categoria de Itens: Eletetrônicos, Móveis, Eletrodomésticos, Moda, Ferramentas',
    example: 'Este usuário é administrador/Este usuário não é administrador',
  })
  description: string;

  
}
