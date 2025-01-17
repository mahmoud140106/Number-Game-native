import { Text, View,StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function GuessLogItem({roundNumber,guess}){
    return(
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
        </View>
    )
}
export default GuessLogItem;
const styles=StyleSheet.create({
    listItem:{
        borderWidth:1,
        borderColor:Colors.primaryRed800,
        padding:12,
        marginVertical:8,
        borderRadius:40,
        alignItems:'center',
        backgroundColor:Colors.primaryYellow,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.25,
        shadowRadius:3,
    },
    itemText:{
        fontFamily:'open-sans',
    },

})