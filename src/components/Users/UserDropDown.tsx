import React from 'react';
import {FormControl, InputLabel, MenuItem, Select, withStyles, WithStyles} from "@material-ui/core";
import {styleSheet} from "../StyleSheet";


interface IState {
    user: string;
}

type Props = WithStyles< typeof styleSheet >;

class UserDropDown extends React.Component<Props, IState> {

    state = {
        user: '',
    };

    public render(): React.ReactNode {
        const {classes} = this.props;

        const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
            this.setState({user:  event.target.value as string});
        };

        return (
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel
                        shrink id="demo-simple-select-placeholder-label-label"
                        className={classes.labelColor}
                    >
                       Users
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={this.state.user}
                        onChange={handleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                        variant={'outlined'}
                    >
                        <MenuItem value={'none'} className={classes.menuItems}>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'user 1'} className={classes.menuItems}>user 1</MenuItem>
                        <MenuItem value={'user 2'} className={classes.menuItems}>user 2</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    }
}

export const styledComponent = (withStyles(styleSheet, {withTheme: true})(UserDropDown));
export default styledComponent;