import {Flex} from 'rebass';
import {useRecoilValue} from 'recoil';
import styled from 'styled-components';

import { Typography } from '@mui/material';

import {MiniCard, ShoppingCard, ShoppingTable ,ToggleButton,ToggleContent,Badge,Button} from '../../components';
import useShoppingData from '../../api';
import {selectedRow} from '../../recoil/atom';
import columns from './makeTableHeader';

const ButtonWrapper = styled(Flex)`
    justify-content:space-between;
    align-items: center;
    width:100%;

    @media (max-width: 830px) {
        flex-direction: column;
        justify-content:flex-start;
        align-items:flex-start;
  }  
`

const CardWrapper = styled(Flex)`
    @media (max-width: 830px) {
        flex-direction: column;
        width:100%
    }
`

const MiniCardWrapper = styled(Flex)`
    flex-direction:column;
    margin-left:25px;

    @media (max-width: 830px) {
        margin:0;
        margin-top:20px;
    }

`



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
            <Flex flexDirection="column" alignItems="flex-start">
                <CardWrapper>
                    <ShoppingCard />
                    <MiniCardWrapper >
                    <MiniCard data={[{
                        title: "Intent", value: <Flex flexDirection="column">
                            <Badge className={`${intent?.type?.toLowerCase()} badges`}>{intent?.type}</Badge>
                            <Typography>{intent?.hoverText}</Typography>
                        </Flex>
                    }]} />
                    <MiniCard data={[{ title: "Results", value: <Typography fontSize="20px" fontWeight="bold">{results}</Typography> }]} />
                    <MiniCard data={[{ title: "CPC", value: <Typography fontSize="20px" fontWeight="bold">{`$ ${cpc}`}</Typography> }, { title: 'Com.', value: <Typography fontSize="20px" fontWeight="bold">{competition}</Typography> }]} />
                </MiniCardWrapper>
            </CardWrapper>

            <ButtonWrapper>
                <ToggleButton />
                <Button>Add to List</Button>
            </ButtonWrapper>
            <Flex width="100%">
                <ToggleContent id="related">{relatedData && <ShoppingTable columns={columns} data={relatedData} />}</ToggleContent>
                <ToggleContent id="board_match">{boardMatchData && <ShoppingTable columns={columns} data={boardMatchData} />}</ToggleContent>
                <ToggleContent id="questions">{questions && <ShoppingTable columns={columns} data={questions} />}</ToggleContent>
            </Flex>
            </Flex>
        </Flex>
        
)}

export default ShoppingDetails;