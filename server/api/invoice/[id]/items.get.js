import mysql from 'mysql2/promise'

export default defineEventHandler(async (event) => {
    const appConfig = useRuntimeConfig()
    const connection = await mysql.createConnection(appConfig.mysql)

    try {
        const sqlQuery1 =
            `SELECT ii.code, ii.quantity, 1c.quantity quantity_1c, cm.nazvan name, cm.pic_path pic, cm.r_cena price, cm.fiz_sklad storage, cm.brend brand, cm.up_ed, cm.up_kol
                FROM invoice_items ii
                LEFT JOIN catalog_main cm ON ii.code=cm.id
                LEFT JOIN invoice_items_1c 1c ON ii.code=1c.code AND 1c.id_inv=?
                WHERE ii.id_inv=?
                ORDER BY cm.nazvan ASC`

        const sqlParam1 = [event.context.params.id, event.context.params.id]
        const [items] = await connection.execute(sqlQuery1, sqlParam1)

        await connection.end()
        return { items }
    } catch (e) {
        await connection.end()
        return { error: e.message }
    }
})