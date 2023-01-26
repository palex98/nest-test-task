import { Module } from '@nestjs/common';
import { ReservationModule } from './modules/reservation/reservation.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ReservationModule,
    AuthModule,
  ],
})
export class AppModule {}
