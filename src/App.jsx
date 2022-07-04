import Header from "./components/Header"
import Form from "./components/Form"
import ListUsers from "./components/ListUsers"

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Form/>
        <ListUsers/>
      </div>
    </div>
  )
}

export default App
