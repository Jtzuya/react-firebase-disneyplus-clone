import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImgSlider = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return ( 
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src="./images/slider-badging.jpg" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="./images/slider-badag.jpg" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="./images/slider-scale.jpg" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="./images/slider-scales.jpg" />
                </a>
            </Wrap>
        </Carousel>
     );
}
 
const Carousel = styled(Slider)`
    margin-top: 20px;
    

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover {
            opacity: 0.6;
            transition: opacity 0.4s ease;
        }
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(158, 151, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: initial;      /* shows the prev and next button */
    }

    .slick-prev {
        left: -60px;
    }

    .slick-next {
        right: -60px;
    }
`;

const Wrap = styled.div`
    border-radius: 0.2rem;
    cursor: pointer;
    position: relative;

    a {
        border-radius: 0.2rem;
        box-shadow: rgb(0, 0, 0, 0.69) 0 26px 30px -10px, 
                    rgba(0, 0, 0, 0.73) 0 16px 10px -10px;
        display: block;
        /* position: relative; */
        padding: 4px;

        img {
            width: 100%;
            height: 100%;
            transition: all 0.3s ease;

            &:hover {
                box-shadow: 0 2px 10px #0063e5;
                transform: scale(1.001);
            }
        }
    }
`;

export default ImgSlider;