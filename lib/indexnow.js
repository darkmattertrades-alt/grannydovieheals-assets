const https = require('https')
const xml2js = require('xml2js')

const sitemapUrl = 'https://www.grannydovieheals.com/sitemap.xml'
const host = 'www.grannydovieheals.com'
const key = 'cc67aadeb60d41d688f79cfde6a8fffc'
const keyLocation = 'https://www.grannydovieheals.com/cc67aadeb60d41d688f79cfde6a8fffc.txt'

const modifiedSinceDate = new Date(process.argv[2] || new Date().toISOString().split('T')[0])

if (isNaN(modifiedSinceDate.getTime())) {
  console.error('Invalid date. Use format YYYY-MM-DD')
  process.exit(1)
}

function fetchSitemap(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = ''
      res.on('data', (chunk) => { data += chunk })
      res.on('end', () => resolve(data))
    }).on('error', reject)
  })
}

function parseSitemap(xmlData) {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xmlData, (err, result) => {
      if (err) reject(err)
      else resolve(result)
    })
  })
}

function filterUrlsByDate(sitemap, date) {
  const urls = sitemap.urlset.url
  return urls
    .filter(url => url.lastmod && new Date(url.lastmod[0]) >= date)
    .map(url => url.loc[0])
}

function postToIndexNow(urlList) {
  const data = JSON.stringify({ host, key, keyLocation, urlList })
  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/IndexNow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(data)
    }
  }

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseData = ''
      res.on('data', (chunk) => { responseData += chunk })
      res.on('end', () => resolve({
        statusCode: res.statusCode,
        statusMessage: res.statusMessage,
        data: responseData
      }))
    })
    req.on('error', reject)
    req.write(data)
    req.end()
  })
}

async function main() {
  try {
    console.log(`[IndexNow] Fetching sitemap...`)
    const xmlData = await fetchSitemap(sitemapUrl)
    const sitemap = await parseSitemap(xmlData)
    const filteredUrls = filterUrlsByDate(sitemap, modifiedSinceDate)

    if (filteredUrls.length === 0) {
      console.log('[IndexNow] No new URLs found since', modifiedSinceDate.toISOString().split('T')[0])
      return
    }

    console.log(`[IndexNow] Submitting ${filteredUrls.length} URL(s):`)
    filteredUrls.forEach(url => console.log(' -', url))

    const response = await postToIndexNow(filteredUrls)
    console.log(`[IndexNow] Response: ${response.statusCode} ${response.statusMessage}`)

    if (response.statusCode === 200 || response.statusCode === 202) {
      console.log('[IndexNow] ✅ URLs submitted successfully')
    } else {
      console.error('[IndexNow] ❌ Submission failed:', response.data)
    }
  } catch (error) {
    console.error('[IndexNow] Error:', error.message)
    process.exit(1)
  }
}

main()
