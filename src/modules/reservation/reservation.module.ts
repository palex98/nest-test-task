import { Module } from '@nestjs/common';
import { CSVParserModule } from '../csv.parser/csv.parser.module';
import { AmenityModule } from '../amenity/amenity.module';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';

@Module({
    imports: [AmenityModule, CSVParserModule],
    exports: [ReservationService],
    providers: [ReservationService],
    controllers: [ReservationController],
})
export class ReservationModule {}
