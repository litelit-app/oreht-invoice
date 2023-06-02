import mysql from 'mysql2/promise'

export default defineEventHandler(async (event) => {
    const appConfig = useRuntimeConfig()
    const connection = await mysql.createConnection(appConfig.mysql)

    try {
        const sqlQuery1 =
            `SELECT im.id_old,im.status,im.inn,iu.organization name,im.tel,im.email,mt.name manager,iu.address addr,im.date_create date,im.platform 
                FROM invoice_main im
                LEFT JOIN invoice_managers mt ON mt.id=im.manager 
                LEFT JOIN invoice_users iu ON iu.inn=im.inn
                WHERE im.id=?`

        const sqlParam1 = [event.context.params.id]
        const [result] = await connection.execute(sqlQuery1, sqlParam1)
        await connection.end()
        return { main: result[0] }
    } catch (e) {
        await connection.end()
        return { error: e.message }
    }
})