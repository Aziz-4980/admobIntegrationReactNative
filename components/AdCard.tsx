import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  BannerAdSize,
  GAMBannerAd,
  TestIds,
} from 'react-native-google-mobile-ads';

export const AdCard: React.FC = React.memo(() => (
  <View style={styles.adStyle}>
    <GAMBannerAd
      unitId={TestIds.GAM_BANNER} // test ad id can be replaced with the actual id
      sizes={[BannerAdSize.MEDIUM_RECTANGLE]}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  </View>
));
const styles = StyleSheet.create({
  adStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
