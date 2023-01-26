import { ReservationInterface } from './reservation.interface';
import { AmenityInterface } from '../amenity/amenity.interface';
import { ReservationResponse } from './reservation.response';

export const transformReservation = (reservation: ReservationInterface, amenity: AmenityInterface): ReservationResponse => ({
    reservationId: reservation.id,
    userId: reservation.user_id,
    startTime: `${Math.floor(reservation.start_time / 60).toString().padStart(2, '0')}:${(reservation.start_time % 60).toString().padStart(2, '0')}`,
    duration: reservation.end_time - reservation.start_time,
    amenityName: amenity.name,
});
