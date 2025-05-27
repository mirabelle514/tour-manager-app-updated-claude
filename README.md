# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# Tour Manager App

A comprehensive tour management application built with Expo and React Native.

## Features

- Tour scheduling and management
- Financial tracking
- Logistics coordination
- Merchandise inventory
- Communication tools
- Profile management

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio and Android SDK (for Android development)

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/mirabelle514/tour-manager-app-updated-claude.git
   cd tour-manager-app-updated-claude
   ```

2. Install dependencies
   ```bash
   npm install
   ```

## Running the App

### Development

Start the development server:
```bash
npx expo start
```

### Testing on iOS

1. Make sure you have Xcode installed on your Mac
2. Install iOS Simulator through Xcode
3. Start the app:
   ```bash
   npx expo start
   ```
4. Press 'i' in the terminal or click 'Run on iOS simulator' in the Expo Dev Tools

### Testing on Android

1. Install Android Studio
2. Set up an Android Virtual Device (AVD) through Android Studio
3. Start the app:
   ```bash
   npx expo start
   ```
4. Press 'a' in the terminal or click 'Run on Android device/emulator' in the Expo Dev Tools

### Testing on Physical Devices

1. Install the Expo Go app on your device:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
2. Start the app:
   ```bash
   npx expo start
   ```
3. Scan the QR code with your device's camera (iOS) or the Expo Go app (Android)

## Platform-Specific Setup

### iOS Requirements
- macOS operating system
- Xcode 13 or newer
- iOS 13 or newer for testing
- CocoaPods for iOS dependencies

### Android Requirements
- Android Studio
- Android SDK
- Java Development Kit (JDK)
- Android 6.0 (API level 23) or newer for testing

## Troubleshooting

### Common iOS Issues
- If the build fails, try cleaning the build:
  ```bash
  cd ios
  pod deintegrate
  pod install
  ```
- Make sure your Xcode command-line tools are up to date

### Common Android Issues
- If the emulator is slow, enable hardware acceleration in Android Studio
- Make sure ANDROID_HOME environment variable is set correctly
- If build fails, try:
  ```bash
  cd android
  ./gradlew clean
  ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
