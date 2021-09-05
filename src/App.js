import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { GlobalStyles } from "./globalStyles"

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <GlobalStyles />
      <Header />
      <main className="flex-grow">hi</main>
      <Footer />
    </div>
  )
}

export default App
