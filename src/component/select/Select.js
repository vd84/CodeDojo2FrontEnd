import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    display: "flex",
    "flex-direction": "row",
    "flex-wrap": "wrap",
    "justify-content": "space-around"
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

export default function MultipleSelect(props) {

  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
    props.selectedNames(value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="select-multiple-native">
          Choose RSS Feeds
        </InputLabel>
        <Select
          multiple
          native
          value={personName}
          onChange={handleChangeMultiple}
          inputProps={{
            id: "select-multiple-native",
          }}
        >
          {props.feedName.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
