import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Review from './Review.js'


import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
          <View style={styles.body}>
              <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>Our Reviews</Text>
              </View>
              <View
                    style={styles.undereline}
                  />
               <Review></Review>
          </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 20,
  },
  sectionContainer: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 50,
    fontWeight: '600',
    color: Colors.black,
    textAlign: "center",
    marginBottom: 40
  
  },
  undereline: {
    borderBottomColor: 'blue',
    borderBottomWidth: 5,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20
  }

});

export default App;
