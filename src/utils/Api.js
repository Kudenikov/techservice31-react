class Api {
    constructor({address}) {
        this.address = address;
    }

    _checkResponse(result) {
        if (result.ok) {
            return result.json()
        } else {
            return Promise.reject(`Ошибка: ${result.status}`);
        }
    }

    sendData({name, phone, message}) {
        return fetch(`${this.address}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, phone, message})
        })
        .then(this._checkResponse)
    }
}

const api = new Api({
    address: 'https://formspree.io/f/xknyqayv'
  });

export default api;