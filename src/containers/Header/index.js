import {useRecoilValue} from 'recoil';
import {Flex} from 'rebass';
import { Typography } from '@mui/material';

import {selectedRow} from '../../recoil/atom';


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
            <Typography fontSize="14px">United States</Typography>
        </Flex>
        <hr/>
    </>
)}

export default Header