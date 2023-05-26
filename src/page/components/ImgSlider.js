import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { CustomNextArrow, CustomPrevArrow } from './CustomArrow'
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const SimpleSlider = ({ ImgArr }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <CustomNextArrow />,
		prevArrow: <CustomPrevArrow />,
	}
	return (
		<Wrapper>
			<Slider {...settings}>
				{ImgArr.map(img => {
					return (
						<ImageContainer>
							<Img src={`${img}`} />
						</ImageContainer>
					)
				})}
			</Slider>
		</Wrapper>
	)
}

export default SimpleSlider
const ImageContainer = styled.div`
	width: 300px;
	height: 500px;
	background-color: skyblue;
`

const Img = styled.img`
	background-color: #444;
	width: 100%;
	height: 100%;
`
const Wrapper = styled.div`
	width: 500px;
	height: 500px;
	background-color: grey;
`

const Div = styled.div`
	/* width: 50px;
  height: 50px;
  position: absolute;
  right: 30px;
  z-index: 99;
  text-align: right;
  line-height: 30px; */
`

const Icon = styled.div`
	width: 30px;
	height: 50px;
`