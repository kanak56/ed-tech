
import React from 'react';
import './Reviews.css';
import img from './../../Asset/man.png';

const Review = () => {
    return (
        /* Testimonials */
        <section id="testimonials">
            <div className='testimonial-heading'>
                <span>Comments</span>
                <h1>Clients Reviews</h1>
            </div>
            {/* Testimonials-box-container */}

            <div className='testimonial-box-container'>
                {/* box 1 */}
                <div className='testimonial-box'>
                    {/* Top */}
                    <div className='box-top'>
                        {/* profile */}
                        <div className='profile'>
                            {/* img */}
                            <div className='profile-img'>
                                <img src={img} alt=''/>
                            </div>
                            {/* name and username */}
                            <div className='name-user'>
                                <strong>Rafiq Islam</strong>
                                <span>@rafiqislamweb</span>
                            </div>
                        </div>
                        {/* reviews */}
                        <div className='reviews'>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        </div>
                    </div>

                    {/* Comments */}

                    <div className='client-comment'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti explicabo aliquid alias impedit eaque sequi beatae voluptatibus omnis velit saepe at, ipsa maxime et asperiores nam reprehenderit praesentium laborum?</p>
                    </div>
                </div>
                {/* box 2 */}
                <div className='testimonial-box'>
                    {/* Top */}
                    <div className='box-top'>
                        {/* profile */}
                        <div className='profile'>
                            {/* img */}
                            <div className='profile-img'>
                                <img src={img} alt=''/>
                            </div>
                            {/* name and username */}
                            <div className='name-user'>
                                <strong>Ismail Hosain</strong>
                                <span>@ismailweb</span>
                            </div>
                        </div>
                        {/* reviews */}
                        <div className='reviews'>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        </div>
                    </div>

                    {/* Comments */}

                    <div className='client-comment'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti explicabo aliquid alias impedit eaque sequi beatae voluptatibus omnis velit saepe at, ipsa maxime et asperiores nam reprehenderit praesentium laborum?</p>
                    </div>
                </div>
                {/* box 3 */}
                <div className='testimonial-box'>
                    {/* Top */}
                    <div className='box-top'>
                        {/* profile */}
                        <div className='profile'>
                            {/* img */}
                            <div className='profile-img'>
                                <img src={img} alt=''/>
                            </div>
                            {/* name and username */}
                            <div className='name-user'>
                                <strong>Rana </strong>
                                <span>@rana123mweb</span>
                            </div>
                        </div>
                        {/* reviews */}
                        <div className='reviews'>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        </div>
                    </div>

                    {/* Comments */}

                    <div className='client-comment'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti explicabo aliquid alias impedit eaque sequi beatae voluptatibus omnis velit saepe at, ipsa maxime et asperiores nam reprehenderit praesentium laborum?</p>
                    </div>
                </div>
                {/* box 3 */}
                <div className='testimonial-box'>
                    {/* Top */}
                    <div className='box-top'>
                        {/* profile */}
                        <div className='profile'>
                            {/* img */}
                            <div className='profile-img'>
                                <img src={img} alt=''/>
                            </div>
                            {/* name and username */}
                            <div className='name-user'>
                                <strong>Rupa</strong>
                                <span>@Rupaweb</span>
                            </div>
                        </div>
                        {/* reviews */}
                        <div className='reviews'>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        </div>
                    </div>

                    {/* Comments */}

                    <div className='client-comment'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti explicabo aliquid alias impedit eaque sequi beatae voluptatibus omnis velit saepe at, ipsa maxime et asperiores nam reprehenderit praesentium laborum?</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;