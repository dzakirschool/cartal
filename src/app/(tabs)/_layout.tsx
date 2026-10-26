import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1E40AF',
        tabBarInactiveTintColor: '#444653',
        tabBarLabelStyle: {
          fontFamily: 'PlusJakartaSans_600SemiBold',
          fontSize: 10,
        },
        tabBarStyle: {
          height: 64,
          paddingTop: 6,
          paddingBottom: 8,
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E6E8EA',
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="beranda"
        options={{
          title: 'Beranda',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="directions-car" size={24} color={color as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="pesanan"
        options={{
          title: 'Pesanan',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="receipt-long" size={24} color={color as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={24} color={color as string} />
          ),
        }}
      />
    </Tabs>
  );
}
