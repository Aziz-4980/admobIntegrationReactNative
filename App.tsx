import React from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import {fakeData} from './fakeData';
import {Card, CardProps} from './components/Card';
import {AdCard} from './components/AdCard';

const App: React.FC = () => {
  // Function to render each item (card or ad)
  const renderItem = ({item, index}: {item: CardProps; index: number}) => {
    if ((index + 1) % 8 === 0) {
      // If the index is a multiple of 8 (every 7 cards), render the ad
      return <AdCard key={`ad-${index}`} />;
    } else {
      // Otherwise, render the card with data
      return (
        <Card key={`card-${index}`} name={item.name} address={item.address} />
      );
    }
  };

  return (
    <SafeAreaView>
      <View style={{padding: 16}}>
        <FlatList
          data={fakeData}
          renderItem={renderItem}
          keyExtractor={(_, index) => `item-${index}`}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
