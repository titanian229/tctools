// eslint-disable-next-line no-unused-vars
const API = {
    sendToSearch: (search) => fetch(`/api/search/${search}`)
        .then((res) => res.json())
        .catch((err) => err.json()),
};
