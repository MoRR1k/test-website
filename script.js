body {
    margin: 0;
    font-family: 'LeoHand', sans-serif; /* Используем шрифт, если он доступен */
}

header {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem 0;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
    background-color: #444;
    margin: 0;
    padding: 0;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    padding: 10px 0;
}

main {
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.catalog {
    text-align: center;
}

.product {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    width: 200px;
    text-align: center;
}

.product img {
    max-width: 100%;
    height: auto;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem 0;
    position: absolute;
    width: 100%;
    bottom: 0;
}
