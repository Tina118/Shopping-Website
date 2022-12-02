import {useRecoilValue} from 'recoil';
import {Flex} from 'rebass';

import { Typography } from '@mui/material';
import{IconFlagUS} from 'material-ui-flags';

import  {HorizontalRule}  from '../../components';
import {selectedRow} from '../../recoil/atom';


/*  Header
    Header of the page
*/

const Header = () => {
    const {keyword} = useRecoilValue(selectedRow)

    return (
    <>
        <Flex>
            <Typography fontSize="16px" fontWeight="bold">Keyword:</Typography>
            <Typography fontSize="16px">{keyword}</Typography>
        </Flex>
        <Flex>
            <Typography fontSize="14px">DataBase:</Typography>
            <Typography fontSize="14px" marginRight="5px">United States</Typography>
            <IconFlagUS style={{width:'17px',height:'22px'}}/>
            
        </Flex>
        <HorizontalRule/>
    </>
)}

export default Header