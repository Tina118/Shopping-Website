import {Flex} from 'rebass';
import styled from 'styled-components'


/*  
    Badge
    Custom Badge Component which will change color based on mapping of classes
*/
const Badge=styled(Flex)`

    &.badges{
        width:100px;
        padding: 4px 14px;
        border-radius: 50rem;
        font-size: 12px;
        align-items:center;
        justify-content:center;
        cursor:pointer;
    }

    &.mini-badge{
        padding: 5px 10px;
        border-radius: .27rem;
        font-size: 12px;
        width: 35%;
        align-items:center;
        justify-content:center;
    }

    &+p{
        display:none;
    }

    &:hover + p {
        display:block;
        font-size: 10px;
        margin-left:20px;
        }

    &.commercial{
        background-color: #FCE081;
        color: #A75800;
        
        
        &:hover + p {
            color:#ffca6e;
        }
        
    }

    &.informational{
        background-color: #C4E5FE;
        color: #006DCA;

        &:hover + p {
            color:#61c6ff;
        }
    }

    &.navigational{
        background-color: #EDD9FF;
        color: #8649E1;

        &:hover + p {
            color:#c59dfa;
        }
    }

    &.transactional{
        background-color: #9EF2C9;
        color: #007C65;

        &:hover + p {
            color:#11d6a6;
        }
    }
 
`
export default Badge;