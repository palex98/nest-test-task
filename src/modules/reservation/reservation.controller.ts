import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationsResponse } from './reservations.response';
import { GetReservationsByAmenityAndDateDto } from './get.reservations.by.amenity.and.date.dto';
import { GroupedReservationsResponse } from './grouped.reservations.response';

@Controller('reservations')
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) {
    }

    @Get(':userId')
    getReservationsByUserId(@Param('userId', ParseIntPipe) userId: number): Promise<GroupedReservationsResponse> {
        return this.reservationService.getReservationsByUserId(userId);
    }

    @Get()
    getReservationsByAmenityAndDate(@Query() filter: GetReservationsByAmenityAndDateDto): Promise<ReservationsResponse> {
        return this.reservationService.getReservationsByAmenityAndDate(filter);
    }
}
