import * as React from 'react';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useState} from "react";


function SevenApp(props) {
    interface ExpandMoreProps extends IconButtonProps {
        expand: boolean;
    }

    const ExpandMore = styled((props: ExpandMoreProps) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const [image,setImage] = useState("../image2/1.jpg");
    const [text,setText] = useState("샌드위치");
    const foodName =['샌드위치', '꼬치구이','육개장','폭찹','그라탕','김치볶음밥','토볶','샌드위치',
        '연근조림','스팸마요볶음','망고빙수','순두부라면'];
    const changePhoto=(e)=>{
        var index = e.target.value;
        setImage("../image2/"+index+".jpg");
        var text = e.target.options[e.target.selectedIndex].text;
        setText(text);

    }

        const [expanded, setExpanded] = React.useState(false);

        const handleExpandClick = () => {
            setExpanded(!expanded);
        };
        return (
            <div className={'map'}>
                <h3 className={'alert alert-info'}>SevenApp mui 실습</h3>
                <Alert severity="success">SevenApp_mui 실습</Alert>
                <Card sx={{maxWidth: 345}}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={image}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {text}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon/>
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon/>
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon/>
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                large plate and set aside, leaving chicken and chorizo in the pan. Add
                                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and
                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                mussels, tucking them down into the rice, and cook again without
                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don&apos;t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
                {/*오늘의 과제*/}

                <div>
                    <h3>좋아하는 음식을 선택하세요</h3>
                    <select className={'photo'} onChange={changePhoto}>
                        <option value="1">샌드위치</option>
                        <option value="2">꼬치구이</option>
                        <option value="3">육개장</option>
                        <option value="4">폭찹</option>
                        <option value="5">그라탕</option>
                        <option value="6">김치볶음밥</option>
                        <option value="7">토볶</option>
                        <option value="8">샌드위치</option>
                        <option value="9">연근조림</option>
                        <option value="10">스팸마요볶음</option>
                        <option value="11">망고빙수</option>
                        <option value="12">순두부라면</option>
                    </select>
                </div>
                <div>
                    <h3>배열 생성후 음식 이미지 선택하기</h3>
                    <select onChange={changePhoto}>
                        {
                            //1~12까지 반복해서 option 제공
                            [
                               [ ...new Array(12)].map((a,index)=>(<option value={index+1}>
                                   {foodName[index]}</option>))
                            ]
                        }
                    </select>
                </div>
            </div>
        );
}

export default SevenApp;