// 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

const url = 'https://jsonplaceholder.typicode.com/todos/1';
// new token from  git
fetch(url, {
    headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
    },
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
