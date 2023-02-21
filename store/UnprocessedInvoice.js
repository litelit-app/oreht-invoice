import {defineStore} from "pinia"

export const useUnprocessedInvoice = defineStore('UnprocessedInvoice', {
    state: () => {
        return {
            UnprocessedInvoice: [
                {id: '100999', date: '03.07.2017 15:53:16', organization: 'ИП Белогуров Владимир Валерьевич', inn: '911002566796', email: 'alarma1991@gmail.com', manager: 'margarita@oreht.ru', tel: '+79788473244', addr: '442530, Пензенская обл, г Кузнецк'},
                {id: '101000', date: '03.07.2017 15:54:26', organization: 'ИП Пронин Дмитрий Дмитриевич', inn: '582400565571', email: 'lkv_mail@rambler.ru', manager: 'margarita@oreht.ru', tel: '+79273616522', addr: '442630, Пензенская обл, с Наровчат'},
                {id: '101001', date: '03.07.2017 15:55:36', organization: 'ООО «Для дома, для быта»', inn: '7706804655', email: 'tdbd-new@ya.ru', manager: 'oblast@oreht.ru', tel: '+79085359717', addr: '442530, г Пенза, ул. Вадинская, д.7а, кв.8'},
                {id: '101002', date: '03.07.2017 16:01:45', organization: 'ООО «ПРОМВЕНТ»', inn: '5837049498', email: 'stroykom-73@yandex.ru', manager: 'kerimrustam@mail.ru', tel: '703-141', addr: '442530, г Пенза, пр. Строителей, 53-73'},
                {id: '101003', date: '03.07.2017 16:02:22', organization: 'ИП Пронин Дмитрий Дмитриевич', inn: '582400565571', email: 'lkv_mail@rambler.ru', manager: 'margarita@oreht.ru', tel: '+79273616522', addr: '442630, Пензенская обл, с Наровчат'},
                {id: '101004', date: '03.07.2017 16:45:11', organization: 'ООО «Для дома, для быта»', inn: '7706804655', email: 'tdbd-new@ya.ru', manager: 'oblast@oreht.ru', tel: '+79085359717', addr: '442530, г Пенза, ул. Вадинская, д.7а, кв.8'},
            ],
            flagUnprocessedInvoice: true,
        }
    },
    actions: {
        async updateListUnprocessedInvoice() {
            if (process.server) return

            this.flagUnprocessedInvoice = true
        }
    },
})