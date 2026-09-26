

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export async function checkHealth() {
  const res = await fetch(`${API_URL}/health`)
  if (!res.ok) {
    throw new Error(`Health check failed: ${res.status}`)
  }
  return res.json()
}

export async function runTransform({ file, text }) {
  const formData = new FormData()

  if (file) {
    formData.append('file', file)
  }
  if (text) {
    formData.append('text', text)

  }
  const res = await fetch(`${API_URL}/transform`, {
    method: 'Post',
    body: formData
  })
  if (!res.ok) {
    throw new Error(`Transfom failed: ${res.status}`)
  }
  return res.json()
}
