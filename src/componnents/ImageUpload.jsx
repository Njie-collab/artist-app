// import React from 'react'
// import {useState} from "react"

// const ImageUpload = () => {
//     const [upload ,setUpload]=useState("")
//     const [loading ,setLoading ] =useState(false)

//     const uploadPics = (e) =>{
//         const files =e.traget.files
//         const data =new FormData()
//         data.append('file',files[0] )
//         data.append('upload_preset'," ")
//         setLoading(true)
//         const response =await fetch()
//     }

//   return (
//     <div>
//     <h1>UploadImages</h1>
//     <input
//     type="file"
//     name="file"
//     placeholder="uploadpics"
//     onChange={uploadPics}
    
//     />
  
//     </div>
//   )
// }

// export default ImageUpload