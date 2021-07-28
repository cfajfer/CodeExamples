export const checkStringLength = (str, min, max) => {
    if(typeof str != "string") {
        return {
            err: true,
            msg: `Not a string!`
        }
    };
    if(str.length > max) {
        return {
            err: true,
            msg: `Comment is ${str.length - max} characters too long! Try again with a shorter comment!`
        }
    }
    if(str.length < min) {
        if(min === 1) {
            return {
                err: true,
                msg: `You cannot post an empty comment!`
            }
        } else {
            return {
                err: true,
                msg: `Comment is ${min - str.length} characters short! Try again with a shorter comment!`
            }
        }
    }

    return { err: false };
}