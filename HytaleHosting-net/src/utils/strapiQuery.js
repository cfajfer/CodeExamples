import axios from 'axios';

export const strapiQuery = async (params, jwt = null, method = 'get', data = null) => {
    let url = `${process.env.NEXT_PUBLIC_BLOG_API}${params}`;

    let headers = jwt ? { 'Authorization': `Bearer ${jwt}`} : null;

    let response = await axios({
        method: method,
        url: url,
        headers,
        data
    }).then(res => {
        let obj = {};
        switch (res.status) {
            case 200:
                obj.error = false;
                obj.data = res.data;
                break;
            default:
                obj.error = true;
                obj.msg = "error opccured";
                break;
        }

        return obj;
    }).catch(err => {
        return {
            error: true,
            msg: err.response.data.message
        }
    });

    return response;
}