'use client'
import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

// sai2 tam5 config firebase cua3 tui nha
const firebaseConfig = {
  apiKey: 'AIzaSyCUuogh8hEj9O4OraQsYE3eanaMUxs3TDA',
  authDomain: 'test-c887e.firebaseapp.com',
  projectId: 'test-c887e',
  storageBucket: 'test-c887e.appspot.com',
  messagingSenderId: '128310947725',
  appId: '1:128310947725:web:0c61fde9baf1011b65d7c4',
  measurementId: 'G-G05WT46T62',
}


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const dbFirebase = getFirestore()
export const storageFirebase = getStorage(app)

class Authentication {
  authenticationFirebase = getAuth(app)

  signFacebook(dataCallback: (re: any) => void) {
    const provider = new FacebookAuthProvider()

    signInWithPopup(this.authenticationFirebase, provider)
      .then((account) => {
        dataCallback(account)
      })
      .catch(() => { })
  }
  signGoogle(dataCallback: (re: any) => void) {
    const provider = new GoogleAuthProvider()
    signInWithPopup(this.authenticationFirebase, provider)
      .then((account) => {
        dataCallback(account)
      })
      .catch(() => { })
  }
  signGithub(dataCallback: (re: any) => void) {
    const provider = new GithubAuthProvider()
    signInWithPopup(this.authenticationFirebase, provider)
      .then((account) => {
        dataCallback(account)
      })
      .catch(() => {
        console.log('Không thể kết nối bên thứ ba!')
      })
  }
  handleLogout() {
    signOut(getAuth())
      .then(() => {
        console.log('Bạn đăng xuất thành công')
        window.localStorage.removeItem('accessToken')
      })
      .catch((err) => {
        console.log(err.message)
        console.log('Bạn chưa đăng nhập')
      })
  }
}

export default new Authentication()
