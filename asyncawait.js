async function getUsers() {
    let data = await fetch('users.json');
    return await data.json();
}

async renderUsers = () => {
    let myData = await getUsers();
    let html = '';
    myData.map(contents => {
        let htmlSegment = `
            <div>
                <h1>${contents.firstName} ${contents.lastName}</h1>
            </div>
        `;
        html += htmlSegment;
    });
    document.querySelector('.text').innerHTML = html;

}
renderUsers();