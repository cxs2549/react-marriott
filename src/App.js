import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { GlobalStyles } from "./globalStyles"
import Home from "./views/Home/Home"

const App = () => {
  return (
    <div className="flex flex-col h-screen relative z-10">
      <GlobalStyles />
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
