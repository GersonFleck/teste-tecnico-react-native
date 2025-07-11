import {TouchableOpacity , Text, StyleSheet } from 'react-native';
const PlayerCard = ({ 
  firstName, 
  lastName, 
  team, 
  onPress, 
  style 
}) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[styles.card, style]}
    >
      <Text style={styles.name}>
        {firstName} {lastName}
      </Text>
      <Text style={styles.team}>Time: {team}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,

  },
  team: {
    fontSize: 14,
    color: '#666',
  },
});
 export default PlayerCard;