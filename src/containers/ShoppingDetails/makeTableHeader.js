import {Flex} from 'rebass';
import { Typography,Checkbox } from '@mui/material';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';

import {Badge,Circle} from '../../components';

const columns =[
    {
        Header:<Checkbox style={{padding:0}}/>,
        accessor:'checkbox',
        Cell: ()=><Checkbox style={{padding:0}}/>,
        width:'5%',    
    },
    {
        Header: 'Keyword',
        accessor: 'keyword',
        width:'35%',
    },
    {
        Header: 'Intent',
        accessor: 'intent',
        width:'15%',
        Cell:({row : {original : {intent}}}) => <Badge className={`${intent?.type?.toLowerCase()} mini-badge`}>{intent?.inital}</Badge>
    },
    {
        Header: <Flex alignItems="center"><Typography fontSize="12px" marginRight="7px">Volume</Typography><AlignHorizontalLeftIcon fontSize="16x"/></Flex>,
        accessor: 'volume',
        width:'10%',
    },
    {
        Header: <Flex alignItems="center"><Typography fontSize="12px" marginRight="7px">KD %</Typography><AlignHorizontalLeftIcon fontSize="16x"/></Flex>,
        accessor: 'difficulty',
        width:'15%',
        Cell:({row:{original:{difficulty}}}) => (
            <Flex justifyContent="center" alignItems="center">
                <Typography fontSize="12px" marginRight="5px">{difficulty?.percentage}</Typography>
                <Circle  className={difficulty?.class}/>
            </Flex>
        )
    },
    {
        Header: <Flex alignItems="center"><Typography fontSize="12px" marginRight="7px">CPC (USD)</Typography><AlignHorizontalLeftIcon fontSize="16x"/></Flex>,
        accessor: 'cpc',
        width:'30%',
    },
    {
        Header: <Flex alignItems="center"><Typography fontSize="12px" marginRight="7px">Com.</Typography><AlignHorizontalLeftIcon fontSize="16x"/></Flex>,
        accessor: 'competition',
        width:'10%',
    },
    {
        Header: <Flex alignItems="center"><Typography fontSize="12px" marginRight="7px">Results</Typography><AlignHorizontalLeftIcon fontSize="16x"/></Flex>,
        accessor: 'results',
        width:'10%',
    },
    
]

export default columns
