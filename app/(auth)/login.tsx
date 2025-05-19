import { COLORS } from '@/constants/theme'
import { styles } from '@/styles/auth.styles'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'
export default function login() {
  return (
    <View style={styles.container}>
     <View style={styles.brandSection}>
        <View style={styles.logoContainer} >
            <Ionicons name='leaf' size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>Instapp</Text>
        <Text style={styles.tagline}>don't miss anything</Text>
     </View>
     
    </View>
  )
}