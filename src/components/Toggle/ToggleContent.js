import { useRecoilValue } from 'recoil';
import {Flex} from 'rebass';

import {activePanel} from '../../recoil/atom';

const ToggleContent = ({id, component : Component = Flex, ...rest}) => {
    const activeId = useRecoilValue(activePanel);

    const panelActive = id===activeId
    
    return panelActive  ? <Component {...rest}/> : null 
}

export default ToggleContent