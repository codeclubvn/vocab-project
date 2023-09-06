// import { SignIn } from '@clerk/nextjs'
import { SignIn } from '@/components/sign-in'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Effortlessly create an account through our intuitive sign-up process.',
}

const SignInPage = () => <SignIn />

export default SignInPage
