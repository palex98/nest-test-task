import { Injectable } from '@nestjs/common';
import { createReadStream, ReadStream } from 'fs';
import { parse } from 'csv-parse';
import { Readable } from 'stream';

@Injectable()
export class CSVParserService {
    private async getReadableFileStream(fileName): Promise<ReadStream> {
        return createReadStream(`./csv/${fileName}`);
    }

    public csvToJson<T>(readableStream: Readable): Promise<T[]> {
        return new Promise((res, rej) => {
            const parsedData = [];
            readableStream
                .pipe(parse({ delimiter: ';', cast: true, columns: true }))
                .on('data', record => parsedData.push(record))
                .on('end', () => res(parsedData as T[]))
                .on('error', (e) => rej(e));
        });
    }

    async getParsedData<T>(fileName: string): Promise<T[]> {
        const stream = await this.getReadableFileStream(fileName);
        return this.csvToJson<T>(stream);
    }
}