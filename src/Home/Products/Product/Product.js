import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Product = () => {
    return (
        <Grid container >
        <Grid   style={{height:'450px', width:'350px'}} xs={12} md={4}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
              HTML 
            </Typography>
            <Typography style={{textAlign:"justify", color:'white'}} variant="body2" color="text.secondary">
            HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).
             
            </Typography>
           
          </CardContent>
         
        </CardActionArea>
        <div style={{display:"flex",justifyContent:'center', marginTop:'30px'}}>
           <Button variant="contained">Enroll Now</Button>
           </div>
          </Grid>
    <Grid  style={{height:'450px', width:'350px'}} xs={12} md={4}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            JAVASCRIPT 
          </Typography>
          <Typography style={{textAlign:"justify", color:'white'}} variant="body2" color="text.secondary">
          JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.
           
          </Typography>
         
        </CardContent>
        
      </CardActionArea>
         <div style={{display:"flex",justifyContent:'center', marginTop:'50px'}}>
           <Button variant="contained">Enroll Now</Button>
           </div>
        </Grid>
    <Grid style={{height:'450px', width:'350px'}} xs={12} md={4}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.web365ng.com/wp-content/uploads/2020/09/Web-Design-Agency-Nigeria.png"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            WEB DEVELOPMENT
          </Typography>
          <Typography style={{textAlign:"justify", color:'white'}} variant="body2" color="text.secondary">
          Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization.
           
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <div style={{display:"flex",justifyContent:'center', marginTop:'30px'}}>
           <Button variant="contained">Enroll Now</Button>
           </div>
        </Grid>
    <Grid style={{height:'400px', width:'350px'}} xs={12} md={4}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            REACT JS
          </Typography>
          <Typography style={{textAlign:"justify", color:'white'}} variant="body2" color="text.secondary">
          React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
           
          </Typography>
     
        </CardContent>
      </CardActionArea>
      <div style={{display:"flex",justifyContent:'center', marginTop:'30px'}}>
           <Button variant="contained">Enroll Now</Button>
           </div>
        </Grid>
    <Grid style={{height:'400px', width:'350px'}} xs={12} md={4}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://user-images.githubusercontent.com/40702606/111074799-bdfbcf00-84dc-11eb-98c0-d40a99aa0da7.png"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            FULLSTACK WEB-DEVELOPMENT
          </Typography>
          <Typography style={{textAlign:"justify", color:'white'}} variant="body2" color="text.secondary">
          A full stack web developer is a person who can develop both client and server software.
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <div style={{display:"flex",justifyContent:'center', marginTop:'40px'}}>
           <Button variant="contained">Enroll Now</Button>
           </div>
        </Grid>
    </Grid>
        
    );
};

export default Product;