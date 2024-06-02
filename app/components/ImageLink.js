import { useEffect, useState } from "react"

const ImageLink = ({ href }) => {
    const [image,setImage] = useState(href.thumbUrl)

    useEffect(() => {
        setTimeout(() => {
            setImage(href.thumbUrl)
        },1000)
    })
    return (
    <a>
      <img src={image} width={130} height={90} style={{margin:'5px'}}/>
    </a>
    )
 }

 export default ImageLink