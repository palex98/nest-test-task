import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetReservationsByAmenityAndDateDto {
    @ApiProperty({
        name: 'amenityId',
        description: 'id of the amenity to get reservations for'
    })
    @IsNumber()
    @Transform(({ value }) => {
        const result = parseInt(value, 10);
        if (Number.isNaN(result)) {
            return value;
        }
        return result;
    })
    public amenityId: number;

    @ApiProperty({
        name: 'date',
        description: 'timestamp, represents wanted day of reservation'
    })
    @IsDate()
    @Transform(({ value }) => new Date(Number(value)))
    public date: Date;
}
