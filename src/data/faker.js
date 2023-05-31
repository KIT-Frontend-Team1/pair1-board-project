const { faker } = require('@faker-js/faker')

//MockPost : 인자로 받은 count만큼의 post 객체를 만들어서 넘겨주는 함수
const MockPost = count => {
	return Array(count)
		.fill()
		.map(() => ({
			id: Math.floor(Math.random() * 10000),
			user: {
				id: faker.string.alphanumeric(6),
				name: faker.internet.userName(),
			},
			myPost: false,
			// title: faker.lorem.sentence(),
			content: faker.lorem.sentence(),
			//2와 4 사이의 랜덤한 이미지 값을 반환
			postImg: Array(Math.floor(Math.random() * 3 + 2))
				.fill()
				.map(() => faker.image.url()), //nature. animal. city url 기본
			comments: Array(Math.floor(Math.random() * 10 + 1))
				.fill()
				.map(() => {
					return {
						user: {
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
