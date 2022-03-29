import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';


const Banner = () => {
    return (
        <>
        <section style={{height:'100vh'}} className='d-flex align-items-center'>
    <div className='container-fluid nav_bg'>
            <div className='row'>
                
                <div className='col-10 mx-auto'>
                <div className='row'>
                    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1' style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
                        <h1>Grow your knowledge with <strong style={{fontFamily:'Lobster'}} className='brand-name'>Ed-Tech</strong></h1>
                        <h2 className='my-3'>
                            We are the team of telented developers 
                        </h2>
                        <div className='mt-3' >
                            <Button variant='contained'>
                            <NavLink style={{textDecoration:'none', color:'white'}} to="/signUp">SignUp Now</NavLink>
                            </Button>
                         
                        </div>
                    </div>
                    <div className='col-lg-6 order-1 order-lg-2 header-img'>
                        <img src='https://www.svgrepo.com/show/1699/web-development.svg' className='img-fluid animated' alt="home img" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    );
};

export default Banner;