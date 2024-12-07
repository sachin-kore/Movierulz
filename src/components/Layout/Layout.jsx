import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bookmarknot">
        "Bookmark Us or Use Full{' '}
        <span style={{ color: 'yellow' }}>5Movierulz</span>
        <span style={{ color: 'red' }}>.skin </span>url{' '}
        <span style={{ color: 'yellow' }}>Download Movierulz </span>App and
        don't search us on google/bing"
      </div>
      <div>{children}</div>

      <Footer />
    </>
  )
}

export default Layout
