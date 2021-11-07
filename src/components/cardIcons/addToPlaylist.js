import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToPlaylistIcon = ({ movie }) => {

const context = useContext(MoviesContext);

const handleAddToPlaylist = (e) => {
    e.preventDefault();
    context.addToPlaylist(movie);
};

  return (
    <IconButton aria-label="add to playlist" onClick={handleAddToPlaylist}>
      <PlaylistAddIcon color="primary" fontSize="large"  />
    </IconButton>
  );
};

export default AddToPlaylistIcon;