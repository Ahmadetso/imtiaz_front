import api from './axios'

export async function fetchInvoices(page = 1) {
  const { data } = await api.get('/invoice/manage', {
    params: {
      page,
    },
  })
  if (data) {
   console.log(data)
      data.data.forEach(item => {
        item.date = new Date(item.date)
        item.due_date = new Date(item.due_date)
      })

    return data


  }
  console.error('an error occurred in the api file')
}
