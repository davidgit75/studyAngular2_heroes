import { Injectable } from '@angular/core';
import { Path } from './path';
import { PATHS } from './mock-paths';

@Injectable()
export class PathService{
    getPaths(): Promise<Path[]>{
        return Promise.resolve(PATHS);
    }
}