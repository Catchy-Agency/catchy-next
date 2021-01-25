import { NextApiHandler } from 'next'

const preview: NextApiHandler = (req, res) => {
  let dest = typeof req.query.path === 'string' ? req.query.path : '/'
  if (dest[0] !== '/') dest = '/' + dest
  res.setPreviewData({})
  res.writeHead(307, { Location: dest })
  res.end()
}

export default preview
