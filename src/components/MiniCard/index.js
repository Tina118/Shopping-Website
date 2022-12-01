import {Flex} from 'rebass'
import { Typography ,Card, CardContent} from '@mui/material';

const MiniCard = ({data}) => 
        <Card sx={{width:'400px', height: '70px', display:"flex", marginBottom: '10px'}}>
            {data.map(({title,value})=> (
                <CardContent>
                    <Flex flexDirection="column" marginRight='100px'>
                        <Typography fontSize="14px">{title}</Typography>
                        <Typography fontSize="16px" fontWeight="bold">{value}</Typography>
                    </Flex>
                </CardContent>
            
            ))}
            </Card>
       
        
       
       
        

export default MiniCard