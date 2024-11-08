import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useTheme} from "../ThemeContext.jsx";

export default function MediaCard(
    {cardInfo}
) {
    console.log(cardInfo.title)
    const { isDarkMode, toggleTheme } = useTheme();

    const handleLinkClick = () => {
        // Open the link in a new tab
        window.open(cardInfo.link, '_blank');
    };
    return (
        <Card sx={{ minWidth: '100%',backgroundColor: isDarkMode ? '#2b2b2b' : '#f6f5f5', color: isDarkMode ? '#fff' : '#000' }} key={cardInfo.id}>
            <CardMedia
                sx={{ height: 140 }}
                image ={cardInfo.imgSrc}
                src ={cardInfo.imgSrc}
                title= {cardInfo.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                    {cardInfo.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleLinkClick}>Show credential</Button>
            </CardActions>
        </Card>
    );
}
