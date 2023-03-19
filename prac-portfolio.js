console.log("The code is running...")
document.querySelector('.close').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.bars').style.display = 'inline'
        document.querySelector('.close').style.display = 'none'
    }
    else {
        document.querySelector('.bars').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.close').style.display = 'inline'
        }, 300);
    }
})