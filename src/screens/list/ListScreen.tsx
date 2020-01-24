import React from 'react';
import {View, Image} from 'react-native';

import {profilePic1} from 'static/images';

export default function ListScreen() {
  return (
    <View>
      <Image source={profilePic1} />
    </View>
  );
}
