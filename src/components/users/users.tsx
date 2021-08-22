import React, {FC, useEffect} from 'react';

import s from './users.module.css';
import User from "./user/user";
import MoreButton from "./moreButton/moreButton";
import Pagination from "./pagination/pagination";
import {PropsType} from "./usersContainer";
import SearchForm from "./searchForm/searchForm";


const Users: FC<PropsType> = ({requestUsersAndSetSearchConfig, ...props}) => {
    const totalPageCount = Math.ceil(props.totalUsersCount / props.pageUsersLimit)

    useEffect(() => {
        props.requestMoreUsers(props.currentPage, props.searchConfig.term, props.searchConfig.friend)

        return function end() {
            props.setCurrentPage(1);
            props.deleteUsers();
        }
    }, [])

    const moreUsers = () => {
        props.requestMoreUsers(props.currentPage + 1, props.searchConfig.term, props.searchConfig.friend)

    }
    const users = props.users.map((user) =>
        <User name={user.name} photo={user.photos.small} key={user.id}
              status={user.status} id={user.id} toggleFollowed={props.toggleFollowed} followed={user.followed}/>
    );

    return (
        <div className={s.users}>
            <SearchForm requestUsersAndSetSearchConfig={requestUsersAndSetSearchConfig} />
            <Pagination currentPage={props.currentPage} totalPageCount={totalPageCount}
                        setCurrentPage={props.setCurrentPage}
                        getItems={props.requestUsers}/>
            {users}
            <MoreButton isFetching={props.isFetching} currentPage={props.currentPage}
                        totalPageCount={totalPageCount}
                        moreItems={moreUsers} />
        </div>
    );
}

export default Users;