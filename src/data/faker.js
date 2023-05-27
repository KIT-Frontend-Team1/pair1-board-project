const { faker } = require('@faker-js/faker')

//MockPost 만들기

//MockPost(count) : count값에 따라 post의 양을 정할 수 있다.
//한 포스트당 있는 내용
// User[글쓴이]의 정보(아이디, 이름, 글제목, 글내용)
// 포스트 이미지(2 ~4 개 랜덤)
// 댓글 (1~5개 랜덤)
// 각 댓글마다 User의 정보(아이디, 이름), myComment여부, 글내용 있음

//
//게시물 객체를 만드는 함수
const MockPost = count => {
	return Array(count)
		.fill()
		.map(() => ({
			id: Math.floor(Math.random() * 10000),
			User: {
				id: faker.string.alphanumeric(6),
				name: faker.internet.userName(),
			},
			title: faker.lorem.sentence(),
			content: faker.lorem.sentence(),
			//2와 4 사이의 랜덤한 이미지 값을 반환
			PostImg: Array(Math.floor(Math.random() * 3 + 2))
				.fill()
				.map(() => faker.image.url()), //nature. animal. city url 기본
			Comments: Array(Math.floor(Math.random() * 10 + 1))
				.fill()
				.map(() => {
					return {
						User: {
							id: faker.string.alphanumeric(6),
							name: faker.internet.userName(),
						},
						myComment: false,
						content: faker.lorem.sentence(),
					}
				}),
		}))
}

export const DATA = MockPost(30)
