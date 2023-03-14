import {defineStore} from "pinia"

export const useInvoice = defineStore('Invoice', {
    state: () => {
        return {
            UnprocessedInvoices: [
                {id: '100999', date: '02.03.2023 8:50:16', organization: 'ИП Белогуров Владимир Валерьевич', inn: '911002566796', email: 'alarma1991@gmail.com', manager: 'margarita@oreht.ru', tel: '+79788473244', addr: '442530, Пензенская обл, г Кузнецк'},
                {id: '101000', date: '02.03.2023 10:14:16', organization: 'ИП Пронин Дмитрий Дмитриевич', inn: '582400565571', email: 'lkv_mail@rambler.ru', manager: 'margarita@oreht.ru', tel: '+79273616522', addr: '442630, Пензенская обл, с Наровчат'},
                {id: '101001', date: '02.03.2023 10:41:16', organization: 'ООО «Для дома, для быта»', inn: '7706804655', email: 'tdbd-new@ya.ru', manager: 'oblast@oreht.ru', tel: '+79085359717', addr: '442530, г Пенза, ул. Вадинская, д.7а, кв.8'},
                {id: '101002', date: '02.03.2023 10:50:16', organization: 'ООО «ПРОМВЕНТ»', inn: '5837049498', email: 'stroykom-73@yandex.ru', manager: 'kerimrustam@mail.ru', tel: '703-141', addr: '442530, г Пенза, пр. Строителей, 53-73'},
                {id: '101003', date: '02.03.2023 11:35:16', organization: 'ИП Пронин Дмитрий Дмитриевич', inn: '582400565571', email: 'lkv_mail@rambler.ru', manager: 'margarita@oreht.ru', tel: '+79273616522', addr: '442630, Пензенская обл, с Наровчат'},
                {id: '101004', date: '02.03.2023 11:40:16', organization: 'ООО «Для дома, для быта»', inn: '7706804655', email: 'tdbd-new@ya.ru', manager: 'oblast@oreht.ru', tel: '+79085359717', addr: '442530, г Пенза, ул. Вадинская, д.7а, кв.8'},
                {id: '200999', date: '02.03.2023 11:40:16', organization: 'ИП Белогуров Владимир Валерьевич', inn: '911002566796', email: 'alarma1991@gmail.com', manager: 'margarita@oreht.ru', tel: '+79788473244', addr: '442530, Пензенская обл, г Кузнецк'},
                {id: '201000', date: '02.03.2023 11:40:16', organization: 'ИП Пронин Дмитрий Дмитриевич', inn: '582400565571', email: 'lkv_mail@rambler.ru', manager: 'margarita@oreht.ru', tel: '+79273616522', addr: '442630, Пензенская обл, с Наровчат'},
                {id: '201001', date: '02.03.2023 11:40:16', organization: 'ООО «Для дома, для быта»', inn: '7706804655', email: 'tdbd-new@ya.ru', manager: 'oblast@oreht.ru', tel: '+79085359717', addr: '442530, г Пенза, ул. Вадинская, д.7а, кв.8'},
                {id: '201002', date: '02.03.2023 11:53:16', organization: 'ООО «ПРОМВЕНТ»', inn: '5837049498', email: 'stroykom-73@yandex.ru', manager: 'kerimrustam@mail.ru', tel: '703-141', addr: '442530, г Пенза, пр. Строителей, 53-73'},
                {id: '201003', date: '02.03.2023 11:54:16', organization: 'ИП Пронин Дмитрий Дмитриевич', inn: '582400565571', email: 'lkv_mail@rambler.ru', manager: 'margarita@oreht.ru', tel: '+79273616522', addr: '442630, Пензенская обл, с Наровчат'},
                {id: '201004', date: '02.03.2023 11:55:16', organization: 'ООО «Для дома, для быта»', inn: '7706804655', email: 'tdbd-new@ya.ru', manager: 'oblast@oreht.ru', tel: '+79085359717', addr: '442530, г Пенза, ул. Вадинская, д.7а, кв.8'},
            ],
            flagUnprocessedInvoice: true,

            InvoiceItems: [
                {code: '104550', name: 'Водонагреватель DE LUX SLIM 3W30V1 ', price: '6777,00', pic: '\\86326\\104547\\104548\\104550.jpg', brend: 'De Luxe', inum: 46, rnum: 44},
                {code: '104551', name: 'Водонагреватель DE LUX SLIM 3W30V1 (30л) г.Пенза', price: '6777,00', pic: '\\86326\\104547\\104548\\104552.jpg', brend: 'De Luxe', inum: 46, rnum: 44},
                {code: '104552', name: 'Водонагреватель DE LUX SLIM 3W30V1 (30л) г.Пенза', price: '6777,00', pic: '\\86326\\104547\\104548\\104554.jpg', brend: 'De Luxe', inum: 46, rnum: 44},
                {code: '104553', name: 'Водонагреватель DE LUX SLIM 3W30V1 (30л) г.Пенза', price: '6777,00', pic: '\\86326\\104547\\104548\\104556.jpg', brend: 'De Luxe', inum: 46, rnum: 44},
                {code: '104554', name: 'Водонагреватель DE LUX SLIM 3W30V1 (30л) г.Пенза', price: '6777,00', pic: '\\86326\\104547\\104548\\104562.jpg', brend: 'De Luxe', inum: 46, rnum: 44},
            ],
            flagInvoiceItems: true,
        }
    },
    actions: {
        async updateListUnprocessedInvoice() {
            if (process.server) return

            this.flagUnprocessedInvoice = true
        }
    },
})