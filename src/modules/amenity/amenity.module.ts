import { Module } from '@nestjs/common';
import { CSVParserModule } from '../csv.parser/csv.parser.module';
import { AmenityService } from './amenity.service';

@Module({
    imports: [CSVParserModule],
    exports: [AmenityService],
    providers: [AmenityService],
})
export class AmenityModule {}
