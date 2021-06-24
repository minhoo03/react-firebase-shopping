import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import firebase from '../firebase'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function FileUpload() {

    const user = useSelector(state => state.user.currentUser)
    const [imgState, setImgState] = useState('http://image.dongascience.com/Photo/2019/12/fb4f7da04758d289a466f81478f5f488.jpg')

    const dropHandler = async (files) => {

        const metadata = { contentType: files.metadata }
        
        //.ref(테이블).child(로우:파일명).put({컬럼: file과 file 타입})
        try {
            let uploadTastSnapshot = await firebase.storage().ref()
            .child(`upload_image/${user.user.uid}`).put(files, metadata)

            let downloadURL = await uploadTastSnapshot.ref.getDownloadURL()

            console.log('downloadURL', downloadURL)

            setImgState(downloadURL)

        } catch (error) {
            alert(error)
        }

    }


    return (
        <div style={{ display: "flex", justifyContent: "space-between"}}>
            <Dropzone onDrop={dropHandler}>
                {({getRootProps, getInputProps}) => (
                    <section>
                    <div
                    style={{ width: 200, height: 140, border: "1px solid lightgray",
                             display: "flex", justifyContent: "center", alignItems: "center"}}
                    {...getRootProps()}>
                        <input {...getInputProps()} />
                        {/* <AiOutlinePlus style={{ fontSize : "3rem" }} /> */}
                    </div>
                    </section>
                )}
            </Dropzone>

            <img src={imgState} style={{width:'200px', height:'140px'}} alt="upload" />


        </div>
    )
}
