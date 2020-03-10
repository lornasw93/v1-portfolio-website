import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export abstract class ProjectBaseService {
    abstract projectName: string;
    abstract statusPercent: number;
    abstract websiteUrl: string;
    abstract githubUrl: string;
    abstract tags: string[];
    
    constructor() { }
}
