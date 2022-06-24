import React from "react";

import { instance } from '../config/variables/api'

export default function useApi() {
    const get = async (url, token) => {
        try {
            const { data } = await instance.get(
                url, {
                    headers: token
                        ? { authorization: `Bearer ${token}` }
                        : {}
            })
            return data
        } catch (err) {
            throw new Error(err.response.data.message)
        }
    }
    const post = async (url, data, token) => {
        try {
            const resp = await instance.post(url, data, {
                headers: token ? {
                    authorization: `Bearer ${token}`
                } : {}
            })
            return resp
        } catch (err) {
            throw new Error(err.response.data.message)
        }
    }
    const put = async (url, data, token) => {
        try {
            const resp = await instance.put(url, data, { headers: { authorization: `Bearer ${token}` } })
            return resp
        } catch (err) {
            throw new Error(err.response.data.message)
        }
    }
    const del = async (url, token) => {
        try {
            const resp = await instance.delete(url, {
                headers: token ? {
                    authorization: `Bearer ${token}`
                } : {}
            })
            return resp
        } catch (err) {
            throw new Error(err.response.data.message)
        }
    }

    return { get, post, put, del }
}