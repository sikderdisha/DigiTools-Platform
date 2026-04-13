import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Started from './Components/Start'
import Statistics from './Components/Statistics'
import Subscription from './Components/Subscription'
import Tabs from './Components/Tabs'
import Transform from './Components/Transform'

function App() {

  return (
    <>
      {/* Navbar-এ প্রপস হিসেবে cartCount পাঠানো যেতে পারে যদি প্রয়োজন হয় */}
      <Navbar />
      
      <Banner />
      
      {/* আপনার প্রজেক্টের অন্যান্য সেকশন */}
      <Statistics />
      <Tabs />
      <Start />
      <Subscription />
      <Transform />
      
      <Footer />
    </>
  )
}

export default App