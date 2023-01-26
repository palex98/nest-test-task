import {
    Controller,
    FileTypeValidator,
    HttpStatus,
    ParseFilePipe,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { CSVParserService } from './csv.parser.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ReadStream } from 'fs';
import { ApiImplicitFile } from '@nestjs/swagger/dist/decorators/api-implicit-file.decorator';
import { ApiOkResponse, ApiSecurity } from '@nestjs/swagger';
import { BasicAuthGuard } from '../auth/basic.auth.guard';

@Controller('convert')
@UseGuards(BasicAuthGuard)
@ApiSecurity('basic')
export class ConverterController {
    constructor(private readonly csvParserService: CSVParserService) {
    }

    @Post()
    @ApiImplicitFile({
        name: 'file',
        description: 'accepts .csv file',
        required: true,
    })
    @ApiOkResponse({
        status: HttpStatus.OK,
        description: 'Accepts .csv file and returns its content converted to JSON',
    })
    @UseInterceptors(FileInterceptor('file'))
    async convertCSVToJSON(@UploadedFile(new ParseFilePipe({
        validators: [
            new FileTypeValidator({ fileType: 'text/csv' }),
        ],
    })) file: Express.Multer.File): Promise<any> {
        return this.csvParserService.csvToJson(ReadStream.from(file.buffer));
    }
}
