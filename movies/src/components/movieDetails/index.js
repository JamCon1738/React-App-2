import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"
import Grid from "@mui/material/Grid";
import MovieRecommendation from "../movieRecommendation";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);



  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper
        component="ul"
        sx={{ ...root }}
      >
        <li>
          <Chip label="Genres" sx={{ ...chip }} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{ ...chip }} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{ ...root }}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>
      <Paper
        component="ul"
        sx={{ ...root }}
      >
        <li>
          <Chip label="Production Countries" sx={{ ...chip }} color="primary" />
        </li>
        {movie.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{ ...chip }} />
          </li>
        ))}
      </Paper>
      <Paper>
        <Typography variant="h5" component="h3">
          Recommended Movies
        </Typography>
        <Grid container sx={{ padding: '20px' }}>
          <Grid item container spacing={5}>
            <MovieRecommendation movie={movie} />
          </Grid>
        </Grid>
      </Paper>

      <Paper>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
          <Grid item xs={2}>
            <Link to={`credits`}>
              <Button variant="outlined" size="medium" color="secondary" sx={{ padding: '20px' }}>
                CREDITS
              </Button>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link to={`credits`}>
              <Button variant="outlined" size="medium" color="secondary" sx={{ padding: '20px' }}>
                Test
              </Button>
            </Link>
          </Grid>

        </Grid>
      </Paper>


      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};

export default MovieDetails;