import {
  CourseDetailCard,
  CourseDetailImage,
  CourseDetailInfo,
  CourseDetailTitle,
  CourseDetailDescription,
} from './styledComponents'

const CourseDetailView = props => {
  const {courseDetails} = props
  const {id, name, imageUrl, description} = courseDetails

  return (
    <CourseDetailCard key={id}>
      <CourseDetailImage src={imageUrl} alt={name} />
      <CourseDetailInfo>
        <CourseDetailTitle>{name}</CourseDetailTitle>
        <CourseDetailDescription>{description}</CourseDetailDescription>
      </CourseDetailInfo>
    </CourseDetailCard>
  )
}

export default CourseDetailView
