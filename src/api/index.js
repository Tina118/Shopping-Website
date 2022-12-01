import {useQuery} from 'react-query';

import {normaliseData} from './normaliseData';
import shoppingInfo from './data.json';



const getShoppingData = () =>{ 

    const relatedData = normaliseData(shoppingInfo?.raw_related_data)
    const boardMatchData = normaliseData(shoppingInfo?.raw_broadmatch_data)
    const questions = normaliseData(shoppingInfo?.raw_question_data)


    return {relatedData, boardMatchData, questions}
}


const useShoppingData = () => {
    const { data } = useQuery('shopping',getShoppingData);

    return {...data}
};

    
export default useShoppingData;