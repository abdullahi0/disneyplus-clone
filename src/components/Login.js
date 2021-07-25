import React from 'react';
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg"/>
                <SignUp>Sign Up</SignUp>
                <Description>
                    Ultimate streaming destination for Disney, Pixar, Marvel, Star Wars & National Geographic.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png"/>
                    
                
            </CTA>
        </Container>
    )
}

export default Login


const Container = styled.div`
    position:relative;
    display:flex;
    align-items:top;
    justify-content:center;
    
    height: calc(100vh - 70px);
    &:before {
        background-position: top;
        background-size:cover;
        background-repeat:no-repeat;
        position:absolute;
        content:"";
        top:0;
        bottom:0;
        left:0;
        right:0;
        opacity:0.8;
        background-image:url("/images/login-background.jpg");
        z-index:-1;
    }

`;

const CTA =styled.div`
    max-width:650px;
    padding: 80px 40px;
    width:90%;
    display:flex;
    flex-direction:column;
    margin-top:100px;
    align-items:center;
    

`;

const CTALogoOne = styled.img``;
const SignUp = styled.a`
    width:100%;
    background-color: #0063e5;
    font-weight:bold;
    font-size:18px;
    cursor:pointer;
    padding:17px 0;
    color: #f9f9f9;
    border-radius:4px;
    text-align:center;
    transition:all 250ms;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom:12px;
    &:hover{
        background-color: #0483ee;
    }
`;
const Description = styled.div`
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
    margin-bottom:10px;
`;
const CTALogoTwo = styled.img`
    width:90%;
`;