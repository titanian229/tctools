const searchField = document.querySelector('#search-field');
const localResultArea = document.querySelector('#local-results');
const foreignResultArea = document.querySelector('#foreign-results');
let startedSearch;

searchField.addEventListener('keyup', async () => {
    const search = searchField.value.trim();
    if (startedSearch) {
        localResultArea.innerHTML = '';
        foreignResultArea.innerHTML = '';
    }

    if (search && search.length > 1) {
        // eslint-disable-next-line no-undef
        const results = await API.sendToSearch(search);

        if (results.localSearchResults.length > 0) {
            startedSearch = true;
            results.localSearchResults.forEach((result) => {
                const resultEl = document.createElement('li');
                resultEl.innerHTML = `${result.foreignNumber} - ${result.foreignName}`;
                localResultArea.appendChild(resultEl);
            });
        }
        if (results.foreignSearchResults.length > 0) {
            startedSearch = true;
            results.foreignSearchResults.forEach((result) => {
                const resultEl = document.createElement('li');
                resultEl.innerHTML = `${result.localNumber}`;
                foreignResultArea.appendChild(resultEl);
            });
        }
    }
});
