const projectId = process.env.REACT_APP_INFURA_PROJECT_ID
const projectSecret = process.env.REACT_APP_DEPLOYER_PRIVATE_KEY

const ipfsClient = require('ipfs-http-client')
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')

export const ipfs = ipfsClient.create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
})

console.log('>>--> projectId', projectId)
console.log('>>--> projectSecret', projectSecret)

export const ipfsPublicURL = 'https://ipfs.infura.io/ipfs'
