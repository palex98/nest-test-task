import { Controller, Get, Query } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationsResponse } from './reservations.response';
import { GetReservationsByAmenityAndDateDto } from './get.reservations.by.amenity.and.date.dto';

@Controller('reservations')
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) {
    }

    @Get()
    getReservationsByAmenityAndDate(@Query() filter: GetReservationsByAmenityAndDateDto): Promise<ReservationsResponse> {
        return this.reservationService.getReservationsByAmenityAndDate(filter);
    }
}
