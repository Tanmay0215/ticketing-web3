import { Link } from 'react-router-dom'
import './style.css'

const EventCard = ({ item }) => {
  return (
    <Link to={`/event/${item.id}`} className="text-white text-2xl font-jaini">
      {item.Title}
      <div className="relative overflow-hidden w-64">
        <img src={item.Image} alt="Your Image" className="h-1/6 aspect-2/3" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 blur"></div>
      </div>
    </Link>
  )
}
export default EventCard
