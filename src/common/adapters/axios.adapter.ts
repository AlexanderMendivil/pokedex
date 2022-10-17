import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "../interfaces/http-adapter.interface";

@Injectable()
export class AxiosAdapter implements HttpAdapter{
    private readonly httpAxios: AxiosInstance = axios;
    async get<T>(url: string): Promise<T> {
        try{
            const { data } = await this.httpAxios.get<T>(url);
            return data;
        }catch(e){
            throw new Error('This is an error, check logs');
        }
    }

}