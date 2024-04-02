const token = process.env.GITHUB_TOKEN || ''
if (!token) throw new Error('GITHUB_TOKEN is required')

const username = '<github-username>'
const startDate = "2023-04-01"
const endDate = "2024-04-30"
const headers = {
  Accept: 'application/vnd.github+json',
  Authorization: `Bearer ${token}`,
  'X-Github-Api-Version': '2022-11-28'
}

const endpoint = `https://api.github.com/search/issues?q=created:${startDate}..${endDate}+type:pr+author:${username}&per_page=300`

async function fetchMyPrs(url, headers) {
  const response = await fetch(url, { headers })
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response
}

async function getMyPrs(endpoint, headers) {
  const response = await fetchMyPrs(endpoint, headers)
  const data = await response.json()
  const prs = data.items.map(pr => {
    return {
      title: pr.title,
      created_at: pr.created_at,
      closed_at: pr.closed_at,
      url: pr.html_url,
      body: pr.body?.substring(0, 400) + "..." || "",
    }
  })

  console.log({
    total_count: data.total_count,
    prs
  })
  return data
}

getMyPrs(endpoint, headers)
