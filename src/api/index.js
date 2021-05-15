import request from './request'

//上传代码文本到数据库
export function addText(query) {
    return request({
        url: `/addText`,
        params: {
            text: encodeURI(query)
        },
        method: 'post',
        // baseURL: 'http://81.71.138.29:8089' // 直接通过覆盖的方式
    })
}

export function look(query) {
    return request({
        url: `/shorten/${query}`,
        method: 'get',
        // baseURL: 'http://81.71.138.29:8089' // 直接通过覆盖的方式
    })
}