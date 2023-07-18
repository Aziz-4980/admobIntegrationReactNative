import React from 'react';
import {SafeAreaView, FlatList, View, Text, StyleSheet} from 'react-native';
import {
  GAMBannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';
import {fakeData} from './fakeData';

const Card = ({name, address}: any) => (
  <View style={styles.card}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.address}>{address}</Text>
  </View>
);
const AdCard = () => (
  <View style={styles.adStyle}>
    <GAMBannerAd
      unitId={TestIds.GAM_BANNER} //test ad id can be replaced with the actual id
      sizes={[BannerAdSize.MEDIUM_RECTANGLE]}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  </View>
);
const App = () => {
  // const adUnitId = 'ca-app-pub-2230858590016652/9975408115'; //actual ad id

  // Function to render each item (card or ad)
  const renderItem = ({item, index}: any) => {
    if ((index + 1) % 8 === 0) {
      // If the index is a multiple of 8 (every 7 cards), render the ad
      return <AdCard />;
    } else {
      // Otherwise, render the card with data
      return <Card name={item.name} address={item.address} />;
    }
  };

  return (
    <SafeAreaView>
      <View style={{padding: 16}}>
        <FlatList
          data={fakeData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()} // Add this keyExtractor
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 80,
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
    color: '#888',
  },
  adStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
