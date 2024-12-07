function pickRandomChar(str: string): string {
    return str[Math.floor(Math.random() * str.length)];
}

function randomId(charsLength = 16): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    let result = '';
    for (let i = 0; i < charsLength; i++) {
        result += pickRandomChar(alphabet + numbers);
    }
    return result;
}

export default function uniqueId(): string {
    const timestamp = Date.now(); // Get the current timestamp in milliseconds
    const randomNum = Math.floor(Math.random() * 1e8); // Generate a random number up to 8 digits
    return `${timestamp}${randomId(5)}${randomNum}${randomId(5)}`; // Combine timestamp and random number to create the ID
}
