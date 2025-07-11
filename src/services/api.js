
const api = {
  getPlayers: async (params) => {
    const response = await fetch(`https://api.balldontlie.io/v1/players?${new URLSearchParams(params)}`, {
      headers: {
        'Authorization': '3edfdb7f-9626-4d3b-b65e-bcafda77613b',
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  }
};

// Verificação
console.log('API configurada com sucesso');
export default api;