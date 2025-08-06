import bcrypt from 'bcryptjs';
import { findUserByEmail, createUser } from '../models/user.model.js';


jest.mock('bcryptjs')

jest.mock('../models/user.model.js', ()=>({
    findUserByEmail: jest.fn(),
    createUser: jest.fn()
}));

describe("register User", () => {
    let req, res;
    beforeEach(()=>{
        req = {
            body: {
                name: 
    })
}


afterEach(() => {
        jest.clearAllMocks();
    });


it('should register a new user successfully', async () => {
        