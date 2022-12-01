import { atom } from 'recoil';

export const activePanel = atom({
    key:'ActivePanel',
    default:'board_match'

})

export const selectedRow = atom({
    key:'SelectedRow',
    default:{keyword : 'shopping in barcelona',
        volume: '480',
        intent:"0",
        cpc:0.24,
        competition:0.12,
        results:313000000,
        difficulty:46
    }
})