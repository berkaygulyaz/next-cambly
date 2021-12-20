import Head from 'next/head'
import Banner from '../components/banner'
import Header from '../components/header'
import Layout from '../components/layout'
export default function Home() {
  return (
    <div>
      <Layout>
        <Banner />
      </Layout>
    </div>
  )
}
