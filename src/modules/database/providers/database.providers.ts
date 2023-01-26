import * as mongoose from 'mongoose';
import { getMongoUri } from '../../../config/mongo.connection.helper';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(getMongoUri()),
    },
];