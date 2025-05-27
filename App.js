// App.js - Main app entry point
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Import screens
import CommunicationScreen from './screens/CommunicationScreen';
import DaySheet from './screens/DaySheet';
import FinancesScreen from './screens/FinancesScreen';
import LoginScreen from './screens/LoginScreen';
import LogisticsScreen from './screens/LogisticsScreen';
import MerchandiseScreen from './screens/MerchandiseScreen';
import ProfileScreen from './screens/ProfileScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import SettingsScreen from './screens/SettingsScreen';

// User roles and permissions
const USER_ROLES = {
    SUPER_ADMIN: 'super_admin',
    TOUR_MANAGER: 'tour_manager',
    BAND_LEADER: 'band_leader',
    BAND_MEMBER: 'band_member',
    CREW_CHIEF: 'crew_chief',
    GENERAL_CREW: 'general_crew'
};

const PERMISSIONS = {
    // Financial permissions
    VIEW_FULL_FINANCES: [USER_ROLES.SUPER_ADMIN, USER_ROLES.TOUR_MANAGER],
    VIEW_BASIC_FINANCES: [USER_ROLES.BAND_LEADER, USER_ROLES.BAND_MEMBER],
    MANAGE_EXPENSES: [USER_ROLES.SUPER_ADMIN, USER_ROLES.TOUR_MANAGER],

    // Schedule permissions
    EDIT_SCHEDULE: [USER_ROLES.SUPER_ADMIN, USER_ROLES.TOUR_MANAGER],
    VIEW_SCHEDULE: ['all'],

    // Communication permissions
    BROADCAST_MESSAGES: [USER_ROLES.SUPER_ADMIN, USER_ROLES.TOUR_MANAGER, USER_ROLES.BAND_LEADER],
    VIEW_MESSAGES: ['all'],

    // Merchandise permissions
    MANAGE_MERCHANDISE: [USER_ROLES.SUPER_ADMIN, USER_ROLES.TOUR_MANAGER, USER_ROLES.CREW_CHIEF],
    VIEW_MERCHANDISE: [USER_ROLES.BAND_MEMBER, USER_ROLES.GENERAL_CREW],

    // Logistics permissions
    MANAGE_LOGISTICS: [USER_ROLES.SUPER_ADMIN, USER_ROLES.TOUR_MANAGER],
    VIEW_LOGISTICS: ['all'],

    // User management
    MANAGE_USERS: [USER_ROLES.SUPER_ADMIN],
    MANAGE_SETTINGS: [USER_ROLES.SUPER_ADMIN, USER_ROLES.TOUR_MANAGER]
};

