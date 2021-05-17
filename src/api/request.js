import axios from 'axios'


// create an axios instance
const service = axios.create({
    baseURL: '/api',
    // withCredentials: true, // send cookies when cross-domain requests
    //timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        config.headers['Access-control-Allow-Origin'] = 'Origin';
        config.headers['Access-Control-Allow-Headers'] = 'Access-Control-Allow-Headers'
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const headers = response.headers
            //console.log(headers['content-type'])  将打印的值，也将后台返回的相应头设置成相同的，我的就是'application/octet-stream;charset=UTF-8',然后返回response
        if (headers['content-type'] && headers['content-type'].indexOf('application/octet-stream') != -1) {
            return response;
        }
        const res = response.data
        return res
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service