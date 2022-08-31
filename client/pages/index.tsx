import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavigationHead from 'component/NavigationHead'
import StaticContentRenderer from 'component/StaticContentRenderer'
import { description } from 'lib/interfaces'

////////////////////////////////////////////
// Function: To render Home page with User & About us link
// Version: 1.0
// Serves: Home Page
// Query : only getAllUsers
// Type: Page
///////////////////////////////////////////

const Home = () => {
  return (
    <div className='container fluid'>
      <Head>
        <title>Flash Loader</title>
        <meta name="description" content="App test assignement caters load on click falsh cards" />
      </Head>
      <NavigationHead />
      <StaticContentRenderer title="Home" description={description.homeDesc} />
    </div>
  )
}

export default Home
