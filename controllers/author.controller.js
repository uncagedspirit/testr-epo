import { fetchAllAuthors } from "../models/author.model.js";

export const getAllAuthors = async (req, res) => {
    try {
        const authors = await fetchAllAuthors();
        res.status(200).json({ status: 'success', data: authors });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Failed to fetch authors', error: error.message });
    }
}