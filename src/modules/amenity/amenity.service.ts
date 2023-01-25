import { Injectable } from '@nestjs/common';
import { CSVParserService } from '../csv.parser/csv.parser.service';
import { AmenityInterface } from './amenity.interface';

@Injectable()
export class AmenityService {
    private readonly sourceFileName = 'Amenity.csv';

    constructor(private readonly csvParserService: CSVParserService) {
    }

    private getAllAmenities(): Promise<AmenityInterface[]> {
        return this.csvParserService.getParsedData<AmenityInterface>(this.sourceFileName);
    }

    async getAmenityById(amenityId: number): Promise<AmenityInterface | null> {
        const allAmenities = await this.getAllAmenities();
        return allAmenities.find(amenity => amenity.id === amenityId) || null;
    }
}
