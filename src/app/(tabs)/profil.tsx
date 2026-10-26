import { MaterialIcons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HalamanProfil() {
  return (
    <SafeAreaView className="flex-1 bg-surface" edges={['top']}>
      <View className="h-16 px-5 justify-center">
        <Text className="font-jakarta-bold text-on-surface text-xl">Profil</Text>
      </View>
      <View className="items-center px-5 pt-4">
        <Image
          source={require('../../../assets/images/avatar.png')}
          className="w-24 h-24 rounded-full"
        />
        <Text className="font-jakarta-bold text-on-surface text-lg mt-4">
          Arya Pradana
        </Text>
        <Text className="font-jakarta text-secondary text-xs mt-1">
          arya@email.com
        </Text>
      </View>
      <View className="mx-5 mt-8 bg-surface-lowest rounded-2xl border border-outline-variant/40 overflow-hidden">
        <View className="flex-row items-center px-4 py-4 border-b border-outline-variant/30">
          <MaterialIcons name="person-outline" size={22} color="#565E74" />
          <Text className="font-jakarta-medium text-on-surface text-sm ml-3 flex-1">
            Data Pribadi
          </Text>
          <MaterialIcons name="chevron-right" size={22} color="#757684" />
        </View>
        <View className="flex-row items-center px-4 py-4 border-b border-outline-variant/30">
          <MaterialIcons name="credit-card" size={22} color="#565E74" />
          <Text className="font-jakarta-medium text-on-surface text-sm ml-3 flex-1">
            Metode Pembayaran
          </Text>
          <MaterialIcons name="chevron-right" size={22} color="#757684" />
        </View>
        <View className="flex-row items-center px-4 py-4">
          <MaterialIcons name="help-outline" size={22} color="#565E74" />
          <Text className="font-jakarta-medium text-on-surface text-sm ml-3 flex-1">
            Pusat Bantuan
          </Text>
          <MaterialIcons name="chevron-right" size={22} color="#757684" />
        </View>
      </View>
      <Text className="font-jakarta text-secondary text-[11px] text-center mt-6">
        Halaman profil akan dilengkapi pada tahap berikutnya.
      </Text>
    </SafeAreaView>
  );
}
