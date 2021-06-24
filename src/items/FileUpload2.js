import React, { useState, useRef } from 'react'
import Dropzone from 'react-dropzone'
import firebase from '../firebase'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function FileUpload2() {

    const user = useSelector(state => state.user.currentUser)
    const inputOpenImageRef = useRef()
    const [imgState, setImgState] = useState('http://image.dongascience.com/Photo/2019/12/fb4f7da04758d289a466f81478f5f488.jpg')

    const handleOpenImageRef = () => {
        inputOpenImageRef.current.click()
    }

    const handleUploadImage = async (files) => {

        // let formData = new FormData()
        // console.log(formData)

        const metadata = { contentType: files.metadata }
        
        //.ref(테이블).child(로우:파일명).put({컬럼: file과 file 타입})
        try {
            let uploadTastSnapshot = await firebase.storage().ref()
            .child(`upload_image/${user.user.uid}`).put(files, metadata)

            let downloadURL = await uploadTastSnapshot.ref.getDownloadURL()

            console.log('downloadURL', downloadURL)

            setImgState(downloadURL)

        } catch (error) {
            alert('error!')
        }

    }

    return (
        <div>


            <div onClick={handleOpenImageRef} style={{width:"200px", height:"140px", background:"#000000"}}></div>
            <input accept="image/jpeg, image/png" type="file" style={{display:'none'}} ref={inputOpenImageRef} onChange={handleUploadImage}/>
            <img src={imgState} />

        </div>
    )
}
