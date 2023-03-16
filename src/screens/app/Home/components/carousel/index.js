import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import styles from './styles';
const dataSource = [
  {
    url: 'https://f.nooncdn.com/mpcms/EN0001/assets/a6a75351-3d7f-4572-b61c-35076efa879e.png',
  },
  {
    url: 'https://f.nooncdn.com/mpcms/EN0001/assets/cd46307a-fbad-4209-bfcb-e1b5c8ace63a.png',
  },
  {
    url: 'https://f.nooncdn.com/mpcms/EN0001/assets/a06262dc-be44-494b-b435-ba66efe72fe5.png',
  },
  {
    url: 'https://f.nooncdn.com/mpcms/EN0001/assets/a82a80fa-09e9-4d89-a7c8-85640fc9f5e7.jpg',
  },
  {
    url: 'https://f.nooncdn.com/mpcms/EN0001/assets/5d5a2e86-c2ff-40ac-97cf-6ec4f51546ae.png',
  },
];
const Carousel = ({navigation}) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition(position === dataSource.length - 1 ? 0 : position + 1);
    }, 3000);

    return () => clearInterval(toggle);
  });

  return (
    <View  >
      <Slideshow  height={140} position={position} dataSource={dataSource} />
    </View>
  );
};

export default React.memo(Carousel);
