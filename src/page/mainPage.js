import styled from 'styled-components'
import { useState } from 'react'
import Layout from '../components/Layout'
import Paging from './components/Pagination'
import AddModal from '../components/AddModal'
import { DATA } from '../data/faker'


//mainpage
const MainPage = () => {
	//addModal이 보이면 true, 아니면 false
	const [isModalOpen, setIsModalOpen] = useState(false)
	//data : post로 뿌려줄 데이터. 초기 데이터는 faker에서 가져온 DATA.
	const [data, setData] = useState(DATA)
	

	//onAddPost : 포스트를 추가해주는 함수. 새로운 newPost객체를 생성하여 setData를
	//이용해 기존 data에 추가해 준다. AddModal에 props로 전달해준다.
	const onAddPost = (Text) => {
		const newPost = {
			id: Math.floor(Math.random() * 10000),
			user: {
				id: 123456,
				name: 'me',
			},
			content: Text,
			postImg: [],
			comment: [],
			myPost: true,
		}
		setData([newPost, ...data]);
	  };

	  const onDelete = (id) => {
		const _data = [...data];
		if (window.confirm("정말 삭제하시겠습니까?")) {
			// console.log('_data',_data)
		  const newdata = _data.filter((post) => post.id !== id);
		//   console.log('newdata', newdata)
		  return setData(newdata);
		}
		// console.log('start',data)
	  };

	  const onUpdate = (id, content) => {
		const _data = [...data];
		const targetData = data.find((post) => post.id === id);
		targetData.content = content;
		return setData(_data);
	  };

	  


	//   const _todoList = [...todoList];
	//   if (window.confirm("정말 삭세하시겠습니까?")) {
	// 	const newTodoList = _todoList.filter((todo) => todo.id !== id);
	// 	setTodoList(newTodoList);
	//   }
	// };
	

	return (
		<Wrapper>
			{isModalOpen && (
				<AddModal
					onAddPost={onAddPost}
					setIsModalOpen={setIsModalOpen}
					isModalOpen={isModalOpen}
				/>
			)}
			<Layout setIsModalOpen={setIsModalOpen}>
				<Paging 
					data={data} 
					onDelete={onDelete}
					onUpdate={onUpdate}
					/>
			</Layout>
		</Wrapper>
	)
}

export default MainPage
const Wrapper = styled.div``
