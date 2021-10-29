import axios from "axios";
import { IHired, IHiredRegister } from "../types";

const api = axios.create({
  baseURL: "http://localhost:3002/hired",
});

class HiredController {

  async save(solicitacao: IHiredRegister): Promise<JSON> {
    try {
      let response = await api.post("/", solicitacao);
      return response.data;
    } catch (error) {
      throw error;
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

  async findById(id: string): Promise<JSON> {
    try {
      let response = await api.get("/findById", { params: { _id: id } });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async update(customer: IHired): Promise<JSON> {
    try {
      let response = await api.put("/", customer);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new HiredController();




