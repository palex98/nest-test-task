import { Module } from '@nestjs/common';
import { CSVParserService } from './csv.parser.service';
import { ConverterController } from './converter.controller';
import { DatabaseModule } from '../database/database.module';
import { userProvider } from '../database/providers/user.provider';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [DatabaseModule, AuthModule],
    exports: [CSVParserService],
    providers: [CSVParserService, ...userProvider],
    controllers: [ConverterController],

})
export class CSVParserModule {}
