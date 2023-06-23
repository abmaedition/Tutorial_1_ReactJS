import axios from 'axios'

const DeleteData = (url, id) => {
    axios.delete(url + id)
        .then(response => {
            return response
        }).then(response => {
            if (response.status === 200) {
                alert(`The Delete was successful`);

            }
        })
}

export default DeleteData
