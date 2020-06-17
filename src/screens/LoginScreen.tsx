import React, {PureComponent} from 'react';
import {Box, Button, Grid, Typography} from "@material-ui/core";
import createHistory from 'history/createBrowserHistory';



export class LoginScreen extends PureComponent {

    state = {
        username: '',
        password: '',
        error: '',
    };

    render() {
        const history = createHistory();

        const dismissError = () => {
            this.setState({ error: '' });
        }

        const handleSubmit= (event: React.ChangeEvent<HTMLFormElement>) =>  {
            event.preventDefault();

            if (!this.state.username) {
                return this.setState({ error: 'Username is required' });
            }

            if (!this.state.password) {
                return this.setState({ error: 'Password is required' });
            }

            if( this.state.username === 'admin' && this.state.password === 'admin') {
                return(
                    history.push('/home'));
            };

            if (this.state.username === 'user1' && this.state.password === 'user1') {
                return(history.push('/user1'));
            }

            if (this.state.username === 'user2' && this.state.password === 'user2') {
                return(history.push('/user2'));
            }

        }

        const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({
                username: event.target.value,
            });
        };

        const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({
                password: event.target.value,
            });
        }


        return (
            <Grid container direction={'column'} justify={'center'} alignItems={'center'}>
                <Grid item>
                    <Box mt={5}>
                    <Typography >Hi welcome to my project !!!</Typography>
                    <p>
                        <b>Username</b>: admin/ user1/ user2
                    </p>
                    <p>
                        <b>Password</b>: admin/ user1/ user2
                    </p>
                    </Box>
                </Grid>

                <form onSubmit={handleSubmit}>
                    {
                        this.state.error &&
                        <h3 data-test="error" onClick={dismissError}>
                            <button onClick={dismissError}>✖</button>
                            {this.state.error}
                        </h3>
                    }
                    <Box mt={5} mb={3}>
                        <label> <b> User Name</b> :&nbsp; &nbsp;</label>
                        <input type="text" data-test="username" value={this.state.username} onChange={handleUserChange} />
                    </Box>
                    <Box mb={2}>
                        <label><b>Password</b> : &nbsp; &nbsp;&nbsp; </label>
                        <input type="password" data-test="password" value={this.state.password} onChange={handlePassChange} />
                    </Box>
                    <Box ml={15}>
                        <Button
                            type="submit"
                            data-test="submit"
                            >Log In</Button>
                    </Box>
                </form>
            </Grid>
        );
    }
}

