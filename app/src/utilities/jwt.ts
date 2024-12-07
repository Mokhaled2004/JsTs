import jwt from 'jsonwebtoken';
import { ICurrentUser } from './auth.middleware';
const secretKey = '2342343242';
const refreshTokenSecret = '34ksdk2l';

// const object = {
//     sdf23e2: 3242,
//     ok: true
// };

type JwtPayload = Record<string, unknown>;
// type JwtPayload2 = { [key: string]: unknown };

function grantToken(
    secret: string,
    expiresIn: number | string
): (data: JwtPayload) => string {
    return (data: JwtPayload): string => {
        const result = jwt.sign(data, secret, { expiresIn });
        return result;
    };
}
export const getAccessToken = grantToken(secretKey, '30m');
export const getRefreshToken = grantToken(refreshTokenSecret, '1h');

function verifyToken(secret: string): (token: string) => ICurrentUser {
    return (token: string) => {
        const result = jwt.verify(token, secret) as ICurrentUser;
        return result;
    };
}
export const verifyRefreshToken = verifyToken(refreshTokenSecret);
export const verifyAccessToken = verifyToken(secretKey);
