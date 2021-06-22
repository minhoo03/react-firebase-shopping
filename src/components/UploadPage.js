import React, { useState } from 'react'
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap'

export default function UploadPage() {
    return (
        <div className="uploadPage">
            <form>

                {/* <FileUpload /> */}
                <br />
                <br />
                <label>이름</label>
                <InputGroup className="mb-3">
                    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                </InputGroup>
                <br />
                <br />
                <label>설명</label>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <br />
                <br />
                <label>가격($)</label>
                <InputGroup className="mb-3">
                    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                </InputGroup>
                <br />
                <br />

                <Button>
                    확인
                </Button>
            </form>
        </div>
    )
}
