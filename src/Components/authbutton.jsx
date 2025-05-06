import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import './authbutton.css'

export default function AuthButtons() {
  return (
    <div className='auth'>
      <SignedIn className = 'signedin'>
        <UserButton afterSignOutUrl="/"/>
      </SignedIn>

      <SignedOut className = 'signedout'>
        <SignInButton mode="modal">
          <button className = 'signin-btn'>
            Login
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className = 'signup-btn'>
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
    </div>
  );
}