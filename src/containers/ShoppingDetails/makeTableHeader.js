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
        Cell:({row : {original : {keyword}}})=><Typography fontSize="12px">{keyword}</Typography>,
        width:'35%',
    },
    {
        Header: 'Intent',
        accessor: 'intent',
        width:'15%',
        Cell:({row : {original : {intent}}}) => <Badge className={`${intent?.type?.toLowerCase()} mini-badge`}>{intent?.inital}</Badge>
    },
    {
        Header: <Flex alignItems="center"><Typography fontSize="14px" >Volume</Typography><AlignHorizontalLeftIcon style={{fontSize:"14px"}}/></Flex>,
        accessor: 'volume',
        width:'10%',
        Cell:({row : {original : {volume}}})=><Typography fontSize="12px">{volume}</Typography>,
    },
    {
        Header: <Flex alignItems="center"><Typography fontSize="14px" >KD %</Typography><AlignHorizontalLeftIcon style={{fontSize:"14px"}}/></Flex>,
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
        Header: <Flex alignItems="center"><Typography fontSize="14px">CPC (USD)</Typography><AlignHorizontalLeftIcon style={{fontSize:"14px"}}/></Flex>,
        accessor: 'cpc',
        width:'30%',
        Cell:({row : {original : {cpc}}})=><Typography fontSize="12px">{cpc}</Typography>,
    },
    {
        Header: <Flex alignItems="center"><Typography fontSize="14px" >Com.</Typography><AlignHorizontalLeftIcon style={{fontSize:"14px"}}/></Flex>,
        accessor: 'competition',
        Cell:({row : {original : {competition}}})=><Typography fontSize="12px">{competition}</Typography>,
        width:'10%',
    },
    {
        Header: <Flex alignItems="center"><Typography fontSize="14px" >Results</Typography><AlignHorizontalLeftIcon style={{fontSize:"14px"}}/></Flex>,
        accessor: 'results',
        Cell:({row : {original : {results}}})=><Typography fontSize="12px">{results}</Typography>,
        width:'10%',
    },
    
]

export default columns
