import { StyleSheet, Text, View,Pressable } from 'react-native';
import Colors from '../../constants/Colors';
function PrimaryButton({children,onPress}){
    // function pressHandler(){
    //     console.log('pressed!');
    // }
    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable
             style={ ({pressed}) =>
                pressed
                ?[styles.buttonInnerContainer,styles.pressed] 
                :styles.buttonInnerContainer
                } 
             onPress={onPress} 
             android_ripple={{color:Colors.primaryRed500}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}
export default PrimaryButton;

const styles=StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden',
    },
    buttonInnerContainer:{
        backgroundColor:Colors.primaryRed600,
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,
    },
    buttonText:{
        textAlign:'center',
        color:'white',
    },
    pressed:{
        opacity:0.75,
    },
})