// Mock user data - in real app this comes from authentication
const mockUsers = {
    admin: {
        id: '1',
        name: 'Sarah Johnson',
        role: USER_ROLES.SUPER_ADMIN,
        email: 'sarah@tourmanagement.com',
        phone: '+1 (555) 123-4567'
    },
    tourManager: {
        id: '2',
        name: 'Mike Rodriguez',
        role: USER_ROLES.TOUR_MANAGER,
        email: 'mike@band.com',
        phone: '+1 (555) 234-5678'
    },
    bandMember: {
        id: '3',
        name: 'Alex Thompson',
        role: USER_ROLES.BAND_MEMBER,
        email: 'alex@band.com',
        phone: '+1 (555) 345-6789'
    },
    crew: {
        id: '4',
        name: 'Jamie Wilson',
        role: USER_ROLES.GENERAL_CREW,
        email: 'jamie@crew.com',
        phone: '+1 (555) 456-7890'
    }
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Permission checking utility
const hasPermission = (userRole, permission) => {
    const allowedRoles = PERMISSIONS[permission];
    if (!allowedRoles) return false;
    if (allowedRoles.includes('all')) return true;
    return allowedRoles.includes(userRole);
};

// Tab navigator configuration based on user role
const getTabsForRole = (userRole) => {
    const baseTabs = [
        {
            name: 'DaySheet',
            component: DaySheet,
            title: 'Today',
            icon: 'today',
            permission: 'VIEW_SCHEDULE'
        },
        {
            name: 'Schedule',
            component: ScheduleScreen,
            title: 'Schedule',
            icon: 'calendar',
            permission: 'VIEW_SCHEDULE'
        },
        {
            name: 'Communication',
            component: CommunicationScreen,
            title: 'Messages',
            icon: 'chatbubbles',
            permission: 'VIEW_MESSAGES'
        }
    ];

    const conditionalTabs = [
        {
            name: 'Finances',
            component: FinancesScreen,
            title: 'Finances',
            icon: 'card',
            permission: 'VIEW_BASIC_FINANCES',
            roles: [USER_ROLES.SUPER_ADMIN, USER_ROLES.TOUR_MANAGER, USER_ROLES.BAND_LEADER, USER_ROLES.BAND_MEMBER]
        },
        {
            name: 'Merchandise',
            component: MerchandiseScreen,
            title: 'Merch',
            icon: 'shirt',
            permission: 'VIEW_MERCHANDISE',
            roles: [USER_ROLES.SUPER_ADMIN, USER_ROLES.TOUR_MANAGER, USER_ROLES.CREW_CHIEF, USER_ROLES.BAND_MEMBER]
        },
        {
            name: 'Logistics',
            component: LogisticsScreen,
            title: 'Logistics',
            icon: 'car',
            permission: 'VIEW_LOGISTICS',
            roles: [USER_ROLES.SUPER_ADMIN, USER_ROLES.TOUR_MANAGER, USER_ROLES.CREW_CHIEF]
        },
        {
            name: 'Settings',
            component: SettingsScreen,
            title: 'Settings',
            icon: 'settings',
            permission: 'MANAGE_SETTINGS',
            roles: [USER_ROLES.SUPER_ADMIN, USER_ROLES.TOUR_MANAGER]
        }
    ];

    // Filter tabs based on user role
    const allowedTabs = conditionalTabs.filter(tab => {
        if (tab.roles) return tab.roles.includes(userRole);
        return hasPermission(userRole, tab.permission);
    });

    return [...baseTabs, ...allowedTabs];
};

// Main tab navigator component
const MainTabs = ({ userRole, user }) => {
    const tabs = getTabsForRole(userRole);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    const tab = tabs.find(t => t.name === route.name);
                    const iconName = tab ? tab.icon : 'help';
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopColor: '#e1e1e1',
                    paddingBottom: 5,
                    height: 60
                },
                headerStyle: {
                    backgroundColor: '#007AFF',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: '600',
                },
                headerRight: () => (
                    <Ionicons
                        name="person-circle"
                        size={24}
                        color="#fff"
                        style={{ marginRight: 15 }}
                        onPress={() => {
                            // Navigate to profile - implement this
                            console.log('Profile pressed');
                        }}
                    />
                )
            })}
        >
            {tabs.map((tab) => (
                <Tab.Screen
                    key={tab.name}
                    name={tab.name}
                    component={tab.component}
                    options={{
                        title: tab.title,
                        headerTitle: `${tab.title} - ${user.name}`,
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

// Main App component with authentication
const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            const storedUser = await AsyncStorage.getItem('currentUser');
            if (storedUser) {
                const user = JSON.parse(storedUser);
                setCurrentUser(user);
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error('Error checking auth status:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogin = async (userType) => {
        try {
            const user = mockUsers[userType];
            await AsyncStorage.setItem('currentUser', JSON.stringify(user));
            setCurrentUser(user);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('currentUser');
            setCurrentUser(null);
            setIsAuthenticated(false);
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <NavigationContainer>
            {isAuthenticated && currentUser ? (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="MainTabs">
                        {() => <MainTabs userRole={currentUser.role} user={currentUser} />}
                    </Stack.Screen>
                    <Stack.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{
                            headerShown: true,
                            title: 'Profile',
                            headerStyle: { backgroundColor: '#007AFF' },
                            headerTintColor: '#fff'
                        }}
                    />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login">
                        {() => <LoginScreen onLogin={handleLogin} />}
                    </Stack.Screen>
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};

// Simple loading screen component
const LoadingScreen = () => (
    <View style={styles.loadingContainer}>
        <Ionicons name="musical-notes" size={48} color="#007AFF" />
        <Text style={styles.loadingText}>
            Loading Tour Manager...
        </Text>
    </View>
);

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    loadingText: {
        marginTop: 16,
        fontSize: 18,
        fontWeight: '600',
        color: '#333'
    }
});

export default App;

// Export utilities for use in other components
export { hasPermission, PERMISSIONS, USER_ROLES };
