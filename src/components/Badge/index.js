import {Flex} from 'rebass';

import styled from 'styled-components'


const Badge=styled(Flex)`

    &.badges{
        padding: 4px 14px;
        border-radius: 50rem;
        font-size: 12px;
        align-items:center;
        justify-content:center;
    }

    &.mini-badge{
        padding: 5px 10px;
        border-radius: .27rem;
        font-size: 12px;
        width: 35%;
        align-items:center;
        justify-content:center;
    }

    &.commercial{
        background-color: #FCE081;
        color: #A75800; 
    }

    &.informational{
        background-color: #C4E5FE;
        color: #006DCA;
    }

    &.navigational{
        background-color: #EDD9FF;
        color: #8649E1;
    }

    &.transactional{
        background-color: #9EF2C9;
        color: #007C65;
    }

    &:hover + div {
        display: block;
        color: green;
        font-size: 25px;
    }

    
    
  
`
export default Badge;