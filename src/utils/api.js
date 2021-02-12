class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(res.statusText)
    }
  }

  //функция: получить данные пользователя
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(this._handleResponse)
  }

  //функция: редакировать провиль
  updateUser({name, info}) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: info
      })
    })
      .then(this._handleResponse)
  }

  //фуекция: редактировать аватар провиля
  updateAvatar({link}) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({avatar: link})
    })
      .then(this._handleResponse) 
  }

  //функция: получить карточки с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then(this._handleResponse)
 
  }

  //функция: добавить новую карточку
  addCard({name, link}) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    }) 
      .then(this._handleResponse)
  
  }

  //функция: удалить карточку
  deleteCard(idCard) {
    return fetch(`${this._baseUrl}/cards/${idCard}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._handleResponse)
  }

  changeLikeCardStatus(idCard, value) {
    return fetch(`${this._baseUrl}/cards/likes/${idCard}`, {
      method: value ? 'PUT' : 'DELETE',
      headers: this._headers
    })
      .then(this._handleResponse)
  }
};

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
  headers: {
    authorization: '931abef9-5903-4d83-895a-778706a224b0',
    'Content-Type': 'application/json'
  }
});

export default api;