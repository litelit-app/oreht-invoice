import {defineStore} from "pinia"

export const useGlobal = defineStore('Global', {
    state: () => {
        return {
            ImageURL: 'http://inv.oreht.ru/img'
        }
    }
})
