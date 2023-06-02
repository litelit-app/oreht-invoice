import mysql from 'mysql2/promise'

export default defineEventHandler(async (event) => {
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    const appConfig = useRuntimeConfig()
    const connection = await mysql.createConnection(appConfig.mysql)

    try {
        const sqlQuery1 =
            `SELECT ii.code, ii.quantity
                FROM invoice_items ii
                WHERE ii.id_inv=?`

        const sqlParam1 = [event.context.params.id]
        const [items] = await connection.execute(sqlQuery1, sqlParam1)

        const sqlQuery2 = `SELECT EXISTS(SELECT 1 FROM invoice_items_1c WHERE id_inv=? limit 1);`
        const sqlParam2 = [event.context.params.id]
        const [result2] = await connection.execute(sqlQuery2, sqlParam2)

        if (result2[0]['EXISTS(SELECT 1 FROM invoice_items_1c WHERE id_inv=? limit 1)'] !== 0) {
            const sqlQuery4 = `DELETE FROM invoice_items_1c WHERE id_inv=?`
            const sqlParam4 = [event.context.params.id]
            await connection.execute(sqlQuery4, sqlParam4)
        }

        const sqlQuery5 = `UPDATE invoice_main SET status=2 WHERE id=?`
        const sqlParam5 = [event.context.params.id]
        await connection.execute(sqlQuery5, sqlParam5)

        for (let i = 0; i < items.length; i++) {
            let quantity_1c = items[i].quantity
            if (getRandom(0, 100) < 15) quantity_1c = (quantity_1c * 0.8).toFixed(0)

            const sqlQuery3 = `INSERT INTO invoice_items_1c (id_inv, code, quantity) VALUES (?,?,?)`
            const sqlParam3 = [event.context.params.id, items[i].code, quantity_1c]
            await connection.execute(sqlQuery3, sqlParam3)
        }

        await connection.end()
        return {result: 'ok'}
    } catch (e) {
        await connection.end()
        return {error: e.message}
    }
})