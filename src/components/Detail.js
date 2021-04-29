import styled from 'styled-components';

/* used to pull the data from firebase */
import { useEffect, useState } from 'react';    
import { useParams } from 'react-router-dom';   /* useful for writing url of each movie dynamically */
import db from '../firebase';                   /* access to our database where we will get those data we're pulling */
/* end of pull request */

const Detail = (props) => {


    const { id } = useParams();

    const [ detailData, setDetailData ] = useState({});

    useEffect(() => {
        db.collection('movies').doc(id).get().then((doc) => {
                if (doc.exists){
                    setDetailData(doc.data());
                } else {
                    console.log('no such data exist in firebase');
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
    }, [id]);


    return ( 
        <Container>
           <Background>
                <img src={detailData.backgroundImg} alt={detailData.title} />
           </Background>

           <ImageTitle>
               <img src={detailData.titleImg} alt={detailData.title} />
           </ImageTitle>

           <ContentMeta>
              <Controls>
                  <Player>
                      <img src="./images/play-icon-black.png" alt=""/>
                      <span>Play</span>
                  </Player>

                  <Trailer>
                      <img src="./images/play-icon-white.png" alt=""/>
                      <span>Trailer</span>
                  </Trailer>

                  <AddList>
                      <span />
                      <span />
                  </AddList>

                  <GroupWatch>
                      <div>
                          <img src="./images/group-icon.png" alt=""/>
                      </div>
                  </GroupWatch>
              </Controls>

              <SubTitle>{detailData.subTitle}</SubTitle>

              <Description>{detailData.description}</Description>
           </ContentMeta>
        </Container>
     );
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    left: 0;
    opacity: 0.7;
    position: fixed;
    top: 0;
    right: 0;
    z-index: -1;

    img {
        width: 100vw;
        height: 100vh;
        
        @media (max-width: 768px) {
            width: initial;
        }
    }

`;    

const ImageTitle = styled.div`
    display: flex;
    align-items: flex-end;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0 auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    img {
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`;

const ContentMeta = styled.div`
    max-width: 874px;
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin: 24px 0;
    min-height: 56px;
`;
 
const Player = styled.button`
    display: flex;
    font-size: 15px;
    margin: 0 22px 0 0;
    padding: 0 24px;
    height: 56px;
    border-radius: 4px;
    border: none;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    letter-spacing: 0.1px;
    text-align: center;
    text-transform: uppercase;
    background: rgb(249, 249, 249);
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
    transition: all 0.3s ease;

    img {
        width: 32px;
    }

    &:hover {
        background-color: rgba(249, 249, 249, 0.8);
    }

    @media (max-width: 768px) {
        height: 45px;
        padding: 12px;
        margin-right: 10px;

        img {
            width: 25px;
        }
    }
`;

const Trailer = styled(Player)`
    border: 1px solid rgba(249, 249, 249, 0.8);
    color: rgba(249, 249, 249, 0.8);
    background: rgba(0, 0, 0, 0.4);
`;

const AddList = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    justify-content: center;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;

    span {                  /* creates the + icon */
        background-color: rgba(249, 249, 249, 0.9);
        display: inline-block;

        &:first-child {     /* creates the line horizontal line */
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
        }

        &:nth-child(2) {   /* create the vertical line */
            height: 16px;
            transform: translate(-8px) rotate(0deg);
            width: 2px
        }
    }
`;

const GroupWatch = styled(AddList)`
    height: 44px;
`;

const SubTitle = styled.div`
    color: rgba(249, 249, 249, 0.8);
    font-size: 15px;
    min-height: 20px;

    @media(max-width: 768) {
        font-size: 12px;
    }
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0;
    color: rgba(249, 249, 249, 0.9);

    @media(max-width: 768px) {
        font-size: 14px;
    }
`;
export default Detail;