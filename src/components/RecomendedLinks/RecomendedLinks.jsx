import './RecomendedLinks.css'

const RecomendedLinks = () => {
  const RecomendedLinks = [
    {
      id: 1,
      text: 'Pushpa 2: The Rule Watch Online – Streamlare',
      mylink:
        'Pushpa 2: The Rule (2024) Telugu Full Movie Watch Online Free *Rip File*',
    },
    {
      id: 2,
      text: 'Pushpa 2: The Rule Watch Online – Netutv',
      mylink:
        'Pushpa 2: The Rule (2024) Telugu Full Movie Watch Online Free *Rip File',
    },
    {
      id: 3,
      text: 'Pushpa 2: The Rule Watch Online – Streamtape',
      mylink:
        'Pushpa 2: The Rule (2024) Telugu Full Movie Watch Online Free *Rip File*',
    },
    {
      id: 4,
      text: 'Pushpa 2: The Rule Watch Online – Streamlare',
      mylink:
        'Pushpa 2: The Rule (2024) Telugu Full Movie Watch Online Free *Rip File*',
    },
    {
      id: 5,
      text: 'Pushpa 2: The Rule Watch Online – Netutv',
      mylink:
        'Pushpa 2: The Rule (2024) Telugu Full Movie Watch Online Free *Rip File',
    },
    {
      id: 6,
      text: 'Pushpa 2: The Rule Watch Online – Streamtape',
      mylink:
        'Pushpa 2: The Rule (2024) Telugu Full Movie Watch Online Free *Rip File*',
    },
    {
      id: 7,
      text: 'Pushpa 2: The Rule Watch Online – Streamlare',
      mylink:
        'Pushpa 2: The Rule (2024) Telugu Full Movie Watch Online Free *Rip File*',
    },
    {
      id: 8,
      text: 'Pushpa 2: The Rule Watch Online – Netutv',
      mylink:
        'Pushpa 2: The Rule (2024) Telugu Full Movie Watch Online Free *Rip File',
    },
    {
      id: 9,
      text: 'Pushpa 2: The Rule Watch Online – Streamtape',
      mylink:
        'Pushpa 2: The Rule (2024) Telugu Full Movie Watch Online Free *Rip File*',
    },
  ]
  return (
    <div className="LinksContainer">
      <h1 style={{ color: 'lightgray', fontSize: '18px' }}>
        Pushpa 2: The Rule Watch Online (Single Links – DVDScr)
      </h1>
      {RecomendedLinks.map((link) => (
        <div className="LinkItems" key={link.id}>
          <p className="LinkItem1">{link.text}</p>
          <p className="LinkItem2">{link.mylink}</p>
        </div>
      ))}
    </div>
  )
}

export default RecomendedLinks
