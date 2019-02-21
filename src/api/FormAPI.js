import axios from 'axios'

export const handleForm = async (form) => {
  let response

  try {
    response = axios({
      method: 'post',
      url: 'https://a5frqouxf3.execute-api.eu-west-2.amazonaws.com/latest/api/v1/submitform',
      data: form,
    })
  } catch (e) {
    console.error(e)
    return {
      status: 'error',
      message: 'Error sending message, please try again later.',
    }
  }

  if (response.status === 'success') {
    return {
      status: 'success',
      message: 'Message received successfully!',
    }
  } else {
    return {
      status: 'error',
      message: 'Error sending message, please try again later.',
    }
  }
}
