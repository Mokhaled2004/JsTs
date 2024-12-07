import 'reflect-metadata';
import app from './app';
import { db } from './database';

const port =
    process.env.MY_NODE_JS_PORT != null
        ? parseInt(process.env.MY_NODE_JS_PORT)
        : 3000;

async function main(): Promise<void> {
    await db.authenticate();

    console.log('Server is starting...');
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

main();
