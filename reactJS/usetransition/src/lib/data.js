import { faker } from '@faker-js/faker';

function randomImgName(){
    let result = [];
    let threshHold = 1000;

    for(let i = 0; i < threshHold; i++){
        result.push(
            {   
                id: faker.database.mongodbObjectId(),
                image: faker.image.avatar(),
                name: faker.person.fullName()
            }
        )
    }

    return result;
}

export default randomImgName;