import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HalamanPesanan() {
  return (
    <SafeAreaView className="flex-1 bg-surface" edges={['top']}>
      <View className="h-16 px-5 justify-center">
        <Text className="font-jakarta-bold text-on-surface text-xl">Pesanan</Text>
      </View>
      <View className="flex-1 items-center justify-center px-8 pb-16">
        <View className="w-20 h-20 rounded-full bg-surface-low items-center justify-center">
          <MaterialIcons name="receipt-long" size={36} color="#757684" />
        </View>
        <Text className="font-jakarta-bold text-on-surface text-lg mt-5">
          Belum ada pesanan
        </Text>
        <Text className="font-jakarta text-secondary text-xs text-center mt-2 leading-5">
          Riwayat rental kamu akan muncul di halaman ini.
        </Text>
      </View>
    </SafeAreaView>
  );
}
