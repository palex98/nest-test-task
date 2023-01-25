import { Module } from '@nestjs/common';
import { CSVParserModule } from '../csv.parser/csv.parser.module';
import { AmenityService } from './amenity.service';
import { AmenityController } from './amenity.controller';

@Module({
    imports: [CSVParserModule],
    exports: [AmenityService],
    providers: [AmenityService],
    controllers: [AmenityController],
})
export class AmenityModule {}
