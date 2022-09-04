const projectId = process.env.REACT_APP_IPFS_PROJECT_ID
const projectSecret = process.env.REACT_APP_IPFS_API_KEY_SECRET

const ipfsClient = require('ipfs-http-client')
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')

export const ipfs = ipfsClient.create({
    host: process.env.REACT_APP_IPFS_HOST,
    port: process.env.REACT_APP_IPFS_PORT,
    protocol: process.env.REACT_APP_IPFS_PROTOCOL,
    headers: {
        authorization: auth
    }
})

if (process.env.REACT_APP_DEBUG) {
    console.log('>>--> projectId', projectId)
    console.log('>>--> projectSecret', projectSecret)
    console.log(
        '>>--> process.env.REACT_APP_IPFS_HOST',
        process.env.REACT_APP_IPFS_HOST
    )
    console.log(
        '>>--> process.env.REACT_APP_IPFS_PORT',
        process.env.REACT_APP_IPFS_PORT
    )
    console.log(
        '>>--> process.env.REACT_APP_IPFS_PROTOCOL',
        process.env.REACT_APP_IPFS_PROTOCOL
    )
    console.log(
        '>>--> process.env.REACT_APP_IPFS_PUBLIC_URL',
        process.env.REACT_APP_IPFS_PUBLIC_URL
    )
}

export const ipfsPublicURL = process.env.REACT_APP_IPFS_PUBLIC_URL
