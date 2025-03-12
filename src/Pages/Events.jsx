import MainSlider from '../Components/MainSlider'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import UpcomingSlider from '../Components/UpcomingSlider'
import Loader from '../Components/Loader'
import Chat from '../Components/Chat'

const Events = () => {
  const [data, setdata] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(db, 'EventsInfo')
        const querySnapshot = await getDocs(eventsCollection)
        const eventsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        console.log(eventsData)
        setdata(eventsData)
      } catch (error) {
        console.error('Error fetching events:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }, [])

  if (loading) {
    return (
      <div className="w-screen h-screen bg-black flex justify-center items-center">
        <Loader />
      </div>
    )
  }

  return (
    <div className="bg-black w-screen relative h-screen overflow-x-hidden">
      <MainSlider data={data} />
      <div className="text-white font-happyMonkey font-bold text-3xl p-8">
        Upcoming Events
      </div>
      <div className="mb-10">
        <UpcomingSlider data={data} />
      </div>
      <Chat />
    </div>
  )
}

export default Events
