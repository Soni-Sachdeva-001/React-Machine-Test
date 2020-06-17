import React, {PureComponent} from 'react';
import {Box, Grid} from "@material-ui/core";

interface Props {
    title: string,
    description: string,
    userId: string,
}
export class FirstUser extends PureComponent<Props,{}> {

    render() {

        return (
            <Grid container justify={'center'} alignContent={'center'}>
                <form >
                    <Box my={3}>
                        <label><b>Todo Title</b>: &nbsp;&nbsp;</label>
                        <input type="Title" data-test="Title" value={this.props.title} />
                    </Box>
                    <Box mb={3}>
                        <label><b>Decription</b> : </label>
                        <input type="Decription" data-test="Decription" value={this.props.description} />
                    </Box>
                </form>
            </Grid>
        );
    }
}
