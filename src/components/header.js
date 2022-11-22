const renderHeader = () => {
    const data = ["Trở thành đối tác", "Quản lí đơn hàng", "Hotline: 0913447801"];
    const header = document.createElement("div");
    header.classList = `container text-center d-flex justify-content-between align-content-center`;

    const navLinks = document.createElement("div");
    navLinks.classList = `text-center d-flex justify-content-around align-content-center `;

    data.forEach((item) => {
        let link = document.createElement("a");
        link.classList = `me-4`;
        link.innerHTML = `${item}`;
        navLinks.appendChild(link);
    });

    const logo = document.createElement("div");
    logo.classList = `logo-container`;
    logo.innerHTML = `<img src="../../img/logo.jpg" alt="logo" />`;

    const btn = document.createElement("button");
    btn.classList = `btn btn-sm login-btn`;
    btn.innerText = `Đăng nhập`;

    navLinks.appendChild(btn);
    header.appendChild(logo);
    header.appendChild(navLinks);

    return header;
};
export default renderHeader;