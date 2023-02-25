import {
  CoursesListItem,
  CoursesLogo,
  CoursesText,
  CourseLink,
} from './styledComponents'

const CourseItemDetails = props => {
  const {courseDetails} = props
  const {id, name, logoUrl} = courseDetails

  return (
    <CourseLink to={`/courses/${id}`}>
      <CoursesListItem key={id}>
        <CoursesLogo src={logoUrl} alt={name} />
        <CoursesText>{name}</CoursesText>
      </CoursesListItem>
    </CourseLink>
  )
}

export default CourseItemDetails
