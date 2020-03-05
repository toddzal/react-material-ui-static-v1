import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/AddAPhoto';
import React from 'react';

const useStyles = makeStyles(theme => ({
  appBar: {},
  card: {
    maxWidth: 500,
    maxHeight: '80vh',
    overflowY: 'auto'
  },
  media: {
    height: 140
  },
  grid: {
    // padding: theme.spacing(2),
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },
  input: {
    display: 'none'
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  uploadButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },
  formField: {
    width: '300px'
  },
  container: {
    maxHeight: '90vh',
    padding: theme.spacing(1),
    overflowY: 'auto'
  },
  cardTitle: {
    margin: theme.spacing(3)
  }
}));

export default function Form({
  title,
  setTitle,
  description,
  setDescription
}) {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="flex-start" alignItems="center">
      <TextField
        required
        label="Title"
        placeholder="Sparky Figurine"
        margin="normal"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className={classes.formField}
        variant="filled"
      />
      <TextField
        id="standard-multiline-flexible"
        label="Item Description"
        multiline
        margin="normal"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className={classes.formField}
        variant="filled"
      />
    </Grid>
  );
}
