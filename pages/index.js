
import Image from 'next/image'
import Layout from '../Components/Layout'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Layout title="HOmepage">

    <Link href="/users">Display your data</Link>
      
      </Layout>
    </>
  )
}
