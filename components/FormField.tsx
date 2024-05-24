import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants'

interface FormFieldProps {
  title: string;
  value: string;
  handleChangeText: (e: any) => void;
  otherStyles?: string;
  keyBoardType?: string;
  placeHolder?: string;
}

const FormField = ({title, value, handleChangeText, otherStyles, keyBoardType, placeHolder} : FormFieldProps) => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className='border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row'>
        <TextInput
          className='flex-1 text-white font-psemibold text-base'
          value={value}
          placeholder={placeHolder}
          placeholderTextColor="7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-6 h-6' resizeMode='contain' />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField