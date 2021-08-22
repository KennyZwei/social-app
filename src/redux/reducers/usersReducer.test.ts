import usersReducer, {actions, SearchConfigType, UserType} from "./usersReducer";

const initState = {
    users: [{
        id: 1,
        name: 'name1',
        status: 'status1',
        photos: {
            small: null,
            large: null
        },
        followed: false,
        uniqueUrlName: null
    }, {
        id: 2,
        name: 'name2',
        status: 'status2',
        photos: {
            small: 'dsadsadsa',
            large: 'dsadsadsa'
        },
        followed: true,
        uniqueUrlName: null
    }, {
        id: 3,
        name: 'name3',
        status: 'status3',
        photos: {
            small: null,
            large: null
        },
        followed: false,
        uniqueUrlName: null
    }, {
        id: 4,
        name: 'name4',
        status: 'status4',
        photos: {
            small: null,
            large: null
        },
        followed: false,
        uniqueUrlName: null
    }] as Array<UserType>,
    totalUsersCount: 4,
    pageUsersLimit: 10,
    isFetching: false,
    currentPage: 1,
    searchConfig: {
        friend: null,
        term: ''
    } as SearchConfigType
}
let state = initState
beforeEach(() => {
    state = initState
})
test('success append users', () => {
    const users = [{
        id: 5,
        name: 'name5',
        status: 'status5',
        photos: {
            small: null,
            large: null
        },
        followed: false,
        uniqueUrlName: null
    },
        {
            id: 6,
            name: 'name6',
            status: 'status6',
            photos: {
                small: null,
                large: null
            },
            followed: false,
            uniqueUrlName: null
        }]
    const localState = usersReducer(state, actions.appendUsers(users))
    expect(localState.users.length).toBe(6)
})