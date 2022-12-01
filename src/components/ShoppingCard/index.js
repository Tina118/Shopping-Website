import {Flex} from 'rebass';
import {useRecoilValue} from 'recoil';
import { Typography ,Card, CardContent} from '@mui/material';


import {selectedRow} from '../../recoil/atom';
import keywordDifficulty from './keywordDifficult';


const difficultyLevel = (level) => ({
    5 : level > 85,
    4 : level >=70 && level <=85,
    3 : level >=50 && level <70,
    2 : level >=30 && level <50,
    1:  level>=15 && level <30,
    0: level <15
})


const ShoppingCard = () => {

    const {volume,difficulty} = useRecoilValue(selectedRow)

    const level = Object.entries(difficultyLevel(Number(difficulty))).filter((key) => key[1] && key[0])

    const {rating,text} = keywordDifficulty[level[0][0]]
    
    return (
        <Card sx={{maxWidth:'300px', height: '232px'}}>
            <CardContent>
    <Flex flexDirection="column" >
        <Flex flexDirection="column" marginBottom="7px">
            <Typography fontSize="14px">Volume:</Typography>
            <Typography fontSize="16px" fontWeight="bold">{volume}</Typography>
        </Flex>
        
            <Typography fontSize="14px">Keyword difficulty:</Typography>
            <Typography fontSize="16px" fontWeight="bold">{difficulty} %</Typography>
            <Typography fontSize="12px">{rating}</Typography>
            <Typography fontSize="12px">{text}</Typography>
        
        
    </Flex>
    </CardContent>
    </Card>
)}

export default ShoppingCard