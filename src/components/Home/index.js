import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import HomeCoursesView from '../HomeCoursesView'
import FailureView from '../FailureView'
import {
  HomeCoursesContainer,
  HomeCoursesUnorderList,
  LoaderContainer,
  Heading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    homeCourses: [],
  }

  componentDidMount() {
    this.fetchCourses()
  }

  fetchCourses = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const coursesApiUrl = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(coursesApiUrl, options)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.courses.map(each => ({
        id: each.id,
        name: each.name,
        logoUrl: each.logo_url,
      }))
      this.setState({
        homeCourses: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onRetry = () => {
    this.fetchCourses()
  }

  renderCoursesView = () => {
    const {homeCourses} = this.state
    return (
      <HomeCoursesContainer>
        <Heading>Courses</Heading>
        <HomeCoursesUnorderList>
          {homeCourses.map(eachCourse => (
            <HomeCoursesView key={eachCourse.id} courseDetails={eachCourse} />
          ))}
        </HomeCoursesUnorderList>
      </HomeCoursesContainer>
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </LoaderContainer>
  )

  renderHomeVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCoursesView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderCoursesView()}
      </>
    )
  }
}

export default Home
