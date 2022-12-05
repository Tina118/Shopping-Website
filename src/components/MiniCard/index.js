import {Flex} from 'rebass';
import styled from 'styled-components';

import { Typography ,Card, CardContent} from '@mui/material';

const CustomCard = styled(Card)`
    width: 370px;
    height: 80px;
    display:flex;
    margin-bottom: 15px;

    @media (max-width: 830px) {
        width:100%;
}
`


/*
    MiniCard
    Cards to display the relevant information 
*/
const MiniCard = ({data}) => 
        <CustomCard sx={{}}>
            {data.map(({title,value})=> (
                <CardContent key={title}>
                    <Flex flexDirection="column" marginRight='100px'>
                        <Typography fontSize="16px">{title}</Typography>
                        {value}    
                    </Flex>
                </CardContent>
            
            ))}
            </CustomCard>
       
        
       
       
        

export default MiniCard