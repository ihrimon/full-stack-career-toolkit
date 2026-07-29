# 📱 React Native Guide

[⬅ Back to main README](../README.md)

> React Native is an open-source framework by Meta for building native mobile applications using React and JavaScript, targeting iOS and Android from a single codebase.

## Table of Contents

| Topics                                                            | Overview                                     |
| ----------------------------------------------------------------- | -------------------------------------------- |
| [01. Installation & Setup](#01-installation--setup)               | CLI, environment, emulator, first app        |
| [02. Core Concepts](#02-core-concepts)                            | Components, JSX, bridge, Metro bundler       |
| [03. UI & Styling](#03-ui--styling)                               | StyleSheet, Flexbox, dimensions, themes      |
| [04. Navigation](#04-navigation)                                  | Stack, Tab, Drawer, deep linking             |
| [05. State Management](#05-state-management)                      | useState, Context, Redux, Zustand            |
| [06. Data Fetching & API](#06-data-fetching--api)                 | fetch, Axios, React Query, SWR               |
| [07. Native Device Features](#07-native-device-features)          | Camera, location, storage, permissions       |
| [08. Authentication](#08-authentication)                          | JWT, OAuth, biometrics, secure storage       |
| [09. Animations](#09-animations)                                  | Animated API, Reanimated, Gesture Handler    |
| [10. Performance Optimization](#10-performance-optimization)      | FlatList, memoization, Hermes, profiling     |
| [11. Push Notifications](#11-push-notifications)                  | FCM, APNs, Expo Notifications, deep links    |
| [12. Testing](#12-testing)                                        | Unit, integration, E2E with Detox            |
| [13. Error Handling & Monitoring](#13-error-handling--monitoring) | Error boundaries, Sentry, crash reporting    |
| [14. Security](#14-security)                                      | Secure storage, SSL pinning, obfuscation     |
| [15. Deployment & Release](#15-deployment--release)               | Build config, signing, App Store, Play Store |
| [16. Production Best Practices](#16-production-best-practices)    | CI/CD, OTA updates, versioning, monitoring   |

---

## 01. Installation & Setup

- [ ] Install Node.js (LTS version)
- [ ] Install React Native CLI (`npm install -g react-native-cli`) or use Expo CLI
- [ ] Install Watchman on macOS (`brew install watchman`)
- [ ] Set up Android Studio with Android SDK
- [ ] Set up Xcode (macOS only, for iOS development)
- [ ] Configure `ANDROID_HOME` environment variable
- [ ] Install Java Development Kit (JDK 17+)
- [ ] Create a new project (`npx react-native init MyApp` or `npx create-expo-app MyApp`)
- [ ] Run on Android emulator (`npx react-native run-android`)
- [ ] Run on iOS simulator (`npx react-native run-ios`)
- [ ] Verify Metro bundler starts correctly
- [ ] Enable developer menu on device (shake or `Cmd+D`)
- [ ] Set up physical device for testing (USB debugging on Android)
- [ ] Understand the difference between Expo Go and bare workflow

```bash
# Create a new React Native project
npx react-native@latest init MyApp

# Run on Android
npx react-native run-android

# Run on iOS
npx react-native run-ios
```

---

## 02. Core Concepts

- [ ] Understand React Native component model (no DOM — uses native views)
- [ ] Understand the difference between `View`, `Text`, `Image`, `ScrollView`
- [ ] Understand the JavaScript thread vs UI thread
- [ ] Understand the New Architecture (JSI, Fabric, TurboModules)
- [ ] Understand Metro bundler and how it serves JS bundles
- [ ] Understand the difference between Expo and bare React Native
- [ ] Understand `Platform.OS` for platform-specific code
- [ ] Understand `Platform.select()` for conditional styles/values
- [ ] Use `SafeAreaView` for notch and status bar handling
- [ ] Understand component lifecycle with hooks (`useEffect`, `useLayoutEffect`)
- [ ] Understand `useRef` for imperative native component access
- [ ] Understand `NativeModules` for bridging custom native code

```js
import { Platform, View, Text } from 'react-native';

const styles = Platform.select({
  ios: { paddingTop: 20 },
  android: { paddingTop: 0 },
});
```

---

## 03. UI & Styling

### 🔹 StyleSheet

- [ ] Use `StyleSheet.create()` for all styles (performance optimization)
- [ ] Understand that styles are not CSS — no cascading or inheritance
- [ ] Use `StyleSheet.flatten()` to merge style arrays
- [ ] Avoid inline style objects in render (creates new object each render)

### 🔹 Flexbox

- [ ] Understand that `flexDirection` defaults to `column` (not `row` like web)
- [ ] Use `flex: 1` for full-screen layouts
- [ ] Understand `alignItems`, `justifyContent`, `flexWrap`
- [ ] Use `gap` (React Native 0.71+) for spacing between children

### 🔹 Dimensions & Responsive Design

- [ ] Use `Dimensions.get("window")` for screen size
- [ ] Use `useWindowDimensions` hook for reactive screen size
- [ ] Handle orientation changes with `Dimensions` event listener
- [ ] Use percentage-based widths carefully (only works on flex children)
- [ ] Consider `react-native-size-matters` for responsive scaling

### 🔹 Theming & Dark Mode

- [ ] Use `useColorScheme()` to detect light/dark mode
- [ ] Build a theme context with light and dark color tokens
- [ ] Use `Appearance.addChangeListener()` for dynamic theme switching
- [ ] Avoid hardcoded colors — always reference theme tokens

### 🔹 Custom Fonts & Icons

- [ ] Link custom fonts using `react-native.config.js`
- [ ] Use `react-native-vector-icons` or `@expo/vector-icons`
- [ ] Verify fonts load before rendering (`useFonts` in Expo)

---

## 04. Navigation

### 🔹 React Navigation Setup

- [ ] Install React Navigation (`@react-navigation/native`)
- [ ] Install required dependencies (`react-native-screens`, `react-native-safe-area-context`)
- [ ] Wrap app in `NavigationContainer`
- [ ] Choose correct navigator type for use case

### 🔹 Navigator Types

- [ ] Stack Navigator (`@react-navigation/native-stack`) — screen push/pop
- [ ] Bottom Tab Navigator (`@react-navigation/bottom-tabs`) — tab bar
- [ ] Drawer Navigator (`@react-navigation/drawer`) — side menu
- [ ] Material Top Tabs — swipeable tabs
- [ ] Nested navigators for complex layouts

### 🔹 Navigation Patterns

- [ ] Pass params with `navigation.navigate("Screen", { id: 42 })`
- [ ] Read params with `route.params`
- [ ] Use `navigation.replace()` to prevent going back
- [ ] Use `navigation.reset()` for auth flow transitions
- [ ] Use `useNavigation()` hook in deeply nested components
- [ ] Use `useFocusEffect()` to run code when screen is focused
- [ ] Use `useIsFocused()` for conditional rendering based on focus

### 🔹 Deep Linking

- [ ] Configure URL scheme for the app (`myapp://`)
- [ ] Configure universal links (iOS) and App Links (Android)
- [ ] Map URL paths to screens in `linking` config
- [ ] Test deep links with `npx uri-scheme open`

---

## 05. State Management

### 🔹 Local State

- [ ] Use `useState` for simple component state
- [ ] Use `useReducer` for complex local state logic
- [ ] Use `useRef` for mutable values that don't trigger re-render

### 🔹 Global State

- [ ] Use React Context for lightweight global state (theme, auth user)
- [ ] Use Zustand for scalable, minimal global state (`npm install zustand`)
- [ ] Use Redux Toolkit for complex, large-scale state management
- [ ] Avoid prop drilling — lift state or use context/store

### 🔹 Server State

- [ ] Use React Query (`@tanstack/react-query`) for server data caching
- [ ] Use SWR as a lightweight alternative
- [ ] Separate server state from UI state

### 🔹 Persistent State

- [ ] Use `@react-native-async-storage/async-storage` for simple persistence
- [ ] Use `react-native-mmkv` for high-performance key-value storage
- [ ] Persist Zustand or Redux state with storage middleware

---

## 06. Data Fetching & API

- [ ] Use `fetch` API or `Axios` for HTTP requests
- [ ] Set base URL and default headers with Axios instance
- [ ] Add request/response interceptors for auth tokens
- [ ] Handle loading, success, and error states
- [ ] Use React Query for caching, refetching, and background sync
- [ ] Handle network connectivity with `@react-native-community/netinfo`
- [ ] Queue failed requests when offline and retry on reconnect
- [ ] Cancel requests on component unmount (abort controller)
- [ ] Validate API response data with Zod or Yup

```js
// Axios instance with interceptor
import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.example.com' });

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getToken()}`;
  return config;
});
```

---

## 07. Native Device Features

### 🔹 Permissions

- [ ] Use `react-native-permissions` for unified permission handling
- [ ] Request permissions at the right time (not on app launch)
- [ ] Handle denied and blocked states gracefully
- [ ] Add required keys to `Info.plist` (iOS) and `AndroidManifest.xml`

### 🔹 Camera & Media

- [ ] Use `react-native-vision-camera` for camera access
- [ ] Use `react-native-image-picker` for photo/video picking
- [ ] Compress images before uploading (`react-native-image-resizer`)
- [ ] Handle media permissions on both platforms

### 🔹 Location

- [ ] Use `react-native-geolocation-service` for GPS location
- [ ] Request foreground and background location separately
- [ ] Handle location permission denial gracefully
- [ ] Use `react-native-maps` for map display

### 🔹 Storage

- [ ] Use `AsyncStorage` for simple key-value data
- [ ] Use `react-native-mmkv` for fast synchronous storage
- [ ] Use SQLite (`op-sqlite` or `expo-sqlite`) for structured local data
- [ ] Use `react-native-fs` for file system access

### 🔹 Other Device APIs

- [ ] Clipboard (`@react-native-clipboard/clipboard`)
- [ ] Haptic feedback (`react-native-haptic-feedback`)
- [ ] Device info (`react-native-device-info`)
- [ ] Biometrics (`react-native-biometrics`)
- [ ] Share (`react-native` built-in `Share` API)

---

## 08. Authentication

- [ ] Implement JWT-based authentication flow
- [ ] Store tokens securely (`react-native-keychain` or `expo-secure-store`)
- [ ] Never store tokens in `AsyncStorage` (not encrypted)
- [ ] Implement token refresh logic with Axios interceptor
- [ ] Handle token expiry and auto-logout
- [ ] Set up OAuth with `react-native-app-auth`
- [ ] Implement Google Sign-In (`@react-native-google-signin/google-signin`)
- [ ] Implement Apple Sign-In (required for iOS if using other social logins)
- [ ] Implement biometric authentication as secondary factor
- [ ] Protect routes — show auth screens when unauthenticated

```js
// Secure token storage
import * as Keychain from 'react-native-keychain';

await Keychain.setGenericPassword('token', jwtToken);
const creds = await Keychain.getGenericPassword();
```

---

## 09. Animations

### 🔹 Animated API (Built-in)

- [ ] Use `Animated.Value` for animatable values
- [ ] Use `Animated.timing()` for duration-based animations
- [ ] Use `Animated.spring()` for physics-based animations
- [ ] Use `Animated.sequence()` and `Animated.parallel()` for chaining
- [ ] Use `useNativeDriver: true` whenever possible (runs on UI thread)

### 🔹 Reanimated (Recommended)

- [ ] Install `react-native-reanimated` (v3+)
- [ ] Use `useSharedValue()` for animated state
- [ ] Use `useAnimatedStyle()` for style interpolation
- [ ] Use `withTiming()`, `withSpring()`, `withRepeat()` for animations
- [ ] Use `useAnimatedGestureHandler()` with Gesture Handler

### 🔹 Gesture Handler

- [ ] Install `react-native-gesture-handler`
- [ ] Wrap root component with `GestureHandlerRootView`
- [ ] Use `Gesture.Pan()`, `Gesture.Tap()`, `Gesture.Pinch()` APIs
- [ ] Combine gestures with `Gesture.Simultaneous()` or `Gesture.Race()`

### 🔹 Layout Animations

- [ ] Use `LayoutAnimation` for simple layout transitions
- [ ] Use `Reanimated Layout Animations` for entering/exiting components
- [ ] Use `FadeIn`, `SlideInLeft`, `ZoomIn` preset animations

---

## 10. Performance Optimization

### 🔹 List Performance

- [ ] Use `FlatList` instead of `ScrollView` for long lists
- [ ] Set `keyExtractor` on every `FlatList`
- [ ] Use `getItemLayout` for fixed-height items (skips measurement)
- [ ] Use `initialNumToRender` and `windowSize` to limit rendering
- [ ] Use `removeClippedSubviews` on Android for large lists
- [ ] Use `FlashList` (`@shopify/flash-list`) for maximum list performance

### 🔹 Re-render Prevention

- [ ] Wrap components with `React.memo()` to prevent unnecessary re-renders
- [ ] Use `useCallback()` for stable function references
- [ ] Use `useMemo()` for expensive computed values
- [ ] Avoid anonymous functions and objects in JSX props

### 🔹 Image Performance

- [ ] Use `FastImage` (`react-native-fast-image`) for cached image loading
- [ ] Always set explicit `width` and `height` on images
- [ ] Use appropriate image format (WebP for Android, HEIF for iOS)
- [ ] Lazy load images that are off-screen

### 🔹 JavaScript Engine

- [ ] Enable Hermes engine (default in React Native 0.70+)
- [ ] Profile JS performance with Flipper or Chrome DevTools
- [ ] Move heavy computation off the JS thread using `InteractionManager`
- [ ] Use `react-native-reanimated` to run animations on UI thread

### 🔹 Bundle Size

- [ ] Analyze bundle with `react-native-bundle-visualizer`
- [ ] Use dynamic imports for large optional modules
- [ ] Enable ProGuard/R8 on Android for code shrinking
- [ ] Enable Bitcode on iOS (if required)

---

## 11. Push Notifications

- [ ] Set up Firebase Cloud Messaging (FCM) for Android
- [ ] Set up APNs certificates for iOS push notifications
- [ ] Use `@react-native-firebase/messaging` for FCM integration
- [ ] Use `expo-notifications` for Expo-managed workflow
- [ ] Request notification permission at the right time
- [ ] Handle foreground notifications
- [ ] Handle background notifications
- [ ] Handle notification tap (app opened from notification)
- [ ] Store and refresh FCM device token on the backend
- [ ] Handle token refresh events
- [ ] Implement local notifications with `react-native-push-notification`
- [ ] Set up notification channels on Android (required for Android 8+)
- [ ] Test push notifications on physical device (simulators have limitations)

---

## 12. Testing

### 🔹 Unit Testing

- [ ] Set up Jest with React Native preset
- [ ] Install React Native Testing Library (`@testing-library/react-native`)
- [ ] Test component rendering with `render()`
- [ ] Test user interactions with `fireEvent` or `userEvent`
- [ ] Mock native modules with `__mocks__` directory
- [ ] Test custom hooks with `renderHook()`

### 🔹 Integration Testing

- [ ] Test navigation flows between screens
- [ ] Test data fetching with mocked API responses (MSW)
- [ ] Test state management store changes

### 🔹 E2E Testing (Detox)

- [ ] Install and configure Detox (`npm install detox --save-dev`)
- [ ] Write Detox tests for critical user flows
- [ ] Test login, signup, and main features end-to-end
- [ ] Run Detox tests on CI with emulator/simulator
- [ ] Test deep linking behavior

```js
// React Native Testing Library example
import { render, fireEvent } from '@testing-library/react-native';

test('button increments counter', () => {
  const { getByText } = render(<Counter />);
  fireEvent.press(getByText('Increment'));
  expect(getByText('Count: 1')).toBeTruthy();
});
```

---

## 13. Error Handling & Monitoring

- [ ] Set up a global error boundary component
- [ ] Use `ErrorUtils.setGlobalHandler()` for unhandled JS errors
- [ ] Integrate Sentry (`@sentry/react-native`) for crash reporting
- [ ] Capture custom events and breadcrumbs with Sentry
- [ ] Set up Firebase Crashlytics for native crash reporting
- [ ] Log errors with user context (ID, role) for easier debugging
- [ ] Show a user-friendly fallback UI on crash
- [ ] Track ANR (App Not Responding) errors on Android
- [ ] Monitor JS bundle errors with source maps uploaded to Sentry

---

## 14. Security

- [ ] Use HTTPS for all API calls (never plain HTTP)
- [ ] Implement SSL pinning (`react-native-ssl-pinning`)
- [ ] Store sensitive data in Keychain/Keystore (not AsyncStorage)
- [ ] Obfuscate JavaScript bundle in production (Hermes bytecode)
- [ ] Enable ProGuard/R8 for Android code obfuscation
- [ ] Disable debug logs and console statements in production
- [ ] Prevent screenshots on sensitive screens (payments, auth)
- [ ] Validate all user input before sending to API
- [ ] Avoid storing secrets or API keys in the JS bundle
- [ ] Use environment variables with `react-native-config`
- [ ] Detect rooted/jailbroken devices if high security is required
- [ ] Implement certificate transparency checks

---

## 15. Deployment & Release

### 🔹 Android

- [ ] Generate a signing keystore file
- [ ] Configure signing in `android/app/build.gradle`
- [ ] Build release APK (`./gradlew assembleRelease`)
- [ ] Build release AAB for Play Store (`./gradlew bundleRelease`)
- [ ] Enable ProGuard for release builds
- [ ] Test release build on physical device before submitting
- [ ] Set up Google Play Console account
- [ ] Fill in store listing (description, screenshots, icon)
- [ ] Submit for review on Google Play

### 🔹 iOS

- [ ] Set up Apple Developer account and certificates
- [ ] Create App ID, provisioning profile, and distribution certificate
- [ ] Configure `Info.plist` with required permissions and descriptions
- [ ] Set version and build number in Xcode
- [ ] Archive the app in Xcode (`Product > Archive`)
- [ ] Upload to App Store Connect via Xcode Organizer
- [ ] Fill in App Store metadata and screenshots
- [ ] Submit for TestFlight testing
- [ ] Submit for App Store review

### 🔹 Version Management

- [ ] Follow semantic versioning (`MAJOR.MINOR.PATCH`)
- [ ] Keep `versionCode` (Android) and `CFBundleVersion` (iOS) in sync
- [ ] Automate version bumping with `react-native-version`

---

## 16. Production Best Practices

- [ ] Set up CI/CD pipeline (GitHub Actions, Bitrise, or EAS Build)
- [ ] Use Expo Application Services (EAS) for managed builds
- [ ] Enable OTA (Over-the-Air) updates with Expo Updates or CodePush
- [ ] Set update policy — only push OTA for JS/asset changes, not native
- [ ] Use environment-specific config (dev, staging, production)
- [ ] Use `react-native-config` for environment variables
- [ ] Monitor app performance with Firebase Performance or Datadog
- [ ] Set up user analytics (Firebase Analytics, Mixpanel, Amplitude)
- [ ] Track app crashes and ANRs in production
- [ ] Keep dependencies updated — run `npx react-native upgrade` regularly
- [ ] Audit third-party packages for security vulnerabilities (`npm audit`)
- [ ] Document all native modules and custom bridges
- [ ] Maintain a separate debug and release build configuration
- [ ] Test on multiple screen sizes and OS versions before release
- [ ] Provide a rollback plan for critical OTA updates


---

## 📝 Personal Beginner Notes

> Raw early-stage notes from first getting started with React Native.


1. Basic component of RN
   - <View /> like div
   - <Text />
   - <Image /> 
   - <Button /> not support style property
   - <TextInput>
   - <ScrollView> {nested scroll view, jokhon kono ekta specific component scroll kora lagbe tokon property use kora lagbe. nextedScrollEnabled = {true} showVerticalScrollIndicator = {true}}


style property array nei style={[..., ...]}