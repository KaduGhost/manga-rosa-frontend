import axios from "axios";
import { IHired, IHiredRegister } from "../types";

const api = axios.create({
  baseURL: "http://localhost:3333/hired",
});

class HiredController {

  async save(solicitacao: IHiredRegister): Promise<JSON> {
    try {
      let response = await api.post("/", solicitacao);
      return response.data;
    } catch (error:any) {
      return error.response.data
    }
  }

  async findAll(): Promise<JSON> {
    try {
      let response = await api.get("/");
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async findByName(name: string): Promise<JSON> {
    try {
      let response = await api.get("/findByName", { params: { name: name } });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async update(customer: IHired): Promise<JSON> {
    try {
      let response = await api.put("/", customer);
      return response.data;
    } catch (error:any) {
      return error.response.data
    }
  }
}

export default new HiredController();