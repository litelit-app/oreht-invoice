import mysql from 'mysql2/promise'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const appConfig = useRuntimeConfig()
    const connection = await mysql.createConnection(appConfig.mysql)

    try {
        const sqlQuery2 =
            `SELECT im.id_old,im.inn,iu.organization name,im.email,mt.name manager,im.date_create date,im.platform 
                FROM invoice_main im
                LEFT JOIN invoice_managers mt ON mt.id=im.manager 
                LEFT JOIN invoice_users iu ON iu.inn=im.inn
                WHERE im.id=?`

        const sqlParam2 = [event.context.params.id]
        const [result] = await connection.execute(sqlQuery2, sqlParam2)

        const message = {
            from: "web@oreht.ru",
            to: "torech@oreht.ru",
            subject: `Тест №${result[0].id_old}`,
            html: `<p>Высылаем вам (<b>${result[0].name}</b>) счет</p><p>Ваш менеджер - ${result[0].manager}</p>`
        }

        const transporter = await nodemailer.createTransport(appConfig.smtp)
        await transporter.sendMail(message)
        await transporter.close()

        const sqlQuery1 = `UPDATE invoice_main SET status=3 WHERE id=?`
        const sqlParam1 = [event.context.params.id]
        await connection.execute(sqlQuery1, sqlParam1)

        await connection.end()
        return {result: 'ok'}
    } catch (e) {
        await connection.end()
        return {error: e.message}
    }
})