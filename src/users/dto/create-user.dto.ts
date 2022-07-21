import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty, IsString, IsUUID} from 'class-validator';

export class CreateUserDto {
  //Name*******
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do Usuário',
    example: 'Jonathan',
  })
  name: string;

  //Email*******
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'e-mail para contato',
    example: 'example@example.com.br',
  })
  email: string;

  //Password*******
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Senha de acesso',
    example: 'MinhaSenha123#',
  })
  password: string;

  //Confirm-Password**********
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Deve ser igual a senha sugerida',
    example: 'MinhaSenha123#',
  })
  confirmPassword: string;

    //Category*******
    @IsUUID()
    @ApiProperty({
      description: 'id',
      example: '6156ada4-cd93-41c2-bcc7-8bcdd7d8b7bd',
    })
    categoryId: string;

}
