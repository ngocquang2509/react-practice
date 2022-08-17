import axios from "axios";

const ITEM_API_URL = "http://localhost:3001/api/items";

class ItemService {
    getItem() {
        return axios.get(ITEM_API_URL)
    }

    createItem(item) {
        return axios.post(ITEM_API_URL, item)
    }

    getItemById(id) {
        return axios.post(ITEM_API_URL + "/" + id)
    }

    updateItem(id, item) {
        return axios.put(ITEM_API_URL + "/" + id, item)
    }

    deleteItem(id) {
        return axios.delete(ITEM_API_URL + "/" + id)
    }
}

export default new ItemService();