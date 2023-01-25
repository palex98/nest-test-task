import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetReservationsByAmenityAndDateDto {
    @ApiProperty()
    @IsNumber()
    @Transform(({ value }) => {
        const result = parseInt(value, 10);
        if (Number.isNaN(result)) {
            return value;
        }
        return result;
    })
    public amenityId: number;

    @ApiProperty()
    @IsDate()
    @Transform(({ value }) => {
        console.log(value)
        return new Date(Number(value));
    })
    public date: Date;
}
