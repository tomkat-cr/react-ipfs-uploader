import React, { useState } from 'react'
import {
    Form,
    Button,
    Badge,
    ProgressBar,
    Container,
    Alert
} from 'react-bootstrap'
import { ipfs, ipfsPublicURL } from './Common'

export const FileUpload = ({ setUrl }) => {
    const [file, setFile] = useState({})
    const [fileUrl, setFileUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [uploaded, setUploaded] = useState(false)
    const [uploadError, setUploadError] = useState('')
    const [show, setShow] = useState(false)
    const uploadFile = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            const added = await ipfs.add(file)
            const url = `${ipfsPublicURL}/${added.path}`
            setUrl(url)
            setFileUrl(url)
            setUploaded(true)
        } catch (err) {
            setUploadError('Error uploading the file: ' + String(err))
            console.log('Error uploading the file: ', err)
            setShow(true)
        }
        setLoading(false)
    }
    const preUpload = (e) => {
        if (e.target.value !== '') {
            setFile(e.target.files[0])
        } else {
            setFile({})
        }
    }
    const fileAndUploadButton = () => {
        if (file.name) {
            if (!loading) {
                return (
                    <div>
                        <h5>
                            {file.name} <Badge pill>{file.size} kb</Badge>
                        </h5>

                        {uploaded ? (
                            <h5>
                                ✅{' '}
                                <a
                                    href={fileUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    File
                                </a>{' '}
                                Uploaded Successfully ✅
                            </h5>
                        ) : (
                            <div>
                                {show ?
                                    <Alert
                                        variant='danger'
                                        onClose={() => setShow(false)}
                                        dismissible
                                    >
                                        <Alert.Heading>
                                            Oh snap! You got an error!
                                        </Alert.Heading>
                                        <p>{uploadError}</p>
                                    </Alert>
                                :
                                    ''
                                }
                                <Button type='submit'>Upload File</Button>
                            </div>
                        )}
                    </div>
                )
            } else {
                return (
                    <Container>
                        <h4>Uploading File</h4>
                        <ProgressBar animated now={100} />
                        <h4>Please Wait ...</h4>
                    </Container>
                )
            }
        }
    }
    return (
        <div>
            <Form onSubmit={uploadFile}>
                <Form.Control
                    required
                    type='file'
                    onChange={(e) => preUpload(e)}
                    className='mb-3'
                />
                {fileAndUploadButton()}
            </Form>
        </div>
    )
}
