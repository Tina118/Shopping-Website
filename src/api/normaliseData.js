export const normaliseData = (data) =>
     data.map(data =>  ({
        keyword : data[0],
        volume: data[1],
        intent:data[2],
        cpc:data[3],
        competition:data[4],
        results:data[5],
        difficulty:data[7]
}));