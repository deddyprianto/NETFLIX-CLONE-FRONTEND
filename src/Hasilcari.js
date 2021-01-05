import React, { useEffect, useState } from "react";
import instance from "./Axios";
import { stateValueProvider } from "./StateProvider";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Container from "@material-ui/core/Container";
import { api_key } from "./Api";
import "./Hasilcari.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
function Hasilcari() {
  const [{ movie }, dispatch] = stateValueProvider();
  const [trailer, setTrailer] = useState("");
  const [hasil, setHasil] = useState([]);
  useEffect(() => {
    instance
      .get(`/search/movie?api_key=${api_key}&query=${movie}`)
      .then((res) => {
        setHasil(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [movie]);
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 445,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const classes = useStyles();
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const handleButton = (data) => {
    movieTrailer(data)
      .then((url) => {
        const urlPatch = new URLSearchParams(new URL(url).search);
        setTrailer(urlPatch.get("v"));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className="kontainer" fixed>
      {hasil.length === 0 ? (
        <h1 style={{ color: "red", textAlign: "center" }}>
          Film Tidak Di temukan
        </h1>
      ) : (
        hasil.map((data) => (
          <Card key={data?.id} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {data?.poster_path}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={data?.title}
              subheader={data?.release_date}
            />
            <CardMedia
              onClick={() => handleButton(data.title)}
              className={classes.media}
              image={`${baseUrl}${data.backdrop_path}`}
              title="Paella dish"
            />
            {/* {trailer && <Youtube videoId={trailer} opts={opts} />} */}
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {data?.overview}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton>
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))
      )}
    </Container>
  );
}

export default Hasilcari;
