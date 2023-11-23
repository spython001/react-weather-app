
function TopButtons() {
  const cities = [
    {
        id:1,
        title: 'Lagos'
    },
    {
        id:2,
        title: 'Abuja'
    },
    {
        id:3,
        title: 'Enugu'
    },
    {
        id:4,
        title: 'Jigawa'
    },
    {
        id:5,
        title: 'Oyo'
    },
  ]

  return (
    <div className="flex items-center justify-around my-6">
        { cities.map((city) =>(
            <button key={city.id} className="text-white text-lg font-medium">
                {city.title}
            </button>
        ))}
    </div>
  )
}

export default TopButtons