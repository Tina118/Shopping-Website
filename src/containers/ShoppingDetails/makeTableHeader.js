import {Flex} from 'rebass';
import { Typography } from '@mui/material';

import {Badge,Circle} from '../../components';

const columns =[
    {
        Header: 'Keyword',
        accessor: 'keyword',
    },
    {
        Header: 'Intent',
        accessor: 'intent',
        Cell:({row : {original : {intent}}}) => <Badge className={`${intent?.type?.toLowerCase()} mini-badge`}>{intent?.inital}</Badge>
    },
    {
        Header: 'Volume',
        accessor: 'volume',
    },
    {
        Header: 'KD %',
        accessor: 'difficulty',
        Cell:({row:{original:{difficulty}}}) => (
            <Flex justifyContent="center" alignItems="center">
                <Typography fontSize="14px" marginRight="5px">{difficulty?.percentage}</Typography>
                <Circle  className={difficulty?.class}/>
            </Flex>
        )
    },
    {
        Header: 'CPC (USD)',
        accessor: 'cpc',
    },
    {
        Header: 'Com.',
        accessor: 'competition',
    },
    {
        Header: 'Results',
        accessor: 'results',
    },
    
]

export default columns
