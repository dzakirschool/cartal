import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAkun } from '../../context/AkunContext';

export default function HalamanProfil() {
  const { pengguna, keluar } = useAkun();

  const handleKeluar = async () => {
    await keluar();
    router.replace('/');
  };

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
          {pengguna?.nama ?? 'Pengguna'}
        </Text>
        <Text className="font-jakarta text-secondary text-xs mt-1">
          {pengguna?.email ?? ''}
        </Text>
      </View>

      <View className="mx-5 mt-8 bg-surface-lowest rounded-2xl border border-outline-variant/40 overflow-hidden">
        <View className="px-4 py-3.5 border-b border-outline-variant/30">
          <Text className="font-jakarta-semibold text-[10px] tracking-widest text-secondary">
            NAMA
          </Text>
          <Text className="font-jakarta-medium text-on-surface text-sm mt-1">
            {pengguna?.nama ?? '-'}
          </Text>
        </View>
        <View className="px-4 py-3.5">
          <Text className="font-jakarta-semibold text-[10px] tracking-widest text-secondary">
            EMAIL
          </Text>
          <Text className="font-jakarta-medium text-on-surface text-sm mt-1">
            {pengguna?.email ?? '-'}
          </Text>
        </View>
      </View>

      <Pressable
        onPress={handleKeluar}
        className="mx-5 mt-4 h-12 rounded-xl border border-error/30 bg-red-50 items-center justify-center flex-row"
      >
        <MaterialIcons name="logout" size={18} color="#BA1A1A" />
        <Text className="font-jakarta-semibold text-error text-sm ml-2">
          Keluar
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
