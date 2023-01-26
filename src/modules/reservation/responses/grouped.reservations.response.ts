import { ApiProperty } from '@nestjs/swagger';
import { ReservationResponse } from './reservation.response';

export class GroupedReservationResponse {
    @ApiProperty()
    date: string;

    @ApiProperty({ type: [ReservationResponse] })
    reservations: ReservationResponse[];
}

export class GroupedReservationsResponse {
    @ApiProperty({ type: [GroupedReservationResponse] })
    data: GroupedReservationResponse[];
}
