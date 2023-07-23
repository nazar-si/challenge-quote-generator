import Layout from "./components/layout/Layout"
import Quote from "./components/quote/Quote"

function App() {
  return (
    <Layout>
      <Quote quote={{quoteText: "Test"}}></Quote>
    </Layout>
  )
}

export default App
