import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Start from './Components/Start' // এখানে Started এর বদলে Start দিন
import Statistics from './Components/Statistics'
import Subscription from './Components/Subscription'
import Tabs from './Components/Tabs'
import Transform from './Components/Transform'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Statistics />
      <Tabs />
      
      {/* ইম্পোর্ট করা নাম 'Start' তাই এখানেও <Start /> হবে */}
      <Start /> 
      
      <Subscription />
      <Transform />
      <Footer />
    </>
  )
}

export default App