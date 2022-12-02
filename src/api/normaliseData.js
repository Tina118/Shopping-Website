//intent mapping
const intentMap = {
        '0': {
                type: "Commercial",
                inital:'C',
                hoverText: "The user wants to investigate brands or services.",     
        },
        '1': {
                type: "Informational",
                inital:'I',
                hoverText: "The user wants to find an answer to a specific question.", 
        },
        '2': {
                type: "Navigational",
                inital:'N',
                hoverText: "The user wants to find a specific page or site.",        
        },
        '3': {
                type: "Transactional",
                inital:'T',
                hoverText: "The user wants to complete an action (conversion).",
        },
};

//keyword difficulty mapping
const keywordDifficulty = {
        '0':{
            rating: "Very easy",
            text: "These are the best opportunities to start ranking new webpages on Google as soon as possible without backlinks.",
            class:"very_easy",
        },
        '1':{
            rating: "Easy",
            text:"These keywords have some competition but are still possible to rank for when you're starting out. To be able to rank for these, you'll need quality content focused on the keyword's intent.",
            class:'easy',
        },
        '2':{
            rating: "Possible",
            text:"Slightly more competition. You'll need well-structured and unique content appropriately optimized for your keywords.",
            class:'possible',
        },
        '3':{
            rating: "Difficult",
            text:"You'll need to have some backlinks in addition to your well-structured, helpful and optimized content in order to compete here.",
            class:'difficult',
        },
        '4':{
            rating: "Hard",
            text:"Even stiffer competition. These keywords will demand more effort in terms of getting higher authority referring domains in order to rank your well-optimized and helpful content among the top pages.",
            class:'hard',
        },
        '5':{
            rating: "Very hard",
           text:
             "The absolute hardest keywords to compete for, especially for a new website. These will demand a lot of on page SEO, link building, and content promotion efforts to eventually rank and acquire traffic.",
             class:'very_hard'
        }
};


//fetch required mapping based on level of difficulty
const difficultyLevel = (level) => ({
        5 : level > 85,
        4 : level >=70 && level <=85,
        3 : level >=50 && level <70,
        2 : level >=30 && level <50,
        1:  level>=15 && level <30,
        0: level <15
    })
       
const level = (difficulty) => Object.entries(difficultyLevel(Number(difficulty))).filter((key) => key[1] && key[0])


/* normaliseData
*  normalise to data comming from json in the required format
*/
export const normaliseData = (data) =>
     data.map(data =>  ({
        keyword : data[0],
        volume: data[1],
        intent: {...intentMap[data[2]]},
        cpc:data[3],
        competition:data[4],
        results:Number(data[5])!==0 ? `${Number(data[5])/1000000}M` : '0M',
        difficulty: {...keywordDifficulty[level(data[7])[0][0]], percentage:data[7]}
}));