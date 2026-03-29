// import './App.css'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

function AuthPage() {
  return (
    <>
      <header>
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
    </>
  )
}

export default AuthPage