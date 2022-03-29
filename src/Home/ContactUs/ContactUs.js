import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h4 style={{textAlign:'center'}}>Fell Free To Contact Us</h4>
            <div style={{display:'flex', justifyContent:'center'}}>
            <form action="" style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
                <input type="text" required placeholder='Your name' />
                <input type="email" required placeholder='Email' name="" id="" />
                <textarea required name="" id="" cols="30" placeholder='Description' rows="10"></textarea>
                <button> Submit</button>
            </form>
            </div>
        </div>
    );
};

export default ContactUs;