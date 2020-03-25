import React from "react";
import {
  FormControl,
  Select,
  Checkbox,
  MenuItem,
  ListItemText,
  InputLabel,
  Input
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const CustomSelect = ({ options, label, handleChange, selected, name }) => {
  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "80%",
      maxWidth: "80%"
    },
    chips: {
      display: "flex",
      flexWrap: "wrap"
    },
    chip: {
      margin: 2
    },
    noLabel: {
      marginTop: theme.spacing(3)
    }
  }));

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-mutiple-checkbox-label">{label}</InputLabel>
      <Select
        labelId="demo-mutiple-checkbox-label"
        id="demo-mutiple-checkbox"
        name={name}
        multiple
        onChange={handleChange}
        value={selected}
        input={<Input />}
        renderValue={selected => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {options.map(name => {
          return (
            <MenuItem key={name} value={name}>
              <ListItemText primary={name} />
              <Checkbox checked={selected.indexOf(name) > -1} />
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
