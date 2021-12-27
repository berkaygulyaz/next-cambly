import Head from 'next/head'
import Banner from '../components/banner'
import Header from '../components/header'
import Layout from '../components/layout'
import TutorsCard from '../components/tutors-card'
export default function Home() {
  return (
    <div>
      <Layout>
        <Banner />
        <TutorsCard />
      </Layout>
    </div>
  )
}
