import {Module, VuexModule, Action} from "vuex-module-decorators";
import http from "@/plugins/http";

@Module
export default class StakeholderModule extends VuexModule {

    @Action
    async createStakeholder(subscriber: IUser, password: string): Promise<IJsonResponse> {
        return http.getJson("", {
            username: subscriber.username,
            password
        }, "POST");
    }

    @Action
    async updateStakeholder(subscriber: IUser): Promise<IJsonResponse> {
        return http.getJson("", {
            username: subscriber.username,
            id: subscriber.id
        }, "PATCH");
    }

    @Action
    async deleteStakeholder(subscriber: IUser): Promise<IJsonResponse> {
        return http.getJson("", {
            id: subscriber.id
        }, "DELETE");
    }

    @Action
    async getStakeholder(username: string): Promise<IJsonResponse> {
        return http.getJson("", {
            username
        }, "GET")
    }

    @Action
    async getStakeholders(query: string): Promise<IJsonResponse> {
        return http.getJson("", {
            query
        }, "GET")
    }

}