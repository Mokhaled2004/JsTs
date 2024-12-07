import fs from 'fs';

var fileContent = fs.readFileSync('day_18/input.txt', 'utf8');

export { fileContent };

export class LoadData {
    private fileContent: string;
    constructor() {
        this.fileContent = fs.readFileSync('day_18/input.txt', 'utf8');
    }

    getContent() {
        return this.fileContent;
    }
}