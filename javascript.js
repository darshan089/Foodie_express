document.querySelector('a[href="#profile"]').addEventListener('click', function(e) {
e.preventDefault();

const user = JSON.parse(localStorage.getItem('user'));
if (user) {
    document.getElementById('profileName').textContent = user.name || "Not Available";
    document.getElementById('profileEmail').textContent = user.email;

    // Hide menu / home sections
    document.querySelector('#home').style.display = 'none';
    document.querySelector('#menu').style.display = 'none';
    // Show profile page
    document.querySelector('#profile').style.display = 'block';
}
});
document.querySelector('a[href="#home"]').addEventListener('click', function() {
    document.querySelector('#profile').style.display = 'none';
    document.querySelector('#home').style.display = 'block';
    document.querySelector('#menu').style.display = 'block';
});

document.querySelector('a[href="#menu"]').addEventListener('click', function() {
    document.querySelector('#profile').style.display = 'none';
});


//Toggling between Sign In and Sign Up forms   
document.getElementById('signUpForm').style.display = 'none';
document.getElementById('signInForm').style.display = 'block';

document.getElementById('showSignUp').addEventListener('click', function() {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
});

document.getElementById('showSignIn').addEventListener('click', function() {
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('signInForm').style.display = 'block';
});


        // Handle Sign In form submission
document.getElementById('signInForm').addEventListener('submit', function(event) {
event.preventDefault();

    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (!savedUser) {
        alert("No user found. Please Sign Up.");
        return;
    }

    if (email === savedUser.email && password === savedUser.password) {
        alert(`Welcome back, ${savedUser.name}!`);

        document.querySelector('.card').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';

        // Update navbar text
        document.getElementById("userDropdown").innerHTML =
            `<i class="fas fa-user"></i> Welcome, ${savedUser.name}`;
            
    } else {
        alert("Invalid email or password!");
    }
});


    // Handle Sign Up form submission
document.getElementById('signUpForm').addEventListener('submit', function(event) {
event.preventDefault();
const name = document.getElementById('signUpName').value;
const email = document.getElementById('signUpEmail').value;
const password = document.getElementById('signUpPassword').value;

if (name && email && password) {
    // Save user details in localStorage
    localStorage.setItem('user', JSON.stringify({ name, email, password }));

    alert(`Sign Up successful for ${name} (${email})!`);

    // Switch back to Sign In form
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('signInForm').style.display = 'block';
} else {
    alert('Please fill in all fields.');
    }
});


