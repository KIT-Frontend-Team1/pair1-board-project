import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { CustomNextArrow, CustomPrevArrow } from '../style/CustomArrow'

//이미지캐루셀 컴포넌트.OnePost의 하위 컴포넌트. postImg를 받아서 렌더링함.
const SimpleSlider = ({ postImg }) => {
	const settings = {
		dots: true,
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
				{postImg.map((img, index) => {
					return (
						<ImageContainer key={index}>
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
