import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAdmin = false
        this._isAuth = false
        this._data = []
        this._users = []
        this._page = 1
        this._totalCount = 0
        this._limit = 9
        makeAutoObservable(this)
    }

    setData(data){
        this._data = data
    }
    setIsAdmin(bool) {
        this._isAdmin = bool
    }
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUsers(users) {
        this._users = users
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }
    setLimit(limit) {
        this._limit = limit
    }

    get isData() {
        return this._data
    }
    get isAdmin() {
        return this._isAdmin
    }
    get isAuth() {
        return this._isAuth
    }
    get users() {
        return this._users
    }
    get page() {
        return this._page
    }
    get totalCount() {
        return this._totalCount
    }
    get limit() {
        return this._limit
    }
}