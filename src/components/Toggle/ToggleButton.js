import { ToggleButton as Button,ToggleButtonGroup} from '@mui/material';

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
        sx={{height:'30px',marginBottom:'20px',marginTop:'5px'}}

        >
            <Button onClick={()=>handleClick({id:"board_match"})} style={{ background: activeId==="board_match" ?  '#C3E1F9' : '#ebebeb'}} value="Board Match">Board Match</Button>
            <Button onClick={()=>handleClick({id:"related"})} style={{ background: activeId==="related" ?  '#C3E1F9' : '#ebebeb'}} value="Related">Related</Button>
            <Button onClick={()=>handleClick({id:"questions"})} style={{ background: activeId==="questions" ?  '#C3E1F9' : '#ebebeb'}} value="Questions">Questions</Button>
    </ToggleButtonGroup>
)};
    

export default ToggleButton