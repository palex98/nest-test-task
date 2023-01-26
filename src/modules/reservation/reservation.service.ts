import { Injectable } from '@nestjs/common';
import { CSVParserService } from '../csv.parser/csv.parser.service';
import { ReservationInterface } from './reservation.interface';
import * as moment from 'moment';
import { transformReservation } from './reservation.tranformer';
import { AmenityService } from '../amenity/amenity.service';
import { GetReservationsByAmenityAndDateDto } from './get.reservations.by.amenity.and.date.dto';
import { ReservationsResponse } from './reservations.response';
import { GroupedReservationsResponse } from './grouped.reservations.response';
import { ReservationResponse } from './reservation.response';


@Injectable()
export class ReservationService {
    private readonly sourceFileName = 'Reservations.csv';
    constructor(
        private readonly csvParserService: CSVParserService,
        private readonly amenityService: AmenityService,
    ) {
    }

    getAllReservations(): Promise<ReservationInterface[]> {
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

    async getReservationsByUserId(userId: number): Promise<GroupedReservationsResponse> {
        const allReservations = await this.getAllReservations();
        const allAmenities = await this.amenityService.getAllAmenities();
        const userReservations = allReservations.filter(reservation => reservation.user_id === userId);
        const groupedUserReservations = userReservations
            .reduce((accumulator: {[date: string]: ReservationResponse[]}, reservation) => {
                const dayStr = moment(Number(reservation.date)).format('DD-MM-YY');
                if (!accumulator[dayStr]) {
                    accumulator[dayStr] = [];
                }
                const amenity = allAmenities.find(amenity => amenity.id === reservation.amenity_id);
                accumulator[dayStr].push(transformReservation(reservation, amenity));
                return accumulator;
            }, {});
        return {
            data: Object
                .entries(groupedUserReservations)
                .map(([date, reservations]) => ({date, reservations})),
        }
    }
}
