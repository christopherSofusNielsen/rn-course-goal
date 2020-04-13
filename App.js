import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView} from 'react-native';

export default function App() {

	const [enteredGoal, setEnteredGoal]=useState('')
	const [courseGoals, setCourseGoals]=useState([])
  
	const goalInputHandler=(enteredText)=>{
		setEnteredGoal(enteredText);
	};

	const addGoalHandler=()=>{
		setCourseGoals([...courseGoals, enteredGoal])
	}

  	return (
		<View style={styles.container}>
			<View style={styles.inputBox}>
				<TextInput 
					placeholder="Course goal" 
					style={styles.textInput} 
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<Button 
					title="Add"
					onPress={addGoalHandler}
				/>
			</View>

			<ScrollView style={{overflow:'scroll'}}>
	  			{courseGoals.map((goal, index)=>(
				  	<View key={index} style={styles.listItem}>
						<Text>{goal}</Text>
					</View>
				))}
			</ScrollView>
    
    	</View>
  	);
}

const styles = StyleSheet.create({
	container:{
		padding: 15,
		paddingTop:40,
		flex:1
	},
	textInput:{
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		width: '80%'
	},
	inputBox:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	listItem:{
		padding:10,
		marginTop:10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth:1
	}
});
