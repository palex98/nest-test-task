import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../database/user.interface';
import { appConfig } from '../../config/configuration';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BasicAuthGuard implements CanActivate {
    private readonly bcryptSalt: string;
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<User>,
    ) {
        this.bcryptSalt = appConfig.bcryptSalt;
    }
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const b64auth = (request.headers.authorization || '').split(' ')[1] || '';
        const [username, password] = Buffer.from(b64auth, 'base64')
            .toString()
            .split(':');

        const user = await this.userModel.findOne({ username }).exec();

        if (!user) return false;

        return bcrypt.compare(password, user.password);
    }
}