const menuData = [
    { id: 1, name: 'Margherita Pizza', category: 'main', price: 12.99, image: 'https://imgs.search.brave.com/kXVBKecEKuC7MDG2LDqh7mhJ0K92Penx-C1NcQHXfDY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzM2LzMwLzI2/LzM2MF9GXzYzNjMw/MjYwOV9UYjFKdERU/UTR6YXdPMHViNkwy/Zkh6bHJXNTg2Zjl0/ci5qcGc' },
    { id: 2, name: 'Caesar Salad', category: 'appetizer', price: 8.99, image: 'https://imgs.search.brave.com/rCdTjTfRfrrU5j4b9DZn_EeENtDzz7PyQL1F-wFWcsU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjUv/MTE5LzYzMy9zbWFs/bC9mcmVzaC1jYWVz/YXItc2FsYWQtYS1o/ZWFsdGh5LWdvdXJt/ZXQtbHVuY2gtZ2Vu/ZXJhdGVkLWJ5LWFp/LWZyZWUtcGhvdG8u/anBn' },
    { id: 3, name: 'Burger', category: 'main', price: 10.99, image: 'https://imgs.search.brave.com/ESTPQPuXcY5CN8n2rTkr4qxJzTxZMPbhXxJ3vnGlL-4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzU3Lzc5LzQz/LzM2MF9GXzk1Nzc5/NDM3N19Ia0tIQTZL/QXJQakxXMExCYnhh/UjNsVW5VY1huaVFr/Yy5qcGc' },
    { id: 4, name: 'Ice Cream', category: 'dessert', price: 5.99, image: 'https://imgs.search.brave.com/fGQS8sdiFxNcWnMmVAw_B8kR9vNPq4GseACyTfi-2Ao/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC85LzQv/MS80NjE4OS0xOTIw/eDEyMDAtZGVza3Rv/cC1oZC1pY2UtY3Jl/YW0td2FsbHBhcGVy/LXBob3RvLmpwZw' },
    { id: 5, name: 'Coke', category: 'beverage', price: 2.99, image: 'https://imgs.search.brave.com/93nFHDk2EF26Kwft1LafSGU4XwxRSq4-SVVH4UFV_5U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC9hL2Uv/OC81OTI4NjQtMTky/MHgxMTA4LWRlc2t0/b3AtaGQtY29jYS1j/b2xhLXdhbGxwYXBl/ci1waG90by5qcGc' },
    { id: 6, name: 'Fries', category: 'appetizer', price: 4.99, image: 'https://imgs.search.brave.com/jmPUb6Cp-r67Fu6G4JqQ7N9miw-acu-ZqNCNUlfy2vg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM1LmFscGhhY29k/ZXJzLmNvbS8xMzIv/dGh1bWJiaWctMTMy/MjUwMS53ZWJw' },
    { id: 7, name: 'Paneer Butter Masala', category: 'main', price: 12.99, image: 'https://imgs.search.brave.com/KY0w_Sc7MLTtYaHeRQ3dh22CVNV0LAqtvEpXfJ6NH8E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjIx/MjU0MjYyNS9waG90/by9zaGFoaS1wYW5l/ZXItYnV0dGVyLW1h/c2FsYS53ZWJwP2E9/MSZiPTEmcz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Unh4S0pTY2lP/S3VhSjF3V3JzamVQ/TDB6MThma0Z1UmFT/X3hvc2FPWTFjYz0' },
    { id: 8, name: 'Cocktails', category: 'appetizer', price: 8.99, image: 'https://imgs.search.brave.com/4dxVl4XNXyeuU2KqaMZ6DZknrefLiwAeKI3WDDYFVE4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/NjQ5MjU4MC9waG90/by9tb3N0LXBvcHVs/YXItdHJlbmR5LWNv/Y2t0YWlscy1zZXQt/c3ByaXR6LW5lZ3Jv/bmktbW9qaXRvLWdp/bi10b25pYy1hbmQt/Y29zbW9wb2xpdGFu/LW9uLWdyYXkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWQ5/a2dzWWFXU005T1pu/YWt1bTBYdFE5c1Vk/S3p0cTRPTHpzVGI0/dC01bFk9' },
    { id: 9, name: 'Parota', category: 'main', price: 15.99, image: 'https://imgs.search.brave.com/Pn3OzN69nBjXJ05U57N79PMV0E7V3Q26QQqYxJom25o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1LzE3LzM0Lzk3/LzM2MF9GXzE1MTcz/NDk3MTFfWUJaM3JH/RDZSOUxIZjNPZXFt/YzVYemhxR2N1UllC/VGIuanBn' },
    { id: 10, name: 'Gulab Jamun', category: 'dessert', price: 5.99, image: 'https://imgs.search.brave.com/eH29wCGalUh7HlhF245SYjCEQAzj9gA2P6_YqKdPFF8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE0LzA5LzgwLzQ4/LzM2MF9GXzE0MDk4/MDQ4NTVfQnZGTHRC/aWE1dTZIclhrSTE3/SFFWOElzU2FMWlgw/dzkuanBn' },
    { id: 11, name: 'Mango Shake', category: 'beverage', price: 2.99, image: 'https://imgs.search.brave.com/fzmkpJS9R_egiWxLqD3YH8cHqVZv_W_AdAtvn-asbJQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE1LzAwLzEyLzYy/LzM2MF9GXzE1MDAx/MjYyNzRfTzgzSTVT/OWhVZnlUQ3U0RHBE/OU9HZnZjZjdrenk0/eXIuanBn' },
    { id: 12, name: 'Rice', category: 'main', price: 4.99, image: 'https://imgs.search.brave.com/CNNfsKK2qXHYMz4sCfig_H-a3iL_RPsjpb0fFH4pAuo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQz/MjMxMzAzMS9waG90/by9yaWNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1wREEz/M2hrejE1TVBrWW5f/NHJrN1BPU3BTVlVa/UlhlbDc1ZzBieFZP/dDRrPQ' },
    { id: 13, name: 'Veg Thali', category: 'main', price: 12.99, image: 'https://imgs.search.brave.com/maKeQbY6-WyCymhVk0wyyEuiUMUxK3JNY-0Vf1TvG1Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjY3/OTQ2MzgyL3Bob3Rv/L3JpY2UtYW5kLWN1/cnJ5LW1lYWwtdGhh/bGktYS10cmFkaXRp/b25hbC1tZWFsLWlu/LWphZmZuYS1zcmkt/bGFua2EuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXRpSnlE/cWZSMkdoYnVVbUR0/cGZxcWQ3RndwYlFy/WEM3ODdtbGJoYzFM/V1k9' },
    { id: 14, name: 'Badam shake', category: 'appetizer', price: 8.99, image: 'https://imgs.search.brave.com/2fftIxPzafWLbt4maXJV8vh8duii7QUg_3Qncyt1-N8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92aXNt/YWlmb29kLmNvbS9z/dG9yYWdlL2FwcC91/cGxvYWRzL3B1Ymxp/Yy9kYjYvMzllLzk2/NC90aHVtYl9fNzAw/XzBfMF8wX2F1dG8u/anBn' },
    { id: 15, name: 'Notth Indian Thali', category: 'main', price: 10.99, image: 'https://imgs.search.brave.com/Xx8dTJF2gb7UDp27YBUPOjGRhqzCRouQyTkFREOqjWg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9uZW9u/Lmlwc2F0b3IuY29t/L2MvaW1hZ2UvdXBs/b2FkL3FfNTAvaXJj/dGMvd3AvdXBsb2Fk/cy8yMDI1LzAxL1Rv/cC1Ob3J0aC1JbmRp/YW4tVGhhbGktb3B0/aW9ucy1hdmFpbGFi/bGUtb24tSVJDVEMt/ZUNhdGVyaW5nLnBu/Zw' },
    { id: 16, name: 'Rasgulla', category: 'dessert', price: 5.99, image: 'https://imgs.search.brave.com/aULYze5rqseQR25qHGmVQi2crBzPnY-3-qAPXNyOFSg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI4/MzU0MjkyOS9waG90/by9pbmRpYW4tcmFz/Z3VsbGEtb3ItZHJ5/LXJvc29ndWxsYS1k/ZXNzZXJ0LXN3ZWV0/LXNlcnZlZC1pbi1h/LWJvd2wud2VicD9h/PTEmYj0xJnM9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWpNb2RBSjY4/Z0QzbnpqVWloQXQt/Mk5kWk9aMmlsU0k4/SXlVV0J5QXZ3Vjg9' },
    { id: 17, name: 'Sprite', category: 'beverage', price: 2.99, image: 'https://imgs.search.brave.com/6s7xhCKB7JL26G3jl8hyfNtmMRJB0oKp9ZoT6nxBfo8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDc3/NTY3NTQ2L3Bob3Rv/L2ljZS1jb2xkLXNw/cml0ZS1iZXZlcmFn/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SElvS09rT2ZW/RGgwdThnc281S2Nz/RHJnYXBtY3lLMFZz/TFdkdF9LN04xND0' },
    { id: 18, name: 'Garlic Bread', category: 'appetizer', price: 4.99, image: 'https://imgs.search.brave.com/jJW53o4nzuBybPj64rXUdGP-2C6vyGuHKcRdTOrLn84/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzIv/NzM0LzEzOS9zbWFs/bC9mcmVzaGx5LWJh/a2VkLWhvbWVtYWRl/LWdhcmxpYy1icmVh/ZC13aXRoLWEtbW91/dGh3YXRlcmluZy1m/cmFncmFuY2UtZ2Vu/ZXJhdGl2ZS1haS1w/aG90by5qcGc' },
    { id: 19, name: 'South Indian Thali', category: 'main', price: 12.99, image: 'https://imgs.search.brave.com/-9H0djUxCrcisRehHLvvrTPhKmb8LAXjHMvOA3DbX5w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hc3NldHR5cGUu/Y29tL2hvbWVncm93/bi9pbXBvcnQvYm9v/ay9rdWh3bGJheXhz/LTE1MzMwNDAzMDAu/anBnP3c9NDgwJmF1/dG89Zm9ybWF0LGNv/bXByZXNzJmZpdD1t/YXg' },
    { id: 20, name: 'Stuffed Mushroom', category: 'appetizer', price: 8.99, image: 'https://imgs.search.brave.com/Y7pet6aKTj7kOwb2BT-KWXrozDtb1oHIMjZU5shMx4s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGFzdGVvZmhvbWUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzEyL1N0dWZm/ZWQtTXVzaHJvb21z/X0ZUMjRfMTc5OTIw/X0VDXzEyMTNfMy5q/cGc_Zml0PTcwMCwx/MDI0' },
    { id: 21, name: 'Khaju Matar', category: 'main', price: 15.99, image: 'https://imgs.search.brave.com/2Ny74eyiPKcA465zuG91c4ZFpanFL9G7TQoxoawHkiQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9keTNy/bWE3M2tvd2xwLmNs/b3VkZnJvbnQubmV0/L3VwbG9hZHMvMjAy/NS8xMS9LYWp1LU1h/dGFyLU1hc2FsYS1S/ZWNpcGUuanBn' },
    { id: 22, name: 'Pedha', category: 'dessert', price: 5.99, image: 'https://imgs.search.brave.com/G98zh1p_mVIps6kd9pP-nbsQ5i-k2KEis2Imze1rqSs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzI4Lzk5LzU0/LzM2MF9GXzkyODk5/NTQ3OV9SYm03VG1V/T2hjZmhINlFOTDUz/NWNneXIyVDNOY1hB/bS5qcGc' },
    { id: 23, name: 'ThumsUp', category: 'beverage', price: 2.99, image: 'https://imgs.search.brave.com/cT-wZLMfpr4WoAADapN6iv0A2ucZ2R_dnu8AW1sqkPw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dWVuZ2FnZS5pby91/cGxvYWRzLzUvaW1h/Z2UtNTM0NDE0LTE3/MTYwMTE2MjAuanBl/Zw' },
    { id: 24, name: 'Veg Patiyala', category: 'main', price: 4.99, image: 'https://imgs.search.brave.com/0wqKWEU7IRHlY5i3qxg30QZE5AYFYBZXA2uGRv158Pk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2VkL2U5/L2IyL2VkZTliMjli/NjJiMTFmZGI2MTY2/MDYxM2M5YmU3MDFh/LmpwZw' },
    { id: 25, name: 'Yellow Dhal', category: 'main', price: 12.99, image: 'https://imgs.search.brave.com/tW4jTEgtZcbrwM1LRiwUW2OaCI2YC8QfmNFWxvXdGxY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93aGF0/c2Nvb2tpbmcub3Jn/LmluL2FkbWluL3Vw/bG9hZHMvcHJvZHVj/dC83NjUzMVllbGxv/dyUyMERhbCUyMChK/UEVHKS5qcGc' },
    { id: 26, name: 'Plain Tarka', category: 'main', price: 12.99, image: 'https://imgs.search.brave.com/j09hR_U1l5NxyliJLq1TH3Ds_LD6wOwhFdfQ2mZVcZw/rs:fit:500:0:1:0/g:ce/aHR0cDovL3NwaWN5/d29ybGQuaW4vcmVj/aXBlaW1hZ2VzL2Vn/Zy10YXJrYS5qcGc' },
    { id: 27, name: 'Channa Masala', category: 'main', price: 12.99, image: 'https://imgs.search.brave.com/K_hApobZ57P9T5zbgsRkE4THVn2Flyk_f4cA5t1CDbE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZ2V0cmVjaXBl/a2l0LmNvbS8yMDI1/MDYwNjExNTM0MS1j/cmVhbXlfY2hhbm5h/X21hc2FsYV93aXRo/X2Nhc2hld3MuanBl/Zz9hc3BlY3RfcmF0/aW89MTY6OSZxdWFs/aXR5PTkwJg' },
    { id: 28, name: 'Aloo Jeera', category: 'main', price: 12.99, image: 'https://imgs.search.brave.com/uPg_8_FneR9yEMJA6GuLp02Xunh2gyaN27pVxtZRKrk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA5/MTU2NzM3MC9waG90/by9kZWxpY2lvdXMt/YWxvby1qZWVyYS1p/bmRpYW4tdmVnYW4t/Zm9vZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9UENGUW5G/d1o2ODIwdWJhQWNr/cE9jWFhqUXk0bDFV/UzZtR2dsamtjNmZo/az0' },
    { id: 29, name: 'Aloo Matar', category: 'main', price: 12.99, image: 'https://imgs.search.brave.com/q7KDVrOpxUO1Qe48xm7GVuvm5xY3svnR9ogNdaEKRkU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQy/MTIwOTEyMC9waG90/by9hbG9vLW1hdGFy/LWN1cnJ5LXBvdGF0/by1wZWFzLWNvb2tl/ZC13aXRoLWFuLW9u/aW9uLWFuZC10b21h/dG9lcy1hbG9uZy13/aXRoLWluZGlhbi1z/cGljZXMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPW41WnVC/ZUhoejlHRVJKNFMw/UXRQb3VSY1RwNGh4/U3dON0h2MllkeXZK/ZGc9' },
    { id: 30, name: 'Aloo Gobi', category: 'main', price: 12.99, image: 'https://imgs.search.brave.com/5ZWPNtDwWfhn_-dnK6wOZoq-teFOAcQjhC6XgP-xNwI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hbG9v/LWdvYmktcG90YXRv/LWNhdWxpZmxvd2Vy/LWN1cnJ5LWluZGlh/bi1wdW5qYWJpLXZl/Z2V0YXJpYW4tZm9v/ZC0yODY3OTg2Mzcu/anBn' },
    { id: 31, name: 'Palak Paneer', category: 'main', price: 12.99, image: 'https://imgs.search.brave.com/vZ0gvPc82lmrE3TCpqWnldvSZt1wu5SB5uUeLkJ4b-E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9wYWxhay1w/YW5lZXItY3Vycnkt/bWFkZS1zcGluYWNo/LTI2MG53LTEyMDUx/MzQ2MjEuanBn' },
    { id: 32, name: 'Kadai Paneer', category: 'main', price: 12.99, image: 'https://imgs.search.brave.com/aMPUmu9QCX4fsn1utLLu2yrXwq9-V5QUqz07t58p9Rs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y3ViZXNuanVsaWVu/bmVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wNi9L/YWRhaS1QYW5lZXIt/U3RlcC0xMi5qcGc' },
    { id: 33, name: 'Malai Kofta', category: 'main', price: 12.99, image: 'https://imgs.search.brave.com/KN14oLPl4ysmS1vwW4HufMCJD8f9QtgmeAE-KUacjgc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDQu/ZGVwb3NpdHBob3Rv/cy5jb20vMTk5NjA4/OTYvMjMwNTIvaS80/NTAvZGVwb3NpdHBo/b3Rvc18yMzA1MjQy/MTAtc3RvY2stcGhv/dG8tbWFsYWkta29m/dGEtY3VycnktbXVn/aGxhaS1zcGVjaWFs/LmpwZw' },
    { id: 34, name: 'Diwani Handi', category: 'main', price: 12.99, image: 'https://imgs.search.brave.com/s76K8uWTxPTh1-mXA9VfpH--oI4F3F1HqApZW3Xu5OQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yYW52/ZWVyYnJhci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDcvZGVld2FuaS1o/YW5kaS02NDB4Mzg1/LmpwZw' },
];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Render menu items
function renderMenu(items = menuData) {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = '';
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'col-md-4 menu-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" class="img-fluid mb-2" alt="${item.name}">
            <h5>${item.name}</h5>
            <p>₹${item.price.toFixed(2)}</p>
            <button class="btn btn-add" onclick="addToCart(${item.id})">Add to Cart</button>`;
        menuContainer.appendChild(itemDiv);
    });
}

// Add to cart
function addToCart(id) {
    const item = menuData.find(i => i.id === id);
    const cartItem = cart.find(c => c.id === id);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    updateCart();
        localStorage.setItem('cart', JSON.stringify(cart));
}

//making the cart clear function
function updateCart() {
    document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <span>${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}</span>
            <button class="btn btn-remove btn-sm" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(itemDiv);
        });
        document.getElementById('cart-total').textContent = total.toFixed(2);
        document.getElementById('checkout-total').textContent = total.toFixed(2);
}

//reset the cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Search and filter the foods
document.getElementById('search').addEventListener('input', filterMenu);
document.getElementById('category').addEventListener('change', filterMenu);
function filterMenu() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const category = document.getElementById('category').value;
    const filtered = menuData.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || item.category === category;
        return matchesSearch && matchesCategory;
});
renderMenu(filtered);
}
document.querySelector('a[href="#cart"]').addEventListener('click', function(e) {
    e.preventDefault();
    new bootstrap.Modal(document.getElementById('cartModal')).show();
});

// Checkout
document.getElementById('checkout-btn').addEventListener('click', function() {
    bootstrap.Modal.getInstance(document.getElementById('cartModal')).hide();
    new bootstrap.Modal(document.getElementById('checkoutModal')).show();
    });

// Place order
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Order placed successfully! Thank you for choosing FoodieExpress.');
    cart = [];
    updateCart();
    localStorage.removeItem('cart');
    bootstrap.Modal.getInstance(document.getElementById('checkoutModal')).hide();
});

// Logout
document.getElementById('logout').addEventListener('click', function() {
    alert('Logged out successfully.');
    // Redirect to login page or handle logout
});

function showOrderHistory() {
    let ordersSection = document.getElementById("orders");
    let orderList = document.getElementById("orderList");

    // Hide other page sections here if needed
    ordersSection.style.display = "block";

    let orders = JSON.parse(localStorage.getItem("orderHistory")) || [];

    if (orders.length === 0) {
        orderList.innerHTML = "<p>No orders found.</p>";
        return;
    }

    orderList.innerHTML = "";

    orders.forEach(order => {
        let div = document.createElement("div");
        div.classList.add("order-box");

        div.innerHTML = `
            <h3>Order ID: ${order.id}</h3>
            <p>Items: ${order.items.join(", ")}</p>
            <p>Total: ₹${order.totalAmount}</p>
            <p>Date: ${order.date}</p>
        `;

        orderList.appendChild(div);
    });
}

window.addEventListener("hashchange", function () {
    if (location.hash === "#orders") {
        showOrderHistory();
    }
});

if (location.hash === "#orders") {
    showOrderHistory();
}

function saveOrder(orderDetails) {
    let orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];
    orderHistory.push(orderDetails);
    localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
}

function placeOrder() {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

    if (!paymentMethod) {
        alert("Please select a payment method!");
        return;
    }

    paymentMethod = paymentMethod.value;

    let cardLast4 = "";

    if (paymentMethod === "card") {
        let cardNumber = prompt("Enter Card Number (16 digits):");
        if (!cardNumber || cardNumber.length !== 16 || isNaN(cardNumber)) {
            alert("Invalid Card Number!");
            return;
        }

        let expiry = prompt("Enter Expiry Date (MM/YY):");
        if (!expiry || !/^\d{2}\/\d{2}$/.test(expiry)) {
            alert("Invalid Expiry Format! Use MM/YY");
            return;
        }

        let cvv = prompt("Enter CVV (3 digits):");
        if (!cvv || cvv.length !== 3 || isNaN(cvv)) {
            alert("Invalid CVV!");
            return;
        }

        cardLast4 = cardNumber.slice(-4);
    }

    let total = cartItems.reduce((acc, item) => acc + item.price, 0);

    let order = {
        id: Date.now(),
        items: cartItems.map(item => item.name),
        totalAmount: total,
        date: new Date().toLocaleString(),
        paymentMethod: paymentMethod,
        cardLast4: cardLast4
    };

    saveOrder(order);

    localStorage.removeItem("cart");

    alert("History saved successfully!");
}

document.getElementById("cardMethod").addEventListener("change", function () {
    document.getElementById("cardDetails").style.display = "block";
});

document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
    if (radio.value !== "card") {
        radio.addEventListener("change", function () {
            document.getElementById("cardDetails").style.display = "none";
        });
    }
});

// Initialize
renderMenu();

updateCart();
