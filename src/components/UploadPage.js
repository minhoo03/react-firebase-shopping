import React, { useState } from 'react'
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap'
import FileUpload from '../items/FileUpload'

export default function UploadPage() {
    return (
        <div className="uploadPage" style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <form>

                <FileUpload />
                <InputGroup className="mb-3">
                    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="제목" className="mb-input" />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="가격" className="mb-input" />
                </InputGroup>

                <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="상품에 대한 게시글 내용을 작성해주세요." className="mb-textarea" />
                </Form.Group>

                <Button className="mb-button">
                    확인
                </Button>
            </form>
        </div>
    )
}
