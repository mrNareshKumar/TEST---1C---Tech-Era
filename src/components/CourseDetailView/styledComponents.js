import styled from 'styled-components'

export const CourseDetailCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 5px;
  box-shadow: 0 6px 20px 0 #e8e8e8;
  width: 90%;
`
export const CourseDetailImage = styled.img`
  width: 350px;
  height: 350px;
`
export const CourseDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 25px;
`
export const CourseDetailTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: #1e293b;
  margin-top: 0px;
`
export const CourseDetailDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: normal;
  line-height: 2;
  color: #475569;
  margin-top: 0px;
`
