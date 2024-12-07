import './TorentLinks.css'

const TorentLinks = () => {
  const TorentLinks = [
    {
      id: 1,
      text: 'Get THIS TORENT 3.6 gb 100px',
      image: 'https://www.5movierulz.to/images/magnet.png',
    },
    {
      id: 2,
      text: 'Get THIS TORENT 3.6 gb 100px',
      image: 'https://www.5movierulz.to/images/magnet.png',
    },
    {
      id: 3,
      text: 'Get THIS TORENT 3.6 gb 100px',
      image: 'https://www.5movierulz.to/images/magnet.png',
    },
    {
      id: 4,
      text: 'Get THIS TORENT 3.6 gb 100px',
      image: 'https://www.5movierulz.to/images/magnet.png',
    },
    {
      id: 5,
      text: 'Get THIS TORENT 3.6 gb 100px',
      image: 'https://www.5movierulz.to/images/magnet.png',
    },
    {
      id: 6,
      text: 'Get THIS TORENT 3.6 gb 100px',
      image: 'https://www.5movierulz.to/images/magnet.png',
    },
  ]
  return (
    <div className="torentLinks">
      <h1 style={{ color: 'lightgray', fontSize: '18px' }}>
        Pushpa 2: The Rule Download Torrent Files
      </h1>
      {TorentLinks.map((link) => (
        <div className="TorentItems" key={link.id}>
          <p className="torentP">
            <img style={{ width: '18px' }} src={link.image} alt="" />
            <span>{link.text}</span>
          </p>
        </div>
      ))}
    </div>
  )
}

export default TorentLinks
