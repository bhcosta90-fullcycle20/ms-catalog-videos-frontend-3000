import { FunctionComponent } from 'react'
import { AppBar, Toolbar, Typography, Button, makeStyles, Theme } from '@material-ui/core'
import Menu from './../Menu'
import logo from '../../static/img/logo.png';

const useStyles = makeStyles((theme: Theme) => ({
    toolbar: {
        backgroundColor: '#000'
    },
    title: {
        flexGrow: 1,
        textAlign: 'center'
    },
    logo: {
        width: 100,
        [theme.breakpoints.up('sm')]: {
            width: 170
        }
    }
}))

interface IndexProps {

}

const Index: FunctionComponent<IndexProps> = () => {
    const classes = useStyles();
    return (<AppBar>
        <Toolbar className={classes.toolbar}>
            <Menu />
            <Typography className={classes.title}>
                <img src={logo} alt='Codeflix' className={classes.logo} />
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>);
}

export default Index;