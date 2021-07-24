import { jsonPlaceholder, mysql, } from "../http-common";

class TutorialDataService {

    getJsonTest() {
        return jsonPlaceholder.get("comments");
    }

    getAll() {
        return mysql.get("/tutorials");
    }

    get(id) {
        return mysql.get(`/tutorials/${id}`);
    }

    create(data) {
        return mysql.post("/tutorials", data);
    }

    update(id, data) {
        return mysql.put(`/tutorials/${id}`, data);
    }

    delete(id) {
        return mysql.delete(`/tutorials/${id}`);
    }

    deleteAll() {
        return mysql.delete(`/tutorials`);
    }

    findByTitle(title) {
        return mysql.get(`/tutorials?title=${title}`);
    }
}

export default new TutorialDataService();