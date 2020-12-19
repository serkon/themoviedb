import Head from 'next/head'
import { AppProvider } from '../providers/app.provider'
import Home from './home/home'

export default function Index(): JSX.Element {
  return (
    <Home />
  )
}
