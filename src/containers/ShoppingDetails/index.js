import {Flex} from 'rebass';
import {useRecoilValue} from 'recoil';

import { Typography } from '@mui/material';

import useShoppingData from '../../api';
import {MiniCard, ShoppingCard, ShoppingTable ,ToggleButton,ToggleContent,Badge} from '../../components';
import {selectedRow} from '../../recoil/atom';

import columns from './makeTableHeader';



const ShoppingDetails=()=> {
    const { relatedData ,boardMatchData, questions } = useShoppingData();
    const {intent,results,cpc,competition} = useRecoilValue(selectedRow)

    return (
        <Flex justifyContent="center">
        <Flex flexDirection="column" justifyContent="center" alignItems="flex-start" >
            <Flex>
                <ShoppingCard />
                <Flex flexDirection="column"  marginLeft="30px" title="Hello">
                    <MiniCard data={[{title:"Intent",value: <Badge className={`${intent?.type?.toLowerCase()} badges`} title={intent?.hoverText}>{intent?.type}</Badge>}]}/>
                    <MiniCard data={[{title:"Results", value:<Typography ffontSize="20px" fontWeight="bold">{results}</Typography>}]}/>
                    <MiniCard data={[{title:"CPC", value:<Typography ffontSize="20px" fontWeight="bold">{`$ ${cpc}`}</Typography>},{title:'Com.',value:<Typography ffontSize="20px" fontWeight="bold">{competition}</Typography>}]}/>
            </Flex>
            </Flex>
                <ToggleButton  />
                
            <Flex justifyContent="center">
                <ToggleContent id="related">{relatedData && <ShoppingTable columns={columns} data={relatedData} />}</ToggleContent>
                <ToggleContent id="board_match">{boardMatchData && <ShoppingTable columns={columns} data={boardMatchData} />}</ToggleContent>
                <ToggleContent id="questions">{questions && <ShoppingTable columns={columns} data={questions} />}</ToggleContent>
            </Flex>
            </Flex>
            </Flex>
        
)}

export default ShoppingDetails;