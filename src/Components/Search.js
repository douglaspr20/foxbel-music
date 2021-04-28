import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";

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
    borderRadius: 100,
  },
}));

const Search = () => {
  const classes = useStyles();

  return (
    <>
      <form autoComplete="off" noValidate className={classes.form}>
        <InputBase 
          className={classes.input}
          placeholder="buscar"
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
