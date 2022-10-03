class Fetch2 {

    static get(url, params = {}) {

        return Fetch2.request('GET', url, params);
        
    }

    static delete(url, params = {}) {

        return Fetch2.request('DELETE', url, params);
        
    }

    static put(url, params = {}) {

        return Fetch2.request('PUT', url, params);
        
    }

    static post(url, params = {}) {

        return Fetch2.request('POST', url, params);
        
    }

    static request(method, url, params = {}) {

        return new Promise((resolve, reject) => {

            let request;

            switch (method.toLowerCase()) {
                case 'get': 
                    request = url;
                break;
                default:
                    request = new Request(url, {
                        method,
                        body: JSON.stringify(params),
                        headers: new Headers({
                            'Content-Type': 'application/json'
                        })
                    });
            }

            fetch(request).then(response => {

                response.json().then(json => {

                    resolve(json);

                }).catch(e => {

                    reject(e);

                });

            });

        }).catch(e => {

            reject(e);

        });;

    }

}