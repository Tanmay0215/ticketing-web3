import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Events from './Pages/Events'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Event from './Pages/Event'
import Payment2 from './Pages/Payment2'
import CreateEvent from './Pages/CreateEvent'
import BillingPage2 from './Pages/BillingPage2'

function App() {
  return (
    <div className="min-h-screen bg-black font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createEvent" element={<CreateEvent />} />
        <Route path="/billing/:id" element={<BillingPage2 />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/payment/:id" element={<Payment2 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
