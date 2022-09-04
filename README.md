# react-ipfs-uploader-cr

React component enabling a file, multiple files or a folder to be uploaded to IPFS. Includes implementations for  Image, PDF, Text, and other filetypes

[![NPM](https://img.shields.io/npm/v/react-ipfs-uploader-cr.svg)](https://www.npmjs.com/package/react-ipfs-uploader-cr)
![downloads](https://img.shields.io/npm/dt/react-ipfs-uploader-cr.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

### Install with npm

```bash
npm install react-ipfs-uploader-cr
```

### Install with yarn

```bash
yarn add react-ipfs-uploader-cr
```

## Prepare your project

If there's no `.env` file, copy a template from `examples/.env.example`:

```shell
cp ./node_modules/react-ipfs-uploader-cr/examples/.env.example .env
vi .env
```

if your proyect already has an `.env` file, add these variables:

```shell
REACT_APP_IPFS_PROJECT_ID=
REACT_APP_IPFS_API_KEY_SECRET=
REACT_APP_IPFS_HOST=ipfs.infura.io
REACT_APP_IPFS_PORT=5001
REACT_APP_IPFS_PROTOCOL=https
REACT_APP_IPFS_PUBLIC_URL=https://ipfs.infura.io/ipfs
```

To enable the `.env` file variables read in React, it's necesary to run the app by making a building and run with a JS server like express.

- Install dependencies:

```shell
npm install express
```

- Create a server.js file

```js
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

```json
  "scripts": {
    "start": "./node_modules/react-scripts/bin/react-scripts.js build && node server.js",
```

## Test with a local IPFS node

- Node version

Make sure your node version is 17 or above.

```shell
node --version
```

If the node version on your system is below 17, there's a way to switch the node version without uninstall and install it, by using a node version switcher called `nvm`.

If `nvm` is not installed on your system, install it by:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
ls -la ~/.nvm
cat ~/.zshrc
. ~/.zshrc
```

NOTE: instructions were taken from:<br/>
<https://github.com/nvm-sh/nvm><br/>

Then install node 17:

```shell
nvm install 17
npm -v
```

If you want to switch to node 17:

```shell
nvm use 17
```

- Install the dependencies:

```shell
npm install -g ipfs
```

NOTE: instructions were taken from:<br/>
<https://github.com/ipfs/js-ipfs><br/>

Then enable CORS:

```shell
jsipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin  '["http://127.0.0.1:3001"]'
jsipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "POST", "GET"]'
```

NOTE: instructions were taken from:<br/>
<https://github.com/ipfs/js-ipfs/blob/master/docs/CORS.md><br/>

Finally start the IPFS local server:

```shell
jsipfs daemon
```

There'll be an output like:

```shell
Initializing IPFS daemon...
js-ipfs version: x.x.x
System version: x64/darwin
Node.js version: x.x.x
Swarm listening on /ip4/127.0
.... more output
```

Edit the `.env` file and assign the `REACT_APP_IPFS_...` variables exactly as showed here:

```shell
REACT_APP_IPFS_PROJECT_ID=
REACT_APP_IPFS_API_KEY_SECRET=
REACT_APP_IPFS_HOST=127.0.0.1
REACT_APP_IPFS_PORT=5002
REACT_APP_IPFS_PROTOCOL=http
REACT_APP_IPFS_PUBLIC_URL=http://127.0.0.1:9090/ipfs
```
<br/>

> ### WARNING

>Anything uploaded to your local IPFS node will be available to the public on <https://ipfs.io/ipfs/> with the same hash created when a file, group of files or directory are uploaded. So be careful on the test files you upload. It applies to any IPFS service used (Infura, Pinata, local node).<br/>
For more information, visit:<br/>
<https://docs.ipfs.tech/concepts/privacy-and-encryption/#enhancing-your-privacy><br />
https://docs.ipfs.tech/concepts/privacy-and-encryption/#encryption-best-practices

<br />

## Test with Infura

- Go to this URL and register a new account (just in case you don't have one):

<https://infura.io/register>

- Create your IPFS project

NETWORK<br/>
`IPFS`

NAME<br/>
`My IPFS Project`

- Then click to `CREATE PROJECT` button.

- Go to the dashboard

- Click on `MANAGE KEY` button on the IPFS project's row.

- Look for the `PROJECT SUMMARY` section.

- Copy the `PROJECT ID`. It'll be assigned in the `REACT_APP_IPFS_PROJECT_ID` variable.

- Copy the `API KEY SECRET`. It'll be assigned into the `REACT_APP_IPFS_API_KEY_SECRET` variable.

Assign the `.env` file variables with the copied values:

```shell
REACT_APP_IPFS_PROJECT_ID=XXXXX
REACT_APP_IPFS_API_KEY_SECRET=XXXX
```

The rest of the values can remain the same.

## Start the React app

### Start with npm

```bash
npm start
```

### Start with yarn

```bash
yarn start
```

And load the app on the Browser:

<http://127.0.0.1:3001/>

## Features

## Single File Upload Components

1 . FileUpload: Uploads the selcted File and returns the URL after uploading the file. <br />
2 . ImageUpload: Shows the user a preview of the selected Image and returns the URL after uploading. <br />
3 . PdfUpload: Shows the user a preview of the selected PDF and returns the URL after uploading. <br />
4 . TextUpload: Returns the URL of the Text after uploading. <br />

## Multiple Files Upload Components

1 . MultipleFilesUpload: Uploads the selcted Files and returns the URL after uploading the files. <br />
2 . FolderUpload: Uploads the selected Folder and returns the URL after uploading the folder. <br />
<br />

## Usage

1 . Declare an `useState` hook that can hold a string as its current state. <br/>
2 . Pass the `setFunction` to the component you are using ie. `setUrl={setFunction}` <br/>
3 . As you upload the file , files or folder the url will be returned.
<br /><br />

> ### FileUpload: Uploads the selcted File and returns the URL after uploading the file

> Example: [./example/src/components/ExampleTabs.js](./example/src/components/ExampleTabs.js) | Tab eventKey='FileUpload'

```jsx
// FileUpload Component: Uploads the selcted File and returns the URL after uploading the file.
import React, { useState } from 'react'
import { FileUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [fileUrl, setFileUrl] = useState('')

    return (
        <div>
            <FileUpload setUrl={setFileUrl} />
            FileUrl: <a
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
<br />

> ### MultipleFilesUpload: Uploads Multiple Files and returns the URL after uploading the files

> Example: [./example/src/components/ExampleTabs.js](./example/src/components/ExampleTabs.js) | Tab eventKey='MultipleFilesUpload'

```jsx
// MultipleFilesUpload Component: Uploads Multiple files to IPFS and returns the URL
import React, { useState } from 'react'
import { MultipleFilesUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [multipleFilesUrl, setMultipleFilesUrl] = useState('')

    return (
        <div>
            <MultipleFilesUpload setUrl={setMultipleFilesUrl} />
            MultipleFilesUrl: <a
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
<br />

> ### FolderUpload: Uploads Folder and returns the URL after uploading the folder

> Example: [./example/src/components/ExampleTabs.js](./example/src/components/ExampleTabs.js) | Tab eventKey='FolderUpload'

```jsx
// FolderUpload Component: Uploads a Folder to IPFS and returns the URL
import React, { useState } from 'react'
import { FolderUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [folderUrl, setFolderUrl] = useState('')

    return (
        <div>
            <FolderUpload setUrl={setFolderUrl} />
            FolderUrl: <a
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
<br />

> ### ImageUpload: Shows the user a preview of the selected Image and returns the URL after uploading

> Example: [./example/src/components/ExampleTabs.js](./example/src/components/ExampleTabs.js) | Tab eventKey='ImageUpload'

```jsx
// ImageUpload: Shows the user a preview of the selected Image and returns the URL after uploading.
import React, { useState } from 'react'
import { ImageUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [imageUrl, setImageUrl] = useState('')

    return (
        <div>
            <ImageUpload setUrl={setImageUrl} />
            ImageUrl: <a
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
<br />

> ### PdfUpload: Shows the user a preview of the selected PDF and returns the URL after uploading

> Example: [./example/src/components/ExampleTabs.js](./example/src/components/ExampleTabs.js) | Tab eventKey='PdfUpload'

```jsx
// PdfUpload: Shows the user a preview of the selected PDF and returns the URL after uploading.
import React, { useState } from 'react'
import { PdfUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [pdfUrl, setPdfUrl] = useState('')

    return (
        <div>
            <PdfUpload setUrl={setPdfUrl} />
            Pdfurl: <a href={pdfUrl} target='_blank' rel='noopener noreferrer'>
                {pdfUrl}
            </a>
        </div>
    )
}

export default YourComponent
```
<br />
    
> ### TextUpload: Returns the URL of the Text after uploading

> Example: [./example/src/components/ExampleTabs.js](./example/src/components/ExampleTabs.js) | Tab eventKey='TextUpload'

```jsx
// TextUpload: Returns the URL of the Text after uploading
import React, { useState } from 'react'
import { Textupload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [textUrl, setTextUrl] = useState('')

    return (
        <div>
            <TextUpload setUrl={setTextUrl} />
            TextUrl: <a
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

NPM Package: <https://www.npmjs.com/package/react-ipfs-uploader-cr> <br/>
GitHub Repository: <https://github.com/tomkat-cr/react-ipfs-uploader-cr> <br/>
Forked from: <https://github.com/yash-deore/react-ipfs-uploader> <br/>

## License

MIT © [tomkat-cr](https://github.com/tomkat-cr)

> ### Made with react, create-react-library, react-bootstrap, ipfs-http-client, it-all
