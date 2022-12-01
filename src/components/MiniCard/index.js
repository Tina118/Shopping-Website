import {Flex} from 'rebass'
import { Typography ,Card, CardContent} from '@mui/material';


const MiniCard = ({data}) => 
        <Card sx={{width:'370px', height: '70px', display:"flex", marginBottom: '10px'}}>
            {data.map(({title,value})=> (
                <CardContent>
                    <Flex flexDirection="column" marginRight='100px'>
                        <Typography fontSize="14px">{title}</Typography>
                        {value}
                        
                    </Flex>
                </CardContent>
            
            ))}
            </Card>
       
        
       
       
        

export default MiniCard