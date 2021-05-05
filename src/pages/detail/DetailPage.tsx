import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface MatchParamsProps {
  touristRouteId: string;
}
export const DetailPage: React.FC<RouteComponentProps<MatchParamsProps>> = (props) => {
  return (
    <h1>
      Detail page,Tourist Route ID: {props.match.params.touristRouteId}
    </h1>
  )
}
