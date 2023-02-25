import {
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewNote,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props
  const onClickRetry = () => {
    onRetry()
  }

  return (
    <FailureViewContainer>
      <FailureViewImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureViewHeading>Oops! Something Went Wrong</FailureViewHeading>
      <FailureViewNote>
        We cannot seem to find the page you are looking for.
      </FailureViewNote>
      <RetryButton type="button" onClick={onClickRetry}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )
}

export default FailureView
