import React, { useState } from 'react'
import styled from 'styled-components'
import Pagination from 'react-js-pagination'
import PostList from './PostList'

//Paging : 페이지네이션. mainPage에서 데이터를 받아와 현재 페이지에 해당하는
//데이터를 잘라서 렌더링한다.
//해당 페이지의 포스트와 버튼 컨테이너가 있음.
const Paging = ({ data }) => {
	//currentPage: 현재 페이지
	const [currentPage, setCurrentPage] = useState(1)
	const postPerPage = 3
	const pageNumber = Math.ceil(data.length / postPerPage)

	//currentPageData: 현재 페이지의 해당하는 데이터. 이것을 PostList로
	//넘겨서 렌더링 합니다.
	const currentPageData = data.slice(
		(currentPage - 1) * postPerPage,
		(currentPage - 1) * postPerPage + postPerPage,
	)

	const handlePageChange = page => {
		setCurrentPage(page)
	}

	return (
		<Wrapper>
			{/*현재페이지의 데이터를 넘겨줌*/}
			<PostList currentPageData={currentPageData} />
			<PaginationBox>
				<Pagination
					activePage={currentPage} // 현재 페이지
					itemsCountPerPage={postPerPage} // 한 페이지랑 보여줄 아이템 갯수
					totalItemsCount={data.length} // 총 아이템 갯수
					pageRangeDisplayed={pageNumber} // paginator의 페이지 범위
					prevPageText={'‹'} // "이전"을 나타낼 텍스트
					nextPageText={'›'} // "다음"을 나타낼 텍스트
					onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
				/>
			</PaginationBox>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	position: relative;
`
const PaginationBox = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;

	.pagination {
		display: flex;
		justify-content: center;
		margin-top: 15px;
	}
	ul {
		list-style: none;
		padding: 0;
	}
	ul.pagination li {
		display: inline-block;
		width: 30px;
		height: 30px;
		border: 1px solid #e2e2e2;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1rem;
	}
	ul.pagination li:first-child {
		border-radius: 5px 0 0 5px;
	}
	ul.pagination li:last-child {
		border-radius: 0 5px 5px 0;
	}
	ul.pagination li a {
		text-decoration: none;
		color: #337ab7;
		font-size: 1rem;
	}
	ul.pagination li.active a {
		color: white;
	}
	ul.pagination li.active {
		background-color: #337ab7;
	}
	ul.pagination li a:hover,
	ul.pagination li a.active {
		color: blue;
	}
`

export default Paging
