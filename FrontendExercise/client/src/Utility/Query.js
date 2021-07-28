import axios from 'axios';

const Query = async (endpoint, method, data) => {

    let response = await axios({
        method: method,
        url: 'http://localhost' + endpoint,
        data: data,
        headers: {'Content-Type': 'application/json'}
    }).then(res => {
        let obj = {};
        switch (res.status) {
            //Success
            case 200:
                obj.error = false;
                obj.data = res.data;
                break;
            //Unknown Error
            default:
                obj.error = true;
                obj.msg = "error occured";
                break;
        }
        return obj;
    }).catch(err => {
        //Default Error
        return {
            error: true,
            msg: "error occured"
        }
    });

    return response;
}

export default Query;