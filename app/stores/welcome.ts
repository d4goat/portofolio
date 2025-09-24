import { defineStore } from "pinia";

export const useSetWelcome = defineStore('welcome', {
    state: () => {
        return { welcome: true }
    },

    actions: {
        setWelcome(){
            this.welcome = true
        },
        setNotWelcome(){
            this.welcome = false
        }
    }

})