import {db} from '../config/db.js';

export const fetchAllAuthors = async () => {
    const query = 'SELECT * FROM authors';
    const [rows] = await db.execute(query);
    return rows;
}