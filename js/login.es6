let login = (username, password) => {
    if(username !== 'admin' || password !== 'radical') {
        console.log('incorret login');
    }
};

// login('admin','idunno');
export {login}