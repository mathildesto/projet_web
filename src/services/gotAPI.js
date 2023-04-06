// function getGotData(){
//     return[
//         {
//     "id": 0,
//     "firstName": "Daenerys",
//     "lastName": "Targaryen",
//     "fullName": "Daenerys Targaryen",
//     "title": "Mother of Dragons",
//     "family": "House Targaryen",
//     "image": "daenerys.jpg",
//     "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg"
// },
// {
//     "id": 4,
//     "firstName": "Sansa",
//     "lastName": "Stark",
//     "fullName": "Sansa Stark",
//     "title": "Lady of Winterfell",
//     "family": "House Stark",
//     "image": "sansa-stark.jpeg",
//     "imageUrl": "https://thronesapi.com/assets/images/sansa-stark.jpeg"
// },
//     ]
// }

// https://gameofthronesquotes.xyz/ ou https://thronesapi.com/

async function getGotData() {
    const response = await fetch('https://thronesapi.com/api/v2/Characters');
    const data = await response.json();
    return data;
  }

export{getGotData}

