import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="grid-body">
        <h1>This is homepage</h1>
         <Link to="/detail">Detail</Link>
    </div>
  )
}

export default Home