import * as SQLite from 'expo-sqlite'

export const useDb = () => {
    //abrir base de datos en la app
    const openDataBase = async () => {
        const db = await SQLite.openDatabaseAsync('sessions.db')
        return db
    }

    //iniciar tabla donde se van a guardar las sesiones
    const initDb = async () => {
        const db = await openDataBase()
        const sql = `CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL,email TEXT NOT NULL, token TEXT NOT NULL)`
        const res = await db.execAsync(sql)
        return res 
    }

    //guardar las sesiones en la tabla
    const insertSession = async ({localId, email, token}) => {
        const db = await openDataBase()
        const sql = `INSERT INTO sessions (localId, email, token) VALUE(?,?,?)`
        const args = [localId, email, token]
        const res = await db.execAsync(sql,args)
        return res
    }

    //obtener una sesion al abrir app con mismo usuario
    const getSession = async () => {
        const db = await openDataBase()
        const sql = `SELECT * FROM sessions`
        const firstRow = await db.getFirstAsync(sql)
        return firstRow
    }

    //borrar todas las sesiones
    const truncateSessionTable = async() => {
        const db = await openDataBase()
        const sql = `DELETE FROM sessions`
        const res = await db.execAsync(sql)
        return res
    }

    //retorno todas las funciones para poder utilizarlas en toda la app
    return {
      initDb,
      insertSession,
      getSession,
      truncateSessionTable  
    }
}
