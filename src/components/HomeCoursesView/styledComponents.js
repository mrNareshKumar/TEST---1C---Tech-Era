import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CourseLink = styled(Link)`
  text-decoration: none;
  margin-right: 50px;
  margin-bottom: 50px;
`
export const CoursesListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0px;
  width: 160px;
`
export const CoursesLogo = styled.img`
  width: 55px;
  height: 50px;
  padding-left: 0px;
  margin-left: 0px;
`
export const CoursesText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #1e293b;
  padding-left: 10px;
`
