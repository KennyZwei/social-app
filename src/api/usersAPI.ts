import {DefaultOperationType, instance} from "./api";
import {UserType} from "../redux/reducers/usersReducer";

type GetUsersType = {
    items:Array<UserType>
    totalCount:number
    error:string | null
}

export const usersAPI = {
    getUsers(currentPage: number, term:string, friend:boolean | null) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&term=${term}&friend=${friend}`).then(response => response.data);
    },
    follow(id: number) {
        return instance.post<DefaultOperationType>(`follow/${id}`).then(response => response.data);
    },
    unfollow(id: number) {
        return instance.delete<DefaultOperationType>(`follow/${id}`).then(response => response.data);
    }
}