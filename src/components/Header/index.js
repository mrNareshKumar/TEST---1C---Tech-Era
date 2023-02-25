import {Link, withRouter} from 'react-router-dom'
import {NavHeader, NavLogoContainer, NavLogo} from './styledComponents'

const Header = () => (
  <NavHeader>
    <NavLogoContainer>
      <Link to="/">
        <NavLogo
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
        />
      </Link>
    </NavLogoContainer>
  </NavHeader>
)

export default withRouter(Header)
