import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

const styles = {
    card: {
        maxWidth: 300,
    },
    media: {
        height: 200,
    },
};

const MyComponent = (props) => {
    const classes = props.classes;

    return (
        <Grid container spacing={24} justify="center">
            <Grid item>
                <Card className={classes.card}>
                    <CardMedia className={classes.media}
                               image="https://pbs.twimg.com/profile_images/515584149478862849/ZGLNvkDd_400x400.png"
                    />
                    <CardContent>
                        <Typography type="headline" component="h2">
                            Flight
                        </Typography>
                        <Typography component="p">
                            The fastest way to move large files into and out of cloud object storage.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button dense>Learn More</Button>
                        <Button dense>Conact Sales</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Card className={classes.card}>
                    <CardMedia className={classes.media}
                               image="https://pbs.twimg.com/profile_images/515584149478862849/ZGLNvkDd_400x400.png"
                    />
                    <CardContent>
                        <Typography type="headline" component="h2">
                            Media Shuttle
                        </Typography>
                        <Typography component="p">
                            The easiest and most reliable way to send any size file, anywhere, fast.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button dense>Learn More</Button>
                        <Button dense>Conact Sales</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Card className={classes.card}>
                    <CardMedia className={classes.media}
                               image="https://pbs.twimg.com/profile_images/515584149478862849/ZGLNvkDd_400x400.png"
                    />
                    <CardContent>
                        <Typography type="headline" component="h2">
                            Managers+Agents
                        </Typography>
                        <Typography component="p">
                            Automated system-to-system file movement across your enterprise.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button dense>Learn More</Button>
                        <Button dense>Conact Sales</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
};

MyComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyComponent);
