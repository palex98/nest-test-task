import { ApiProperty } from '@nestjs/swagger';
import { ReservationResponse } from './reservation.response';

export class ReservationsResponse {
    @ApiProperty({ type: [ReservationResponse] })
    data: ReservationResponse[];
}
