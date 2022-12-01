import {Flex} from 'rebass';
import styled from 'styled-components';


const Circle = styled(Flex)`
    width: 10px;
    height: 10px;
    border-radius: 50%;

    &.very_easy{
        background: #009F81;
    }

    &.easy{
        background: #59DDAA;
    }

    &.possible{
        background: #FDC23C;
    }

    &.difficult{
        background: #FF8C43;
    }

    &.hard{
        background: #FF4953;
    }

    &.very_hard{
        background: #D1002F;
    }
`

export default Circle;