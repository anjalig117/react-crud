const { db } = require('@vercel/postgres');
const { entries } = require('../app/lib/placeholder-data.js');

async function seedEntries(client){
    try{
        await client.sql`CREATE EXTENSION IF NOT EXISTS
        "uuid-ossp"`;
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS entries(
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE,
                content TEXT NOT NULL,
                image_url TEXT NOT NULL
            );
        `;
        console.log('Created entries tables');

        const insertedEntry = await Promise.all(
            entries.map(async (entry) => {
                return client.sql`INSERT INTO entries (id, name, content, image_url) VALUES (${entry.id}, ${entry.name}, ${entry.content}, ${entry.image_url})
                ON CONFLICT (id) DO NOTHING;
                `
            }),
        );

        console.log(`Seeded ${insertedEntry.length} entries`);

        return {
            createTable,
            entries: insertedEntry
        };
    } catch (error){
        console.error('Error seeding entries: ', error)
        throw error;
    }
}