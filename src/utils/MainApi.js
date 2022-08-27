class MainApi {
    constructor({address, token}) {
        this.address = address;
        this.token = token;
    }

    _checkResponse(result) {
        if (result.ok) {
            return result.json()
        } else {
            return Promise.reject(`Ошибка: ${result.status}`);
        }
    }

    register(password, email) {
        return fetch(`${this.address}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({password, email})
        })
        .then(this._checkResponse)
    };

    authorize(password, email) {
        return fetch(`${this.address}/signin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({password, email})
        })
        .then(this._checkResponse)
      };

    getUserInfo(token) {
        return fetch(`${this.address}/users/me`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        .then(this._checkResponse)
    }

    getInitialCards() {
        return fetch(`${this.address}/cards`, {
            method: 'GET',
            headers: {
                'authorization': this.token
            }
        })
        .then(this._checkResponse)
    }

    addNewCard(card) {
        return fetch(`${this.address}/cards`, {
            method: 'POST',
            headers: {
                'authorization': this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: card.message,
                link: card.link,
                createdAt: card.date
            })
        })
        .then(this._checkResponse)
    }

    deleteCard(cardId) {
        return fetch(`${this.address}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                'authorization': this.token
            }
        })
        .then(this._checkResponse)
    }

    uploadCard(card) {
        return fetch(`${this.address}/upload`, {
            method: 'POST',
            body: card,
        })
        .then(this._checkResponse)
    }

    setToken(jwt) {
        return setTimeout(() => {
            return jwt
        });
    }
}

const mainApi = new MainApi({
    address: 'http://localhost:5000',
    token: `Bearer ${localStorage.getItem('jwt')}`,
  });

export default mainApi;