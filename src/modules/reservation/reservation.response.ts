import { ApiProperty } from '@nestjs/swagger';

export class ReservationResponse {
    @ApiProperty()
    reservationId: number;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    startTime: string;

    @ApiProperty()
    duration: number;

    @ApiProperty()
    amenityName: string;
}
