import {PhotosType, ProfileType} from "../redux/reducers/profileReducer";
import {DefaultOperationType, instance} from "./api";

type SaveImageDataType = {
    photos: PhotosType
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`).then(response => response.data);
    },
    setProfile(profile: ProfileType) {
        return instance.put<DefaultOperationType>('profile', profile).then(response => response.data);
    },
    getStatus(userId: number) {
        return instance.get<string | null>(`profile/status/${userId}`).then(response => response.data);
    },
    setStatus(status: string | null) {
        return instance.put<DefaultOperationType>('profile/status', {status: status}).then(response => response.data)
    },
    savePhoto(photoURL: File) {
        const formatData = new FormData();
        formatData.append('image', photoURL);
        return instance.put<DefaultOperationType<SaveImageDataType>>('profile/photo', formatData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    }
}