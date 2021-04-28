import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";

import TrackContext from '../context/tracks/TrackContext'

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
  form: {
    width: "50%",
    margin: 10
  },
  input: {
    width: "100%",
    display: "flex",
    paddingLeft: 5,
    paddingRight: 5,
    border: "1px solid #BDBDBD",
    color: '#BDBDBD',
    borderRadius: 100,
  },
}));

const Search = () => {
  const classes = useStyles();
  const { getTracks } = useContext(TrackContext);

  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    getTracks(search)
  }

  return (
    <>
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
        <InputBase
          className={classes.input}
          placeholder="buscar"
          onChange={handleSearch}
          value={search}
          endAdornment={
            <InputAdornment>
              <SearchIcon color="action" />
            </InputAdornment>
          }
        />
      </form>
      <div className={classes.grow} />
      <PersonIcon color="primary" />

      <Typography color="gray" noWrap>
        Francisco M
      </Typography>
    </>
  );
};

export default Search;
