import React, { useState } from 'react'
import WelcomeScreen from './screens/WelcomeScreen'
import SignUpScreen from './screens/SignUpScreen'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'

type Screen = 'welcome' | 'signup' | 'home' | 'profile'

interface User {
  name: string
  email: string
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome')
  const [user, setUser] = useState<User | null>(null)

  const handleSignUp = (userData: User) => {
    setUser(userData)
    setCurrentScreen('home')
  }

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen)
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onNavigate={handleNavigate} />
      case 'signup':
        return <SignUpScreen onSignUp={handleSignUp} onNavigate={handleNavigate} />
      case 'home':
        return <HomeScreen user={user} onNavigate={handleNavigate} />
      case 'profile':
        return <ProfileScreen user={user} onNavigate={handleNavigate} />
      default:
        return <WelcomeScreen onNavigate={handleNavigate} />
    }
  }

  return <div className="App">{renderScreen()}</div>
}