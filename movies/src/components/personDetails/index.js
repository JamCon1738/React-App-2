import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const PersonDetails = ({ person }) => {  // Don't miss this!


    return (
        <>
            <Paper>
                <Typography variant="h5" component="h3">
                    Biography
                </Typography>

                <Typography variant="h8" component="h6">
                    {person.biography}
                </Typography>


                <Typography variant="h5" component="p">
                    Known for:
                </Typography>

                <Typography variant="h8" component="h5">
                    {person.known_for_department}
                </Typography>

                <Typography variant="h5" component="p">
                    Place of Birth:
                </Typography>

                <Typography variant="h8" component="h5">
                    {person.place_of_birth}
                </Typography>
            </Paper>

            <Typography variant="h5" component="p">
                Credits:

            </Typography>
            <Paper>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                    <Grid item xs={2}>
                        <Link to={`credits`}>
                            <Button variant="outlined" size="medium" color="secondary" sx={{ padding: '20px' }}>
                                CREDITS
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default PersonDetails;