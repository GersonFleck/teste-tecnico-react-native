import React, {useState, useEffect} from 'react'

import { View, Text, FlatList, StyleSheet } from 'react-native'

import api from '@services/api'

import PlayerCard from '../../components/playerCard';

import Header from '../../components/header';

import Footer from '../../components/footer'

const PlayersScreen = () => {

 const [selectedPlayer, setSelectedPlayer] = useState(null);

const [players, setPlayers] = useState([]);

const [loading, setLoading] = useState(true);

useEffect(() => {
    console.log('Jogador selecionado ATUALIZADO:', selectedPlayer);
  }, [selectedPlayer]);

useEffect(() =>{
 
 console.log('Instância da API no componente:', api)
 
const findPlayers = async () => {
  try {
    const response = await api.getPlayers({ 
      per_page: 20 
    });

    setPlayers(response.data || []);
    
  } catch (error) {
    console.error('Erro na requisição:', {
      message: error.message,
      response: error.response?.data
    });
    setPlayers([]); 
  } finally {
    setLoading(false);
  }
};
 findPlayers();


}, []);

 if (loading) {
    return (
      <View style={styles.container}>   
        <Text>Carregando jogadores...</Text>
      </View>
    );

  }
  
    const renderHeader = () => (
    <Header 
      selectedPlayer={selectedPlayer}
       key={selectedPlayer?.id || 'empty'}
      onPlayerPress={() => console.log('Jogador pressionado')} 
    />
  );
    return (
        
         <View style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={
        <View style={{ paddingHorizontal: 0 }}>
          {renderHeader()}
        </View>
         }
        contentContainerStyle={{ paddingBottom: 30, }} 
        data={players}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
         
          <PlayerCard 
            firstName={item.first_name}
            lastName={item.last_name}
            team={item.team?.full_name || 'N/A'}
            onPress={() => {
        console.log('Clicou no jogador:', item); 
        setSelectedPlayer(item);
        
      }}
          />
          
        )}
      />
      <View>
      <Footer />
    </View>
    </View>
     
     
      
);
  
  ;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#696969',
  }
});


export default PlayersScreen;