import { Injectable } from '@nestjs/common';
import { CSVParserService } from '../csv.parser/csv.parser.service';
import { ReservationInterface } from './reservation.interface';
import * as moment from 'moment';
import { transformReservation } from './reservation.tranformer';
import { AmenityService } from '../amenity/amenity.service';
import { GetReservationsByAmenityAndDateDto } from './get.reservations.by.amenity.and.date.dto';
import { ReservationsResponse } from './reservations.response';


@Injectable()
export class ReservationService {
    private readonly sourceFileName = 'Reservations.csv';
    constructor(
        private readonly csvParserService: CSVParserService,
        private readonly amenityService: AmenityService,
    ) {
    }

    private getAllReservations(): Promise<ReservationInterface[]> {
        return this.csvParserService.getParsedData<ReservationInterface>(this.sourceFileName);
    }

    async getReservationsByAmenityAndDate(filter: GetReservationsByAmenityAndDateDto): Promise<ReservationsResponse> {
        const allReservations = await this.getAllReservations();
        const amenity = await this.amenityService.getAmenityById(filter.amenityId);
        return { data: allReservations
            .filter(
                reservation => reservation.amenity_id === filter.amenityId
                    && moment(Number(reservation.date)).isSame(moment(filter.date), 'day')
            )
            .sort((a, b) => a.start_time - b.start_time)
            .map(reservation => transformReservation(reservation, amenity)),
        }
    }
}
