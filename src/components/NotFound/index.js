import Header from '../Header'
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundNote,
} from './styledComponents'

const NotFound = () => (
  <>
    <Header />
    <NotFoundContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundNote>
        We are sorry, the page you requested could not be found.
      </NotFoundNote>
    </NotFoundContainer>
  </>
)

export default NotFound
