import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ReactTooltip from 'react-tooltip';
import StateChart from './StateChart';

const useStyles = makeStyles(theme => ({
    appBar: {
      position: 'relative',
      backgroundColor: '#509609',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MapDialog = props => {
    const classes = useStyles();
    const [contentD, setContentD] = useState("");
    const [DTName, setDTName] = useState("");
    return (
        <Dialog fullScreen TransitionComponent={Transition} open={props.show} onClose={props.closeModal} style={{ backgroundColor: 'black !important' }}>
            <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={props.closeModal} aria-label="close">
                <CloseIcon />
                </IconButton>
                {!DTName && (
                    <Typography variant="h6" className={classes.title}>
                        No district selected
                    </Typography>
                )}   
                {DTName && (
                    <Typography variant="h6" className={classes.title}>
                        Selected District: {DTName}
                    </Typography>
                )}   
            </Toolbar>
            </AppBar>
            <CssBaseline />
            <div style={{ height: '2000px', backgroundColor: 'black' }}>
                <Container maxWidth="md" style={{ border: '1px solid black', backgroundColor: 'black' }}>
                    <StateChart setTooltipContent={setContentD} setDistrictName={setDTName} selectedState={props.StateName} />
                    <ReactTooltip>{contentD}</ReactTooltip>
                </Container>
            </div>
        </Dialog>
    )
};

export default MapDialog;
