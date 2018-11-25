import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import './termCard.css'

export default class TermCard extends Component {    
    constructor(props) {
        super(props);
        this.state = props
    }

    mutate = (mutation, func, count) => {
        if(func === "nominative" && count === "singular") {
            return "an " + mutation.nominativeSingular;
        } else if(func === "nominative" && count === "plural") {
            return "na " + mutation.nominativePlural;
        } else if(func === "genitive" && count === "singular") {
            return "an " + mutation.genitiveSingular;
        } else if(func === "genitive" && count === "plural") {
            return "na " + mutation.genitivePlural;
        }
    }

    capitalise = (word) => word.charAt(0).toUpperCase() + word.slice(1);

    ordinate = (declension) => {
        switch(declension) {
            case 1:
                return "1st declension";
            case 2:
                return "2nd declension";
            case 3:
                return "3rd declension";
            case 4:
                return "4th declension";
            case 5:
                return "5th declension";
            default:
                return null;
        }
    }

    render() {
        const { ga, en } = this.state.result;
        return  <Card className="card">
                    <div className="contents">
                        <Typography variant="h5">{this.capitalise(ga.term)} / {this.capitalise(en.term)}</Typography>
                        <div>
                            <Chip label="noun" className="chip"/>
                            <Chip label={ga.gender} className="chip"/>
                            <Chip label={this.ordinate(ga.declension)} className="chip"/>
                            <Chip label="politics" className="chip"/>
                            <Chip label="history" className="chip"/>
                        </div>
                        <div>
                            <Grid container spacing={16}>
                                <Grid item xs={6}>
                                    <Typography variant="h5">{this.mutate(ga.mutations, "nominative", "singular")}</Typography>
                                    <Typography variant="subtitle1">Nominative Singular</Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography variant="h5">{this.mutate(ga.mutations, "nominative", "plural")}</Typography>
                                    <Typography variant="subtitle1">Nominative Plural</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={16}>
                                <Grid item xs={6}>                                    
                                    <Typography variant="h5">{this.mutate(ga.mutations, "genitive", "singular")}</Typography>
                                    <Typography variant="subtitle1">Genitive Singular</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h5">{this.mutate(ga.mutations, "genitive", "plural")}</Typography>
                                    <Typography variant="subtitle1">Genitive Plural</Typography>
                                </Grid>
                            </Grid>
                        </div>
                        <Typography>Related terms: administration</Typography>
                    </div>
                </Card>
    }
}
