import { Controller, Get, HttpStatus, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationsResponse } from './responses/reservations.response';
import { GetReservationsByAmenityAndDateDto } from './dtos/get.reservations.by.amenity.and.date.dto';
import { GroupedReservationsResponse } from './responses/grouped.reservations.response';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiImplicitParam } from '@nestjs/swagger/dist/decorators/api-implicit-param.decorator';

@ApiTags('reservations')
@Controller('reservations')
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) {
    }

    @ApiOkResponse({
        status: HttpStatus.OK,
        description: 'Returns reservations for user grouped by day',
        type: GroupedReservationsResponse,
    })
    @ApiImplicitParam({
        name: 'userId',
        description: 'id of the user to get reservations'
    })
    @Get(':userId')
    getReservationsByUserId(@Param('userId', ParseIntPipe) userId: number): Promise<GroupedReservationsResponse> {
        return this.reservationService.getReservationsByUserId(userId);
    }

    @Get()
    @ApiOkResponse({
        status: HttpStatus.OK,
        description: 'Returns reservations by amenityId sorted in ascending order by start time',
        type: ReservationsResponse,
    })
    getReservationsByAmenityAndDate(@Query() filter: GetReservationsByAmenityAndDateDto): Promise<ReservationsResponse> {
        return this.reservationService.getReservationsByAmenityAndDate(filter);
    }
}
