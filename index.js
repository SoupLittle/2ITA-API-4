window.onload = function() {
    fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        document.getElementById('avatarImg').src = user.picture.large;
        document.getElementById('name').textContent = user.name.first + ' ' + user.name.last;
        document.getElementById('address').textContent = user.location.street.number + ' ' + user.location.street.name + ', ' + user.location.city + ', ' + user.location.country;
        document.getElementById('email').textContent = user.email;
        document.getElementById('idName').textContent = 'ID';
        document.getElementById('idValue').textContent = user.id.name + ': ' + user.id.value;
    })
    .catch(error => console.error('Error fetching user:', error));
}
