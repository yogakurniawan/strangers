import React from "react"
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines"

function ChartLine(props) {
  const { data, width, height, color, title } = props
  return (
    <div className="chart-line">
      <Sparklines
        data={data}
        svgWidth={width}
        svgHeight={height}
      >
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <div className="chart-line-title">{title}</div>
    </div>
  )
}

export default ChartLine