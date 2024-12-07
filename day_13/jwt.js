const jwt = require('jsonwebtoken');

const secret1 = '2342342';
const secret2 = '4364564533';

function getToken(data, secret) {
    const result = jwt.sign(data, secret, { expiresIn: '1m' });
    return result;
}

const token1 = getToken({ email: 'aradwan@test.com' }, secret1);
const token2 = getToken({ email: 'aradwan@test.com' }, secret2);

console.log({ token1, token2 });

const verifyResult = jwt.verify(token1, secret1);
const decodeResult = jwt.decode(token1);
console.log({ decodeResult });

// token: Invalid Token     -> '23o4i7238942uiejiriu23'
// token: invalid signature -> 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyYWR3YW5AdGVzdC5jb20iLCJpYXQiOjE3MjUyNzI1NjV9.c0JCoPYLEf7D6PwDA3Z7B2P8jbeojGahBqbDWcogNd4'
// token: jwt expired       -> 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyYWR3YW5AdGVzdC5jb20iLCJpYXQiOjE3MjUyNzI1NjV9.c0JCoPYLEf7D6PwDA3Z7B2P8jbeojGahBqbDWcogNd4'

// twitter   -> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyYWR3YW5AdGVzdC5jb20iLCJpYXQiOjE3MjUyNzI1NjV9.c0JCoPYLEf7D6PwDA3Z7B2P8jbeojGahBqbDWcogNd4
// facebook  -> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyYWR3YW5AdGVzdC5jb20iLCJpYXQiOjE3MjUyNzI1NjV9.c0JCoPYLEf7D6PwDA3Z7B2P8jbeojGahBqbDWcogNd4
