import React,{useState}from "react";
import { View , Text , Image ,StyleSheet, Dimensions} from "react-native";

const { width, height } = Dimensions.get("window");
function Header({ selectedPlayer, onPlayerPress }) {

    console.log("Header recebeu:", selectedPlayer);

    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>NBA Statts</Text>
      </View>

      <View style={styles.playerHighlight}>
        <Text style={styles.subtitle}>Jogador em Destaque</Text>
        
        {selectedPlayer ? (
          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>
              {selectedPlayer.first_name} {selectedPlayer.last_name}
            </Text>
            
            <Text style={styles.playerDetail}>
              <Text style={styles.detailLabel}>Posição: </Text>
              {selectedPlayer.position || 'N/A'}
            </Text>
            <Text style={styles.playerDetail}>
              <Text style={styles.detailLabel}>Altura: </Text>
              {selectedPlayer.height || 'N/A'}
            </Text>
            <Text style={styles.playerDetail}>
              <Text style={styles.detailLabel}>Faculdade: </Text>
              {selectedPlayer.college || 'N/A'}
            </Text>
           
            <Text style={styles.playerDetail}>
              <Text style={styles.detailLabel}>País: </Text>
              {selectedPlayer.country || 'N/A'}
            </Text>
            <Text style={styles.playerDetail}>
              <Text style={styles.detailLabel}>Numero da Camiseta: </Text>
              {selectedPlayer.jersey_number || 'N/A'}
            </Text>
          </View>
        ) : (
          <Text style={styles.noPlayerText}>Nenhum jogador selecionado</Text>
        )}
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9E9E9E",
    paddingTop: 20,
    marginHorizontal: 0,
    marginBottom: 20,
    width: Dimensions.get('window').width,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#616161",
     marginHorizontal: 0,
    width:'100%',
  },
  logo: {
    width: width * 0.1,
    height: width * 0.1,
    marginRight: 10,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  subtitle: {
    fontSize: width * 0.05,
    marginBottom: 20,
    fontWeight: "600",
    color: "#333",
  },
  playerCard: {
    width: width * 0.9,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15,
  },
  playerImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 50,
  },
  playerInfo: {
    marginLeft: 15,
    flex: 1,
  },
  playerName: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    color: "#222",
  },
  playerStats: {
    fontSize: width * 0.035,
    color: "#555",
    marginTop: 3,
  },
  noPlayerText: {
    fontSize: width * 0.04,
    color: "#333",
    fontStyle: "italic",
  },
});
export default Header;
