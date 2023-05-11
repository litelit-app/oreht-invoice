import mysql from 'mysql2/promise'

export default defineEventHandler(async () => {
    const appConfig = useRuntimeConfig()
    const connection = await mysql.createConnection(appConfig.mysql)

    try {
        const sqlQuery =
            `SELECT im.id,im.id_old,im.inn,iu.organization,im.tel,im.email,mt.name manager,iu.address addr,im.date_create date,im.platform 
                FROM invoice_main im
                LEFT JOIN invoice_managers mt ON mt.id=im.manager 
                LEFT JOIN invoice_users iu ON iu.inn=im.inn
                WHERE im.status=1 AND im.manager=1
                ORDER BY im.date_create DESC 
                LIMIT 30`
        const [invoices] = await connection.query(sqlQuery)

        await connection.end()
        return { invoices }
    } catch (e) {
        await connection.end()
        return { error: e.message }
    }
})