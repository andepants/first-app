import { ScrollView, View, Image, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';

import { images } from '../../constants'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
          <Image source={images.logo} className='w-[115px] h-[35px]' resizeMode='contain' />
            <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Sign Up to Aora</Text>
          <FormField
            title='Username'
            value={form.username}
            handleChangeText={(e : any) => { setForm({...form, username: e})}}
            otherStyles='mt-7'
          />
          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e : any) => { setForm({...form, email: e})}}
            otherStyles='mt-7'
            keyBoardType='email-address'
          />
          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e : any) => { setForm({...form, password: e})}}
            otherStyles='mt-7'
          />
          <CustomButton
            title='Sign In'
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-gray-100 text-lg font-pregular">Have an account already?</Text>
            <Link href='/sign-in' className='text-lg font-psemibold text-secondary'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp