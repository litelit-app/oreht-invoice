import {defineStore} from "pinia"

export const useUnprocessedInvoice = defineStore('UnprocessedInvoice', {
    state: () => {
        return {
            UnprocessedInvoice: [
                {id: 0, name: '1234'}
            ],
            flagUnprocessedInvoice: false,
        }
    },
    actions: {
        async updateListUnprocessedInvoice() {
            if (process.server) return

            this.flagUnprocessedInvoice = true
        }
    },
})