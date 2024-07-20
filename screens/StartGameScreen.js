import { StyleSheet, TextInput, View,Alert ,Text,Dimensions,useWindowDimensions,ScrollView,KeyboardAvoidingView} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colors from '../constants/Colors';
import Title from '../components/ui/Title';
import Card from './../components/ui/Card';
import InstructionText from './../components/ui/instructionText';
function StartGameScreen({onPickNumber}){
    const {width,height}=useWindowDimensions();
    marginTopDistance = height < 380 ? 30 : 100 ;


    const[enteredNumber,setEnteredNumber]=useState('')

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber('')
    }

    function confirmInputHandler(){
        const chosenNumber=parseInt(enteredNumber);
        if(isNaN(chosenNumber)|| chosenNumber<=0 ||chosenNumber>99){
            Alert.alert(
                'Invalid Number' ,
                'Number Has To Be Between 1 And 99.',
                [{text:'Okay',style:'destructive',onPress:resetInputHandler}]
                )
        }
        // console.log('Valid number');
        onPickNumber(chosenNumber);
    }
    return(
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.rootContainer,{marginTop:marginTopDistance}]}>
        <Title>Guess My Number</Title>
        <Card>
        <InstructionText>Enter a Number</InstructionText>
            <TextInput 
            style={styles.numberInput} 
            maxLength={2} 
            keyboardType='number-pad' 
            autoCapitalize='none'
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer} >
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen;

// const deviceHeight=Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen:{
        flex:1
    },
    rootContainer:{
        flex:1,
        // marginTop:deviceHeight <380 ? 30 :10,
        alignItems:'center'
    },
    numberInput:{
      height:50,
      width:50,
      fontSize:32,
      borderBottomColor:Colors.primaryYellow,
      borderBottomWidth:2,
      color:Colors.primaryYellow,
      marginVertical:8,
      fontWeight:'bold',
      textAlign:'center',
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    },
  });
  