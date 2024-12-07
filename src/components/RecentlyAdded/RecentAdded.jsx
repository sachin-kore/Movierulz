import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const RecentAdded = ({ recentMovies }) => {
  return (
    <div className="movies-right">
      <h2 className="bookmarknot">Recent and Updated Movies</h2>
      <ul className="recent-movies-list">
        {recentMovies.map((movie) => (
          <li style={{ display: 'flex' }} key={movie.id}>
            <span>
              <MdKeyboardDoubleArrowRight />
            </span>
            <a href={movie.link}>{movie.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentAdded
