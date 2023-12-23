import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";



export default function MovieRecommendations({ recommendation }) {


    return (

        <Card sx={{ maxWidth: 245 }}>
            <><CardHeader key={recommendation.id}
                title={<Typography variant="h5" component="p">
                    {recommendation.title}{" "}
                </Typography>} /><CardMedia key={recommendation.id}
                    sx={{ height: 300 }}
                    image={recommendation.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${recommendation.poster_path}`
                        : img} /><CardContent key={recommendation.id}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="h6" component="p">
                                <CalendarIcon fontSize="small" />
                                {recommendation.release_date}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" component="p">
                                <StarRateIcon fontSize="small" />
                                {"  "} {recommendation.vote_average}{" "}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent><CardActions disableSpacing key={recommendation.id}>
                    <Link to={`/movies/${recommendation.id}`}>
                        <Button variant="outlined" size="medium" color="primary">
                            More Info ...
                        </Button>
                    </Link>
                </CardActions></>
        </Card>
    );
}






