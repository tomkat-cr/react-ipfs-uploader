# react-ipfs-uploader-cr

## React component enabling a file (Images, PDFs, Text, etc.), multiple files or a folder to be uploaded to IPFS

[![NPM](https://img.shields.io/npm/v/react-ipfs-uploader-cr.svg)](https://www.npmjs.com/package/react-ipfs-uploader-cr)
![downloads](https://img.shields.io/npm/dt/react-ipfs-uploader-cr.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

### npm

```bash
npm install react-ipfs-uploader-cr
```

### yarn

```bash
yarn add react-ipfs-uploader-cr
```

## Register an Infura account

- Go to this URL:

https://infura.io/register

- Create your first project

NETWORK<br/>
IPFS

NAME<br/>
My IPFS Project

Then click to CREATE PROJECT button.

- Go to the dashboard

- Click on MANAGE KEY on the IPFS project's row.

- Look for the PROJECT SUMMARY section.

- Copy the PROJECT ID. It'll be assigned into the INFURA_PROJECT_ID `.env` file variable.

- Copy the API KEY SECRET. It'll be assigned into the DEPLOYER_PRIVATE_KEY `.env` file variable.

## Install project

```shell
cp ./node_modules/react-ipfs-uploader-cr/examples/.env.example .env
vi .env
```

Assign the variables with the copied values:

```shell
INFURA_PROJECT_ID=XXXXX
DEPLOYER_PRIVATE_KEY=XXXX
```

To enable the .env file variables read in react, it's necesary to run the app by making a building and run with a JS server like express.

- Install dependencies:

```shell
npm install express
```

- Create a server.js file

```shell
// Express Server to allow react reading environment variables with process.env
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log("Listening on Port", port)) 

```

- Replace the "start" script in the `package.json` file:

```shell
  "scripts": {
    "start": "./node_modules/react-scripts/bin/react-scripts.js build && node server.js",
```

## Features

## Single File Upload Components

1 . FileUpload : Uploads the selcted File and returns the URL after uploading the file . <br />
2 . ImageUpload : Shows the user a preview of the selected Image and returns the URL after uploading . <br />
3 . PdfUpload : Shows the user a preview of the selected PDF and returns the URL after uploading . <br />
4 . TextUpload : Returns the URL of the Text after uploading . <br />

## Multiple Files Upload Components

1 . MultipleFilesUpload : Uploads the selcted Files and returns the URL after uploading the files . <br />
2 . FolderUpload : Uploads the selected Folder and returns the URL after uploading the folder . <br />

## Usage

1 . Declare an `useState` hook that can hold a string as its current state . <br/>
2 . Pass the `setFunction` to the component you are using ie. `setUrl={setFunction}` <br/>
3 . As you upload the file , files or folder the url will be returned .

> ### FileUpload : Uploads the selcted File and returns the URL after uploading the file .

> Example : https://codesandbox.io/s/fileupload-81g84

```jsx
// FileUpload Component : Uploads the selcted File and returns the URL after uploading the file .
import React, { useState } from 'react'
import { FileUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [fileUrl, setFileUrl] = useState('')

    return (
        <div>
            <FileUpload setUrl={setFileUrl} />
            FileUrl : <a
                href={fileUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {fileUrl}
            </a>
        </div>
    )
}

export default YourComponent
```

> ### MultipleFilesUpload : Uploads Multiple Files and returns the URL after uploading the files .

> Example : https://codesandbox.io/s/multiplefilesupload-uf6yw

```jsx
// MultipleFilesUpload Component : Uploads Multiple files to IPFS and returns the URL
import React, { useState } from 'react'
import { MultipleFilesUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [multipleFilesUrl, setMultipleFilesUrl] = useState('')

    return (
        <div>
            <MultipleFilesUpload setUrl={setMultipleFilesUrl} />
            MultipleFilesUrl : <a
                href={multipleFilesUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {multipleFilesUrl}
            </a>
        </div>
    )
}

export default YourComponent
```

> ### FolderUpload : Uploads Folder and returns the URL after uploading the folder .

> Example : https://codesandbox.io/s/folderupload-y6j2b

```jsx
// FolderUpload Component : Uploads a Folder to IPFS and returns the URL
import React, { useState } from 'react'
import { FolderUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [folderUrl, setFolderUrl] = useState('')

    return (
        <div>
            <FolderUpload setUrl={setFolderUrl} />
            FolderUrl : <a
                href={folderUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {folderUrl}
            </a>
        </div>
    )
}

export default YourComponent
```

> ### ImageUpload : Shows the user a preview of the selected Image and returns the URL after uploading .

> Example : https://codesandbox.io/s/imageupload-65kpl

```jsx
// ImageUpload : Shows the user a preview of the selected Image and returns the URL after uploading .
import React, { useState } from 'react'
import { ImageUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [imageUrl, setImageUrl] = useState('')

    return (
        <div>
            <ImageUpload setUrl={setImageUrl} />
            ImageUrl : <a
                href={imageUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {imageUrl}
            </a>
        </div>
    )
}

export default YourComponent
```

> ### PdfUpload : Shows the user a preview of the selected PDF and returns the URL after uploading .

> Example : https://codesandbox.io/s/pdfupload-ce4ch

```jsx
// PdfUpload : Shows the user a preview of the selected PDF and returns the URL after uploading .
import React, { useState } from 'react'
import { PdfUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [pdfUrl, setPdfUrl] = useState('')

    return (
        <div>
            <PdfUpload setUrl={setPdfUrl} />
            Pdfurl : <a href={pdfUrl} target='_blank' rel='noopener noreferrer'>
                {pdfUrl}
            </a>
        </div>
    )
}

export default YourComponent
```

> ### TextUpload : Returns the URL of the Text after uploading

> Example : https://codesandbox.io/s/textupload-vpcst

```jsx
// TextUpload : Returns the URL of the Text after uploading
import React, { useState } from 'react'
import { Textupload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [textUrl, setTextUrl] = useState('')

    return (
        <div>
            <TextUpload setUrl={setTextUrl} />
            TextUrl : <a
                href={textUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {textUrl}
            </a>
        </div>
    )
}

export default YourComponent
```

## Links

NPM Package : https://www.npmjs.com/package/react-ipfs-uploader-cr <br/>
GitHub Repository : https://github.com/tomkat-cr/react-ipfs-uploader <br/>

## License

MIT © [tomkat-cr](https://github.com/tomkat-cr)

> ### Made with react, create-react-library, react-bootstrap, ipfs-http-client, it-all
