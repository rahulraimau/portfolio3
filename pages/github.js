// pages/api/github.js
export default async function handler(req, res) {
  const token = process.env.GITHUB_TOKEN;

  const response = await fetch('https://api.github.com/users/rahulraimau/repos', {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json'
    }
  });

  const data = await response.json();
  res.status(200).json(data);
}
