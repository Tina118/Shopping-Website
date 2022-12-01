import {Flex} from 'rebass';
import { makeStyles } from '@mui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const mapping = {
    very_easy:'#009F81',
    easy:"#59DDAA",
    possible:"#FDC23C",
    difficult: "#FF8C43",
    hard:"#FF4953",
    very_hard:"#D1002F"
}

const useStyles = makeStyles(() => ({
    
    root: {
      position: 'relative',
    },
    bottom: {
      color: 'grey',
    },
    top: (props)=>({
      color: props?.color ,
      position: 'absolute',
      left: 0,
    }),
    
  }));
  
const Progress = ({type = 'possible'}) => {

    const props = {
        color: mapping[type] || mapping?.possible
    }

    const classes = useStyles(props);
  
    return (
      <Flex className={classes.root}>
        <CircularProgress
          variant="determinate"
          className={classes.bottom}
          size={40}
          thickness={10}
          value={100}
        />
        <CircularProgress
          variant="determinate"
          className={classes.top}
          size={40}
          thickness={10}
          value={46}
        />
      </Flex>
    );
  }

export default Progress;