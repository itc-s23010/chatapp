// lib/db.ts
import mariadb from 'mariadb'

export const pool = mariadb.createPool({
    host: 'localhost',
    user: 'chat_user',
    password: 'password',
    database: 'chat_app',
    connectionLimit: 5
})