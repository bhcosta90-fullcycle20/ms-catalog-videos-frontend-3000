import { FunctionComponent } from "react";
import {Container, makeStyles, Typography} from '@material-ui/core'

interface IndexProps {
    title: string
}

const useStyles = makeStyles({
    title: {
        'color': '#999999'
    }
})
 
const Index: FunctionComponent<IndexProps> = (props) => {
    const classes = useStyles();

    return ( <div>
        <Container>
            <Typography component={'h1'} className={classes.title} variant="h5">{props.title}123</Typography>
            {props.children}
        </Container>
    </div> );
}
 
export default Index;