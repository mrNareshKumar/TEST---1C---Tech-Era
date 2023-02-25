import {Component} from 'react'
import Loader from 'react-loader-spinner'
import FailureView from '../FailureView'
import Header from '../Header'
import CourseDetailView from '../CourseDetailView'
import {CourseDetailContainer, LoaderContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class CourseItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    courseDetails: [],
  }

  componentDidMount() {
    this.fetchCourseDetails()
  }

  formattedData = data => ({
    id: data.course_details.id,
    name: data.course_details.name,
    imageUrl: data.course_details.image_url,
    description: data.course_details.description,
  })

  fetchCourseDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const courseDetailsApiUrl = `https://apis.ccbp.in/te/courses/${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(courseDetailsApiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = this.formattedData(data)
      console.log(updatedData)
      this.setState({
        courseDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onRetry = () => {
    this.fetchCourseDetails()
  }

  renderCourseDetailView = () => {
    const {courseDetails} = this.state
    return <CourseDetailView courseDetails={courseDetails} />
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </LoaderContainer>
  )

  renderCourseItemDetailsView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCourseDetailView()
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
        <CourseDetailContainer>
          {this.renderCourseItemDetailsView()}
        </CourseDetailContainer>
      </>
    )
  }
}

export default CourseItemDetails
