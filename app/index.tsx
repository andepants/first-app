import { Text, View } from "react-native";
import { Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, Image } from 'react-native';
import CustomButton from '../components/CustomButton';

import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full items-center justify-center min-h-[85vh] px-4'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className='w-max-[380px] w-full h-[300px]'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
           <Text className="text-3xl text-white font-bold text-center">
            Generate Videos with {' '}
            <Text className="text-secondary-200 font-bold">Aora</Text>
           </Text>
           <Image
             source={images.path}
             className={'w-[115px] h-[15px] absolute -bottom-2 right-24'}
             resizeMode='contain'
           />
          </View>
           <CustomButton
             title='Continue with Email'
             handlePress={() => router.push('/sign-in')}
             containerStyles='w-full mt-7'
           />
        </View>
        <StatusBar backgroundColor="#161622" style='light'/>
      </ScrollView>
    </SafeAreaView>
  );
}
