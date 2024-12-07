import Layout from '../../components/Layout/Layout'
import RecentAdded from '../../components/RecentlyAdded/RecentAdded'
import DetailInfo from '../../components/DetailInfo/DetailInfo'

const MovieDetails = ({
  title = 'Pushpa 2: The Rule (2024) DVDScr Telugu Full Movie Watch Online Free',
  movies,
}) => {
  const recentMovies = [
    {
      id: 1,
      name:
        'Vicky Vidya ka Woh Wala (2024) HDRip Hindi Movie Watch Online Free',
      link: '#',
    },
    {
      id: 2,
      name: 'Singham Again (2024) HDRip Hindi Movie Watch Online Free',
      link: '#',
    },
    {
      id: 3,
      name: 'Swag (2024) HDRip Malayalam Movie Watch Online Free',
      link: '#',
    },
    {
      id: 4,
      name: 'Bhool Bhulaiyaa 3 (2024) HDRip Hindi Movie Watch Online Free',
      link: '#',
    },
    {
      id: 5,
      name: 'Matinee (2024) HDRip Kannada Movie Watch Online Free',
      link: '#',
    },
    {
      id: 6,
      name: 'Year 10 (2024) HDRip Telugu Dubbed Movie Watch Online Free',
      link: '#',
    },
    {
      id: 7,
      name: ' Agni (2024) HDRip Hindi Movie Watch Online Free',
      link: '#',
    },
    {
      id: 8,
      name: 'Pushpa 2: The Rule (2024) DVDScr Hindi Movie Watch Online Free',
      link: '#',
    },
    {
      id: 9,
      name:
        ' Don’t Turn Out the Lights (2024) HDRip Telugu Dubbed Movie Watch Online Free',
      link: '#',
    },
    {
      id: 10,
      name: ' Murphy (2024) HDRip Kannada Movie Watch Online Free',
      link: '#',
    },
  ]

  return (
    <Layout>
      <div className="movies-section">
        {/* Left Container */}
        <div className="movies-left">
          <h2>{title}</h2>
          <div className="movies-grid">
            <DetailInfo />
          </div>
        </div>

        {/* Right Container */}
        <RecentAdded recentMovies={recentMovies} />
      </div>
    </Layout>
  )
}

export default MovieDetails
