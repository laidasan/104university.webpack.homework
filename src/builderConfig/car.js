import { defineEnum } from '../defineEnum/define.js'

export const defaultConfig = defineEnum({
    enginue: {
        type: 'zero',
        insert: 'zero insert port , 9999',
        output: 'zero output port , 8787'
    },
    body: {
        type: 'MSV-R',
        Material: 'mcv:k:r:100',
    },
    head: {
        type: 'RX-78-R-FINGER',
        Material: 'mcv:k:r:100'
    }
})