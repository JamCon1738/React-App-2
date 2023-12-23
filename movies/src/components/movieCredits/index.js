import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";



export default function MovieCredits({ credit }) {


    return (

        <Card sx={{ maxWidth: 245 }}>
            <CardHeader
                title={<Typography variant="h5" component="p">
                    {credit.name}{" "}
                </Typography>} />

            <CardMedia
                sx={{ height: 300 }}
                image={credit.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${credit.profile_path}`
                    : img} /><CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            {credit.known_for_department}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            {credit.character}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent><CardActions disableSpacing>
                <Link to={`../../person/${credit.id}`}>
                    <Button variant="outlined" size="medium" color="primary">
                        More Info ...
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}






