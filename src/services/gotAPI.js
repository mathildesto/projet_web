async function getGotData() {
    const response = await fetch('https://thronesapi.com/api/v2/Characters');
    const data = await response.json();
    return data;
  }

export{getGotData}

