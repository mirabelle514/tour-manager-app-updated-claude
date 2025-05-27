# Welcome to The Tour Manager App

A comprehensive **React Native mobile application** built with **Expo** for managing music tours, band logistics, and crew coordination. This cross-platform app works seamlessly on both **iOS** and **Android** devices.

## Platform Support

- **iOS**: Native iOS experience with Apple Design System
- **Android**: Native Android experience with Material Design adaptations  
- **Cross-Platform**: Single codebase for both platforms using React Native
- **Web**: Additional web support through Expo (development/testing)

## Features

- **Role-based Access Control** (Super Admin, Tour Manager, Band Members, Crew)
- **Daily Tour Sheet** - Comprehensive venue and schedule information
- **Financial Tracking** - Profit/loss monitoring and expense management
- **Real-time Communication** - Team messaging and announcements
- **Merchandise Management** - Inventory tracking and sales monitoring
- **Logistics Coordination** - Crew, transportation, and equipment tracking
- **Apple-Style Design System** - Consistent, beautiful UI across platforms

## Get Started

### Prerequisites

- **Node.js** (v18 or newer)
- **npm** or **yarn**
- **Expo CLI** (installed globally)

### Installation

1. **Clone and install dependencies:**
```bash
git clone [your-repo-url]
cd tour-manager-app-updated-claude
npm install
```

2. **Start the development server:**
```bash
npx expo start
```

3. **Choose your platform:**
   - Press `i` for **iOS Simulator** (macOS only)
   - Press `a` for **Android Emulator** 
   - Scan QR code with **Expo Go** app on your phone
   - Press `w` for **Web browser** (development only)

## Testing Instructions

### On Physical Devices

**iOS (iPhone/iPad):**
1. Install **Expo Go** from the App Store
2. Open camera and scan the QR code from terminal
3. App will open in Expo Go

**Android:**
1. Install **Expo Go** from Google Play Store
2. Open Expo Go app and scan QR code
3. App will launch directly

### On Simulators/Emulators

**iOS Simulator (macOS only):**
1. Install Xcode from Mac App Store
2. Run `npx expo start`
3. Press `i` to open in iOS Simulator

**Android Emulator:**
1. Install Android Studio
2. Set up Android Virtual Device (AVD)
3. Run `npx expo start`
4. Press `a` to open in Android Emulator

### Testing Different User Roles

The app includes **demo authentication** with different user roles:

1. **Super Admin** - Full access to all features
2. **Tour Manager** - Schedule, logistics, and financial management
3. **Band Member** - Personal schedules and basic tour info
4. **General Crew** - Basic schedules and communication

**Test by logging in as different roles to see how the app adapts!**

## Project Structure

```
tour-manager-app-updated-claude/
├── App.js                 # Main navigation and authentication
├── package.json           # Dependencies and scripts
├── app.json              # Expo configuration
├── babel.config.js       # Babel configuration
├── screens/              # Screen components
│   ├── DaySheet.js       # Main daily tour information
│   ├── LoginScreen.js    # Authentication
│   ├── ScheduleScreen.js # Upcoming shows
│   ├── FinancesScreen.js # Financial tracking
│   └── ...               # Other screen files
├── styles/               # Centralized styling system
│   ├── theme.js          # Apple Design System colors & typography
│   ├── components.js     # Reusable component styles
│   └── screens.js        # Screen-specific styles
└── assets/               # Images, icons, and static files
```

## Design System

This app uses an **Apple-inspired design system** with:

- **Apple System Colors** - Native iOS color palette
- **SF Typography Scale** - Matching iOS text styles  
- **Grouped Backgrounds** - iOS Settings app style
- **Consistent Spacing** - 4pt grid system
- **Proper Shadows** - Platform-appropriate depth

All styles are centralized in the `/styles` folder for easy theming and maintenance.

## Key Files

### Core Application
- **`App.js`** - Main navigation, authentication, and role-based access
- **`screens/DaySheet.js`** - Primary feature showing daily tour information

### Styling Architecture  
- **`styles/theme.js`** - Colors, typography, spacing constants
- **`styles/components.js`** - Reusable UI component styles
- **`styles/screens.js`** - Screen-specific styling

### Configuration
- **`package.json`** - Dependencies optimized for stability
- **`app.json`** - Expo configuration for iOS/Android builds

## Development

### Adding New Features
1. Create screen components in `/screens`
2. Add styles to appropriate file in `/styles`
3. Update navigation in `App.js` with proper permissions
4. Test on both iOS and Android

### Customizing Styles
All visual customization happens in `/styles` folder:
- **Colors**: Modify `styles/theme.js`
- **Typography**: Update font sizes in `styles/theme.js`  
- **Components**: Edit shared styles in `styles/components.js`

### Building for Production

**iOS:**
```bash
expo build:ios
```

**Android:**
```bash
expo build:android
```

## Testing Checklist

- [ ] **Login Flow** - Test all user roles
- [ ] **Day Sheet** - Verify venue information displays correctly
- [ ] **Navigation** - Confirm role-based tab visibility
- [ ] **Responsive Design** - Test on different screen sizes
- [ ] **Cross-Platform** - Verify identical functionality on iOS/Android
- [ ] **Offline Capability** - Test basic functionality without internet

## Platform-Specific Features

### iOS
- Native iOS navigation patterns
- Apple Design System compliance
- iOS-specific gestures and interactions
- Integration with iOS system fonts

### Android
- Material Design adaptations
- Android navigation patterns  
- Native Android components where applicable
- Android-specific user interactions

## Contributing

1. Follow the established folder structure
2. Use the centralized styling system in `/styles`
3. Test on both iOS and Android platforms
4. Maintain role-based access control patterns
5. Follow Apple Design System guidelines

## Learn More

### Expo Resources
- [Expo Documentation](https://docs.expo.dev/) - Learn fundamentals and advanced topics
- [Learn Expo Tutorial](https://docs.expo.dev/tutorial/introduction/) - Step-by-step guide
- [Expo GitHub](https://github.com/expo/expo) - Open source platform

### React Native Resources
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/) - Navigation library used in this app

### Design Resources
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Material Design](https://material.io/design) - For Android adaptations

## Future Roadmap

- [ ] **Real Authentication** - Replace demo login with proper auth
- [ ] **Push Notifications** - Real-time tour updates
- [ ] **Offline Mode** - Core functionality without internet
- [ ] **Calendar Integration** - Sync with device calendars
- [ ] **File Upload** - Receipt and document management
- [ ] **GPS Integration** - Location-based features
- [ ] **Multi-language Support** - International touring

## Support

For technical support or feature requests, please check the project issues or create a new issue with detailed information about your platform (iOS/Android) and device specifications.

---
Protected by the MIT license. 

**Built with love for The Wednesday Projects using React Native and Expo**