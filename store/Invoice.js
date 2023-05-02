import {defineStore} from "pinia"

export const useInvoice = defineStore('Invoice', {
    state: () => {
        return {
            Invoices: [],
            flagInvoices: false,
            needUpdateInvoice: 4,

            //code: '', name: '', price: '', pic: '', brand: '', nstock: '', inum: 1, rnum: 1
            InvoiceInfo: {},
            InvoiceInfoItems: [],
            flagInvoiceIInfo: false,
        }
    },
    actions: {
        async UpdateListInvoices() {
            this.Invoices.length = 0

            const resultInvoices = await $fetch('/api/invoice/list')
            if (typeof resultInvoices === 'string') return
            if (!resultInvoices) return

            resultInvoices.rows.forEach((item) => {
                this.Invoices.push(
                    {
                        id: item.id,
                        id_old: item.id_old,
                        date: item.date,
                        organization: item.organization,
                        inn: item.inn,
                        email: item.email,
                        manager: item.manager,
                        tel: item.tel,
                        addr: item.addr,
                    }
                )
            })

            this.flagInvoices = true
        },
        UpdateInfoInvoice(id) {
            const date = Date.now()
            let currentDate = null
            do {
                currentDate = Date.now()
            } while (currentDate - date < 3000)

            // this.InvoiceInfo.length = 0
            // this.InvoiceInfoItems.length = 0
            //
            // const resultInvoiceInfo = await $fetch(`/api/invoice/${id}`)
            // if (typeof resultInvoiceInfo === 'string') return
            // if (!resultInvoiceInfo) return
            //
            // const val = resultInvoiceInfo['main'][0]
            //
            // this.InvoiceInfo.id_old = val.id_old
            // this.InvoiceInfo.inn = val.inn
            // this.InvoiceInfo.name = val.name
            // this.InvoiceInfo.email = val.email
            // this.InvoiceInfo.tel = val.tel
            // this.InvoiceInfo.manager = val.manager
            //
            // resultInvoiceInfo['items'].forEach((item) => {
            //     this.InvoiceInfoItems.push({
            //         code: item.code,
            //         name: item.name,
            //         quantity: item.quantity,
            //         pic: item.pic,
            //         price: item.price,
            //         storage: item.storage,
            //         brand: item.brand,
            //         up_ed: item.up_ed,
            //         up_kol: item.up_kol
            //     })
            // })

            console.log('OKKKK2!!!')

            this.flagInvoiceIInfo = true
        },
    }
})