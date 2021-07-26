import axios from '@/config/axios'

export const getTodos = async () => {
  try {
    const response = await axios.get('/todos')
    return response.data
  } catch (error) {
    throw error
  }
}
