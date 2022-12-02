import {useQuery} from 'react-query';

import {normaliseData} from './normaliseData';
import shoppingInfo from './data.json';


//normalise the data in the required format for 3 different sections i.3 board_match,related,questions
const getShoppingData = () =>{ 

    const relatedData = normaliseData(shoppingInfo?.raw_related_data)
    const boardMatchData = normaliseData(shoppingInfo?.raw_broadmatch_data)
    const questions = normaliseData(shoppingInfo?.raw_question_data)

    return {relatedData, boardMatchData, questions}
}


/* useShoppingData
*  custom hook to fetch data from json file
*/

const useShoppingData = () => {
    const { data } = useQuery('shopping',getShoppingData);

    return {...data}
};

    
export default useShoppingData;