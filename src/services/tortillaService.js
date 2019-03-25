import axios from 'axios';

class TortillaService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5000/api/tortillas',
    });
  }

  getAll() {
    return this.api.get('/')
      .then(({ data }) => data);
  }

  getById(id) {
    "// http://localhost:5000/api/tortillas/5c7fa0d4600f403d67f5d0f3"
    return this.api.get(`/${id}`)
      .then(({data}) => data);
  }

  editTortilla(tortilla) {
    console.log(tortilla)
    return this.api.put(`/${tortilla.id}`, tortilla)
    .then(res => res);
  }

  createTortilla(body) {
    return this.api.post('/', body)
      .then(({ data }) => data);
  }

  deleteTortilla(id) {
    return this.api.delete(`/${id}`)
      .then(({ data }) => data);
  }



}

const tortillaService = new TortillaService();

export default tortillaService;