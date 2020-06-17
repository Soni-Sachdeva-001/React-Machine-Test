import React, {PureComponent} from 'react';
import {Box, Button, Grid, WithStyles} from "@material-ui/core";
import UserDropDown from "../components/Users/UserDropDown";
import {styleSheet} from "../components/StyleSheet";


type Props = WithStyles <typeof styleSheet> ;

export class HomeScreen extends PureComponent<Props, {}>{

       state = {
            title:  '',
            description: '',
            user: '',
            error: '',
        };

   render() {

       const {classes} = this.props;
       const dismissError = () => {
            this.setState({ error: this.state.error });
        }

       const handleSubmit=(event: React.ChangeEvent<HTMLFormElement>) =>  {
            event.preventDefault();
       }

       const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({
                title: event.target.value as String,
            });
            // this.props.handleTitle(this.state.title);
        };

        const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({
                description: event.target.value,
            });
        }

         return (
            <Grid container justify={'center'} alignContent={'center'}>
                <form onSubmit={handleSubmit}>
                    {
                        this.state.error &&
                        <h3 data-test="error" onClick={dismissError}>
                            <button onClick={dismissError}>✖</button>
                            {this.state.error}
                        </h3>
                    }
                    <Box my={3}>
                    <label>Todo Title : &nbsp; </label>
                    <input type="Title" data-test="Title" value={this.state.title} onChange={handleTitleChange} />
                    </Box>
                    <Box mb={3}>
                    <label> Decription : </label>
                    <input type="Decription" data-test="Decription" value={this.state.description} onChange={handleDescChange} />
                    </Box>
                        <Box>
                            <UserDropDown classes={classes}
                                />

                                <Box mt={5} ml={13  }>
                                    <Button type="submit" value="Save" data-test="submit">SAVE</Button>
                                </Box>
                        </Box>
                    </form>
            </Grid>
        );
    }
}

export default HomeScreen;
