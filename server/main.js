import http from 'http'
import fs from 'fs'
import zlib from 'zlib'
import crypto from 'crypto'
import path from 'path'

const server = http.createServer((req, res) => {
  const filePath = `dist${req.url === '/' ? '/index.html' : req.url}`
  const fullFilePath = path.resolve(filePath)

  fs.access(fullFilePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.end('<h1>404 Not Found</h1>')
      return
    }

    fs.readFile(fullFilePath, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' })
        res.end('<h1>500 Internal Server Error</h1>')
        return
      }

      // Generate ETag based on file content
      const etag = crypto.createHash('sha256').update(content).digest('hex')
      if (req.headers['if-none-match'] === etag) {
        res.writeHead(304)
        res.end()
        return
      }

      const ext = path.extname(fullFilePath)
      let contentType = 'text/html'
      switch (ext) {
        case '.css':
          contentType = 'text/css'
          break
        case '.js':
          contentType = 'application/javascript'
          break
        case '.json':
          contentType = 'application/json'
          break
        case '.png':
          contentType = 'image/png'
          break
        case '.jpg':
        case '.jpeg':
          contentType = 'image/jpeg'
          break
        case '.webp':
          contentType = 'image/webp'
          break
        case '.webm':
          contentType = 'video/webm'
          break
        case '.woff2':
          contentType = 'font/woff2'
          break
        case '.ico':
          contentType = 'image/x-icon'
          break
        case '.svg':
          contentType = 'image/svg+xml'
          break
        default:
          contentType = 'text/html'
      }

      const acceptEncoding = req.headers['accept-encoding']
      if (acceptEncoding && acceptEncoding.includes('br')) {
        // Client supports Brotli
        const compressed = zlib.brotliCompressSync(content)
        res.writeHead(200, {
          'Content-Type': contentType,
          'Content-Encoding': 'br',
          ETag: etag,
        })
        res.end(compressed)
      } else {
        // Client does not support Brotli, send uncompressed content
        res.writeHead(200, {
          'Content-Type': contentType,
          ETag: etag,
        })
        res.end(content)
      }
    })
  })
})

const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
