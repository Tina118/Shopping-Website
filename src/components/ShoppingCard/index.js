import {Flex} from 'rebass';
import {useRecoilValue} from 'recoil';

import { Typography ,Card, CardContent} from '@mui/material';
import Progress  from '../Progress';

import {selectedRow} from '../../recoil/atom';



const ShoppingCard = () => {

    const {volume,difficulty} = useRecoilValue(selectedRow)

    const {rating = "", text="",percentage=""} = difficulty

    
    
    return (
        <Card sx={{maxWidth:'355px', height: '232px'}}>
            <CardContent>
            <Flex flexDirection="column" >
                <Flex flexDirection="column" marginBottom="px">
                <Typography fontSize="14px">Volume:</Typography>
                <Typography fontSize="20px" fontWeight="bold">{volume}</Typography>
            </Flex>
        
            <Typography fontSize="14px">Keyword difficulty:</Typography>
            <Flex alignItems="center" marginBottom="10px">
                <Flex flexDirection="column" marginRight="20px" >
                    <Typography fontSize="20px" fontWeight="bold">{percentage} %</Typography>
                    <Typography fontSize="12px">{rating}</Typography>
                </Flex>
                <Progress/>
            </Flex>
            <Typography fontSize="12px">{text}</Typography>
            
    </Flex>
    
    </CardContent>
    </Card>
)}

export default ShoppingCard