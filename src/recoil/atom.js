import { atom } from 'recoil';

export const activePanel = atom({
    key:'ActivePanel',
    default:'board_match'

})

export const selectedRow = atom({
    key:'SelectedRow',
    default:{keyword : 'shopping in barcelona',
        volume: '480',
        intent:{
            type: "Commercial",
            inital:'C',
            hoverText: "The user wants to investigate brands or services.",
            backgroundColor: "#FCE081", 
            color: "#A75800", 
            hover: "#ffca6e" ,
    },
        cpc:0.24,
        competition:0.12,
        results:313000000,
        difficulty:{
            rating: "Possible",
            text:"Slightly more competition. You'll need well-structured and unique content appropriately optimized for your keywords.",
            percent:46,
        }
    }
})