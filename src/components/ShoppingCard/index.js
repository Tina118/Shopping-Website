import {Flex} from 'rebass';
import {useRecoilValue} from 'recoil';
import styled from 'styled-components';

import { Typography ,Card, CardContent} from '@mui/material';
import{IconFlagUS} from 'material-ui-flags';

import Progress  from '../Progress';
import HorizontalRule from '../HorizontalRule';
import {selectedRow} from '../../recoil/atom';

const CustomCard = styled(Card)`
    width: 355px;
    height: 270px;

    @media (max-width: 830px) {
        width:100%;
}
`

/* 
    Shopping Card
    Card to display the volume and difficulty level
*/
const ShoppingCard = () => {

    const {volume,difficulty} = useRecoilValue(selectedRow)
    const {rating = "", text="",percentage=""} = difficulty

    return (
        <CustomCard>
            <CardContent>
                <Flex flexDirection="column" >
                    <Flex flexDirection="column" marginBottom="px">
                        <Typography fontSize="16px">Volume:</Typography>
                        <Flex alignItems="center">
                            <Typography fontSize="20px" fontWeight="bold" marginRight="10px">{volume}</Typography>
                            <IconFlagUS />
                        </Flex>
                    </Flex>

                    <HorizontalRule />
        
                <Typography fontSize="16px">Keyword difficulty:</Typography>
                <Flex alignItems="center" marginBottom="10px">
                    <Flex flexDirection="column" marginRight="20px" >
                        <Typography fontSize="20px" fontWeight="bold">{percentage} %</Typography>
                        <Typography fontSize="12px">{rating}</Typography>
                    </Flex>
                    <Progress/>
                </Flex>
                <Typography fontSize="14px">{text}</Typography>
            
                </Flex>
            </CardContent>
        </CustomCard>
)}

export default ShoppingCard