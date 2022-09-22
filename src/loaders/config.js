import dotenv from 'dotenv';

// Load env variables
dotenv.config({ path: './.env' });

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const PORT = process.env.PORT || 5004;
export const API_URL = process.env.API_URL || '';
export const DB_HOST = process.env.DB_HOST || '';
export const DB_USER = process.env.DB_USER || '';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_NAME = process.env.DB_NAME || '';
