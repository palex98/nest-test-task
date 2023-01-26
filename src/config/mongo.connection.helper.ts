import { appConfig } from './configuration';

export const getMongoUri = () =>
    `mongodb://${appConfig.database.user}:${appConfig.database.password}@${appConfig.database.host}:${appConfig.database.port}/${appConfig.database.dbName}`;
