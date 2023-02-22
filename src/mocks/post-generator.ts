import { faker } from "@faker-js/faker";

export function* postGenerator() {
  let id = 0;
  while (true) {
    yield {
      id: id++,
      handle: faker.internet.userName(),
      avatar: faker.image.imageUrl(75, 75, "people", true),
      image: faker.image.imageUrl(640, 640, "cat", true),
      likes: faker.datatype.number(),
      caption: faker.lorem.sentence(),
    };
  }
}
