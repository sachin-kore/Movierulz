import Footer from '../../components/Footer/Footer'
import MoviesSection from '../../components/MoviesSection/MovieSections'
import Navbar from '../../components/Navbar/Navbar'
const Home = () => {
  const featuredMovies = [
    {
      id: 1,
      name: 'Movie 1',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 2,
      name: 'Movie 2',
      title:
        'Pushpa 2: The Rule (2024) DVDScr Telugu Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Pushpa-2-The-Rule-Telugu.jpg',
    },
    {
      id: 3,
      name: 'Movie 3',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 4,
      name: 'Movie 4',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 5,
      name: 'Movie 2',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 6,
      name: 'Movie 3',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 7,
      name: 'Movie 4',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 8,
      name: 'Movie 2',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 9,
      name: 'Movie 3',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 10,
      name: 'Movie 4',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 11,
      name: 'Movie 2',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 12,
      name: 'Movie 3',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 13,
      name: 'Movie 4',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 14,
      name: 'Movie 2',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 15,
      name: 'Movie 3',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
    {
      id: 16,
      name: 'Movie 4',
      title: 'Matinee (2024) HDRip Kannada Movie Watch Online Free MovieRulz',
      image: 'https://www.5movierulz.to/uploads/Matinee-Kannada.jpg',
    },
  ]

  return (
    <div>
      <Navbar />
      <div className="bookmarknot">
        "Bookmark Us or Use Full{' '}
        <span style={{ color: 'yellow' }}>5Movierulz</span>
        <span style={{ color: 'red' }}>.skin </span>url{' '}
        <span style={{ color: 'yellow' }}>Download Movierulz </span>App and
        don't search us on google/bing"
      </div>
      <MoviesSection title={'Featured Movies Free'} movies={featuredMovies} />
      <Footer />
    </div>
  )
}

export default Home
