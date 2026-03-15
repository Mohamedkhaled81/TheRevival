const btnElem = document.getElementsByTagName('button')[0];
const fetchUsers = async function () {
    const response = await fetch('http://127.0.0.1:7000/users');
    const fetchedUsers = await response.json();
    for (const user of fetchedUsers) {
        const { name, email, mobile, address } = user;
        const html = `
                    <div class="container">
                        <h1>Registered User</h1>
                        <h3>User Information:-</h3>
                        <div class="text_container">
                        <p><b>Name:</b> ${name}</p>
                        <p><b>Email:</b> ${email}</p>
                        <p><b>Mobile:</b> ${mobile}</p>
                        <p><b>address:</b> ${address}</p>
                        </div>
                    </div>
                `;
        const div = document.createElement('div');
        div.innerHTML = html;
        document.body.appendChild(div);
    }
};
btnElem.addEventListener('click', () => {
    fetchUsers();
}, { once: true })