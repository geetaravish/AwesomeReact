import React from 'react';
import { TouchableOpacity, View, Button, StyleSheet } from 'react-native';
import ReviewList from './ReviewList.js'


const Review = () => {
  return (
    <>
    <View style={styles.container}>
        <View style={styles.btnContainer}>
             <TouchableOpacity>
                <Button 
                    style={styles.prevNextBtn}
                    onPress = {handlePress}
                    title="Prev"/>
               </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
            <TouchableOpacity>
                <Button 
                    style={styles.prevNextBtn}
                    onPress = {handlePress}
                    title="Next"/>
               </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
        <TouchableOpacity>
                <Button 
                    style={styles.randomBtn}
                    color="#841584"
                    onPress = {handlePress}
                    title="Suprise me"/>
               </TouchableOpacity>
        </View>
         <ReviewList></ReviewList> 
    </View>
    </> 
  )
}


const handlePress = () => false

const styles = StyleSheet.create({
  container: {
   display: "flex",
  },
  btnContainer: {
    margin: 10,
    flexDirection:  'column'
  },
  prevNextBtn: {
    color: "blue",
    fontSize: 15,
    width: 200, 
    height: 100
  },
  randomBtn: {
    color: "#778899",
    textTransform: "capitalize",
    borderRadius: 10,
    alignContent: 'center',
    width: 200, 
    height: 100
  }
});

export default Review;