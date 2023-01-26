import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { BasicAuthGuard } from './basic.auth.guard';
import { userProvider } from '../database/providers/user.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [PassportModule, DatabaseModule],
    providers: [BasicAuthGuard, ...userProvider],
})
export class AuthModule {}