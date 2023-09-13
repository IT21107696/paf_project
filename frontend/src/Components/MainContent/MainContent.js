import React, { Component } from 'react';
import "./MainContent.css";
import Grid from '@mui/material/Grid';
import StatusBar from '../StatusBar/StatusBar';
import MainPage from '../MainPage/MainPage';
import InfoSection from '../InfoSection/InfoSection';
import Suggestions from '../Suggestions/Suggestions';


class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div
                style={{
                    margin: "64px",
                    width: "100vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >


                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={12} className="maincontent__container">
                        <Grid>
                            <StatusBar />
                            <div>
                                <MainPage />
                            </div>

                        </Grid>


                        {/* </Grid> */}
                        <Grid item xs={2}>
                            {/* <InfoSection />
                           */}
                            <Suggestions />
                        </Grid>
                        <Grid item xs={2}>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default MainContent;