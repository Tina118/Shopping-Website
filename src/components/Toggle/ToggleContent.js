import { useRecoilValue } from 'recoil';
import {Flex} from 'rebass';

import {activePanel} from '../../recoil/atom';

/*
    ToggleContent
    Create Content to be displyed on selected toggle button
*/
const ToggleContent = ({id, component : Component = Flex, ...rest}) => {
    const activeId = useRecoilValue(activePanel);

    //mapping id with active id to show resective component
    const panelActive = id===activeId
    
    return panelActive  ? <Component {...rest}/> : null 
}

export default ToggleContent