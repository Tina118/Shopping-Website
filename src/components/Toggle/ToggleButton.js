import { Typography ,ToggleButton as Button,ToggleButtonGroup} from '@mui/material';

import {useSetRecoilState,useRecoilValue} from 'recoil';
import { activePanel } from '../../recoil/atom';

const ToggleButton = () => {
    const setActivePanel = useSetRecoilState(activePanel)
    const activeId = useRecoilValue(activePanel)

    const handleClick = ({id}) => setActivePanel(id)

    return(
        <ToggleButtonGroup
        color="primary"
        exclusive
        value={activeId}
        sx={{height:'14px',marginBottom:'20px'}}

        >
            <Button onClick={()=>handleClick({id:"board_match"})} value="Board Match">Board Match</Button>
            <Button onClick={()=>handleClick({id:"related"})} value="Related">Related</Button>
            <Button onClick={()=>handleClick({id:"questions"})} value="Questions">Questions</Button>
    </ToggleButtonGroup>
)};
    

export default ToggleButton