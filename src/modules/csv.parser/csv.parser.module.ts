import { Module } from '@nestjs/common';
import { CSVParserService } from './csv.parser.service';

@Module({
    exports: [CSVParserService],
    providers: [CSVParserService],
})
export class CSVParserModule {}
