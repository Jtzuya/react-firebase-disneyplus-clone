import styled from 'styled-components';

const Login = (props) => {
    return ( 
       <Container>
           <Content>
               <CTA>
                   <CTALogoOne src="./images/cta-logo-one.svg" />
                   <SignUp>Get it all there</SignUp>
                   <Description>
                   Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                   </Description>
                   <CTALogoTwo src="./images/cta-logo-two.png" />
               </CTA>
               <BgImage />
           </Content>
       </Container>
     );
}

const Container = styled.section`
    overflow:hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh
    `;

const Content = styled.div`
    margin-bottom: 10vh;
    width: 100%;
    position: relative;
    text-align: center;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
    `;

const BgImage = styled.div`
    background: url("./images/login-background.jpg");
    height: 100%;
    width: 100%;
    background-position: top;
    position: absolute;
    background-repeat: no-repeat;
    z-index: -1;
    background-size: cover;
    `;
 
const CTA = styled.div`
   max-width: 650px;
   width: 100%;
   display: flex;
   flex-direction: column;
   margin: 0 auto;
   align-items: center;
`;

const CTALogoOne = styled.img`
   margin-bottom: 12px;
   max-width: 600px;
   min-height: 1px;
   display: block;
   width: 100%;
`;

const SignUp = styled.a`
    text-transform: uppercase;
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    width: 100%;
    max-width: 600px;
    padding: 1.05rem 0;
    border-radius: 0.2rem;
    letter-spacing: 0.105rem;
    font-size: 1.1rem;
    border: 1px solid transparent;
    opacity: 1;
    transition: all 0.5s ease;
    cursor: pointer;
    margin-bottom: 8px;

    &:hover {
        background-color: #0483ee;
        transform: scale(1.05);
        box-shadow: 0 2px 10px #0063e5;
    }
`;

const Description = styled.p`
    max-width: 600px;
    font-size: 11px;
    color: hsla(0, 01, 95.31, 1);
    margin-bottom: 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    width: 100%;
    margin-bottom: 1.4rem;
`;

export default Login;