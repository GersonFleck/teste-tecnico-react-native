const api = {   
getPlayers: async (params) => {
    let response;
    try {
      response = await fetch(
        `https://api.balldontlie.io/v1/players?${new URLSearchParams(params)}`,
        {
          headers: {
            'Authorization': '3edfdb7f-9626-4d3b-b65e-bcafda77613b',
            'Content-Type': 'application/json'
          
          },
          cache: 'no-store'
        }
      );
    } catch (err) {
      throw new Error('Network request failed');
    }

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    return response.json();
  }
};

export default api;