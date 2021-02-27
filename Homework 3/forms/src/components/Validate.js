export const fieldValidator = (name, value, callback) => {

    const emailValidator = () => {
       if (value.trim() === ''){
           return callback({[name]:'Email required'});
       } else if(
           /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
               value
           )){
           return callback({[name]:null});
       }
       return callback({[name]: 'Invalid email'})
    }

    const passwordValidator = () => {
        if (value.trim() === '') {
            return callback({[name]:'Password is required'});
        } else if (value.length < 6) {
            return callback({[name]:'Password is too short'});
        } 
        return callback({[name]:null});
    }

    const checkBoxValidator = () => {
       if (value === false) {
           return callback({[name]:'You didn\'t agree to Privacy&Policy'});
       }
        return callback({[name]:null});
    }

    name === 'login'?  emailValidator():
    name === 'password'? passwordValidator() : checkBoxValidator();

}