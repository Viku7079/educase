import React from 'react';
import './login.css';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo512.png";
import facebook from "../../images/facebook.png";
import google from "../../images/google.png";
import twitter from "../../images/twitter.png";

const Login = () => {


    return (


        <div className="login">

            <div className="content">

                <img className='react_logo' src={logo} alt="react_icon" />
                <div className="random_text">
                    <p className='text'>some random text, some random</p>
                    <p className='text'>text, some random text, some random text</p>
                </div>

                <div className="login_signup">
                    <p><NavLink to='/'>login</NavLink></p>
                    <p><NavLink to='/signup'>signup</NavLink></p>
                </div>

                <form className='input_fields' action="">
                    <input type="email" name="email" autoComplete='off' placeholder='Email Address' />
                    <input type="password" name="password" placeholder='Password' />
                    <button className='submit_btn'>login</button>
                    <span className='forgot_pass'>Forgot Password?</span>
                </form>

                <p className='login_with'>or login with</p>

                <div className="emoji">
                    <img className='icons google' src={google} alt="" />
                    <img className='icons twitter' src={twitter} alt="" />
                    <img className='icons facbook' src={facebook} alt="" />
                </div>

                

                <p className='have_account'>Don't have an account? <span >Create new now!</span></p>
                <p className='term_conditions'>By signing up, you're agree with our <span > Terms & Conditions</span></p>

            </div>

        </div>
    )
}

export default Login