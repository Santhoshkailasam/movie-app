import * as React from "react"
import Svg,{Path} from 'react-native-svg'
const SvgComponent = (props) => {
  return(
    <Svg
  xmlns="http://www.w3.org/2000/svg"
  width={25}
  height={12}
  fill="none"
  {...props}
>
  <Path
    fill="#ECECEC"
    d="M21.25 2.3v2.3h1.25v2.3h-1.25v2.3H2.5V2.3h18.75Zm.625-2.3h-20C.839 0 0 .772 0 1.725v8.05c0 .953.84 1.725 1.875 1.725h20c1.035 0 1.875-.772 1.875-1.725V9.2h.313c.517 0 .937-.386.937-.862V3.163c0-.477-.42-.863-.938-.863h-.312v-.575C23.75.772 22.91 0 21.875 0ZM20 3.45H3.75v4.6H20v-4.6Z"
  />
</Svg>
  )
  


}
  
 
export default SvgComponent
