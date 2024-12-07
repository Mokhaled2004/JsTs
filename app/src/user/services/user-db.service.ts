import fs from 'fs';

import { Injectable } from '../../decorators';

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

@Injectable()
export class UserDbService {
    private fileName = 'userStorage.json';
    private absolutePath = `${__dirname}/${this.fileName}`;
    private USERS: IUser[] = [];

    constructor() {
        this.loadData();
    }

    private loadData() {
        const isFileExists = fs.existsSync(this.absolutePath);
        if (!isFileExists) {
            fs.writeFileSync(this.absolutePath, '[]');
        }
        const fileContent = fs.readFileSync(this.absolutePath, {
            encoding: 'utf-8',
        });
        this.USERS = JSON.parse(fileContent || '[]');
    }

    private syncData() {
        fs.writeFileSync(
            this.absolutePath,
            JSON.stringify(this.USERS, null, 2)
        );
    }

    insert(user: IUser) {
        this.USERS.push(user);
        this.syncData();
    }

    findByEmail(email: string): IUser | undefined {
        return this.USERS.find((user) => user.email === email);
    }
}

class MySQLDB {
    insert() {}
    delete() {}
    deleteMany() {}
    find() {}
}
