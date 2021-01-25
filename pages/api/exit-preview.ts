import { NextApiHandler } from "next"

const exitPreview: NextApiHandler = (req, res) => {
  let dest = typeof req.query.slug === "string" ? req.query.slug : "/"
  if (dest[0] !== "/") dest = "/" + dest
  res.clearPreviewData()
  res.writeHead(307, { Location: dest })
  res.end()
}

export default exitPreview
