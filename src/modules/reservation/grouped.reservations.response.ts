import { ApiProperty } from '@nestjs/swagger';
import { ReservationResponse } from './reservation.response';

export class GroupedReservationsResponse {
    @ApiProperty()
    data: GroupedReservationResponse[];
}

export class GroupedReservationResponse {
    @ApiProperty()
    date: string;

    @ApiProperty()
    reservations: ReservationResponse[];
}
