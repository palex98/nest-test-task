import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetReservationsByUserIdDto {
    @ApiProperty()
    @IsNumber()
    @Transform(({ value }) => {
        const result = parseInt(value, 10);
        if (Number.isNaN(result)) {
            return value;
        }
        return result;
    })
    public userId: number;
}
