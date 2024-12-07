import { ICurrentUser } from '../utilities/auth.middleware';

declare global {
    declare namespace Express {
        export interface Request {
            currentUser?: ICurrentUser;
        }
    }
}

export default global;