import { Controller, Get } from '@nestjs/common';
import { AmenityService } from './amenity.service';
import { AmenityInterface } from './amenity.interface';

@Controller('amenity')
export class AmenityController {
    constructor(private readonly amenityService: AmenityService) {
    }
}
