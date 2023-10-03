import type { Metadata } from 'next'

import { SignIn } from '@/components/auth'

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Effortlessly create an account through our intuitive sign-up process.',
}

const SignInPage = () => <SignIn />

export default SignInPage
