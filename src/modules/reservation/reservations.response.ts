import { ApiProperty } from '@nestjs/swagger';

export class ReservationsResponse {
    @ApiProperty()
    data: ReservationResponse[]
}

export class ReservationResponse {
    @ApiProperty()
    reservationId: number;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    startTime: number;

    @ApiProperty()
    duration: number;

    @ApiProperty()
    amenityName: string;
}
