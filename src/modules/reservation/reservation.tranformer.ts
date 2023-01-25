import { ReservationResponse } from './reservations.response';
import { ReservationInterface } from './reservation.interface';
import { AmenityInterface } from '../amenity/amenity.interface';

export const transformReservation = (reservation: ReservationInterface, amenity: AmenityInterface): ReservationResponse => ({
    reservationId: reservation.id,
    userId: reservation.user_id,
    startTime: reservation.start_time,
    duration: reservation.end_time - reservation.start_time,
    amenityName: amenity.name,
});
