import mysql from 'mysql2/promise'

export default defineEventHandler(async (event) => {
    const appConfig = useRuntimeConfig()
    const connection = await mysql.createConnection(appConfig.mysql)

    const body = await readBody(event)
    const date = body.date.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1')

    try {
        const sqlQuery1 =
            `SELECT COUNT(id) 
                FROM invoice_main im
                WHERE im.date_create>? AND im.manager=1`

        const sqlParam1 = [date]
        const [result] = await connection.execute(sqlQuery1, sqlParam1)

        await connection.end()
        return { result: result[0]['COUNT(id)'] }
    } catch (e) {
        await connection.end()
        return { error: e.message }
    }
})