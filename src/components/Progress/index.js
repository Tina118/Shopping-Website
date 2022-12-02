import {Flex} from 'rebass';
import {useRecoilValue} from 'recoil';

import CircularProgress from '@material-ui/core/CircularProgress';

import {selectedRow} from '../../recoil/atom';

const colorMapping = {
  very_easy:'#009F81',
  easy:"#59DDAA",
  possible:"#FDC23C",
  difficult: "#FF8C43",
  hard:"#FF4953",
  very_hard:"#D1002F"
}


const Progress = () => {

  const {difficulty} = useRecoilValue(selectedRow)

    return (
     
      <Flex style={{ position: 'relative' }}>
        <CircularProgress
          variant="determinate"
          size={40}
          thickness={10}
          value={100}
          style={{
            color: '#B8B8B8',
          }}
        /> 
        <CircularProgress
          variant="determinate"
          style={{
            color:  colorMapping[difficulty?.class],
            position: 'absolute',
            left: 0,
            
          }}
          size={40}
          thickness={10}
          value={difficulty?.percentage}
        />
      </Flex>
      
    )
  };

export default Progress;