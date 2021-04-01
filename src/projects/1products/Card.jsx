import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import { Avatar, CardMedia, IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

const CCard = (props) => {
    const { avatarUrl, title, subtitle, description, imageUrl } = props;
    return (
        <Card>
            <CardHeader
                avatar={<Avatar src={avatarUrl} />}
                action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
            />
            <CardMedia
                style={{ height: '150px' }}
                image={imageUrl}
            />
            <CardContent>
                <Typography variant="body2" component="p">
                    {description}
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Buy now</Button>
                <Button size="small">Offer</Button>
            </CardActions>
        </Card>
    )
}

export default CCard
