import {Flex} from 'rebass';

import { Typography ,Card, CardContent} from '@mui/material';


/*
    MiniCard
    Cards to display the relevant information 
*/
const MiniCard = ({data}) => 
        <Card sx={{width:'370px', height: '80px', display:"flex", marginBottom: '15px'}}>
            {data.map(({title,value})=> (
                <CardContent>
                    <Flex flexDirection="column" marginRight='100px'>
                        <Typography fontSize="16px">{title}</Typography>
                        {value}    
                    </Flex>
                </CardContent>
            
            ))}
            </Card>
       
        
       
       
        

export default MiniCard