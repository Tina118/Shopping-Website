import {Flex} from 'rebass';
import {useRecoilValue} from 'recoil';

import { Typography } from '@mui/material';

import {MiniCard, ShoppingCard, ShoppingTable ,ToggleButton,ToggleContent,Badge,Button} from '../../components';
import useShoppingData from '../../api';
import {selectedRow} from '../../recoil/atom';
import columns from './makeTableHeader';

/*
    ShoppingDetails
    Main Shopping component to display Cards , Buttons and Table
*/

const ShoppingDetails=()=> {
    //Fetch the relevant data
    const { relatedData ,boardMatchData, questions } = useShoppingData();
    const {intent,results,cpc,competition} = useRecoilValue(selectedRow)

    return (
        <Flex justifyContent="center" alignItems="center" width="100%">
            <Flex flexDirection="column" justifyContent="center" alignItems="flex-start"  >
                <Flex>
                    <ShoppingCard />
                    <Flex flexDirection="column"  marginLeft="25px">
                        <MiniCard data={[{title:"Intent",value: 
                            <Flex flexDirection="column">
                                <Badge className={`${intent?.type?.toLowerCase()} badges`}>{intent?.type}</Badge>
                                <Typography>{intent?.hoverText}</Typography>
                            </Flex>}]}/>
                        <MiniCard data={[{title:"Results", value:<Typography fontSize="20px" fontWeight="bold">{results}</Typography>}]}/>
                        <MiniCard data={[{title:"CPC", value:<Typography fontSize="20px" fontWeight="bold">{`$ ${cpc}`}</Typography>},{title:'Com.',value:<Typography fontSize="20px" fontWeight="bold">{competition}</Typography>}]}/>
                    </Flex>
                </Flex>

                <Flex 
                    justifyContent="space-between" 
                    alignItems="center" 
                    width="100%" 
                    >
                    <ToggleButton  />
                    <Button >Add to List</Button>
                </Flex>
                
                <Flex width="100%">
                    <ToggleContent id="related">{relatedData && <ShoppingTable columns={columns} data={relatedData} />}</ToggleContent>
                    <ToggleContent id="board_match">{boardMatchData && <ShoppingTable columns={columns} data={boardMatchData} />}</ToggleContent>
                    <ToggleContent id="questions">{questions && <ShoppingTable columns={columns} data={questions} />}</ToggleContent>
                </Flex>
            </Flex>
        </Flex>
        
)}

export default ShoppingDetails;