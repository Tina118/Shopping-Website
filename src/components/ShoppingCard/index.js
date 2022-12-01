import {Flex} from 'rebass';
import {useRecoilValue} from 'recoil';

import { Typography ,Card, CardContent} from '@mui/material';

import {selectedRow} from '../../recoil/atom';






const ShoppingCard = () => {

    const {volume,difficulty} = useRecoilValue(selectedRow)

    

    const {rating = "", text="",percentage=""} = difficulty
    
    return (
        <Card sx={{maxWidth:'300px', height: '232px'}}>
            <CardContent>
            <Flex flexDirection="column" >
                <Flex flexDirection="column" marginBottom="7px">
                <Typography fontSize="14px">Volume:</Typography>
                <Typography fontSize="16px" fontWeight="bold">{volume}</Typography>
            </Flex>
        
            <Typography fontSize="14px">Keyword difficulty:</Typography>
            <Typography fontSize="16px" fontWeight="bold">{percentage} %</Typography>
            <Typography fontSize="12px">{rating}</Typography>
            <Typography fontSize="12px">{text}</Typography>
            
    </Flex>
    
    </CardContent>
    </Card>
)}

export default ShoppingCard