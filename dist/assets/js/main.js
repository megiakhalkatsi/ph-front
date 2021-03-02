//fixed header on scroll

var header = document.getElementById("header");
function fixedHeaderFunction() {
  if (window.pageYOffset > 400) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = function() {fixedHeaderFunction()};

// dropdown

const dropdownToggler = () => {
    let toggler = document.querySelectorAll('.dropdown--toggler')
    toggler.forEach((item) => {
        item.addEventListener('click', () => {
            let dropdowns = document.querySelectorAll('.dropdown')
            item.parentElement.classList.toggle('open')
            dropdowns.forEach((elem) => {
                if (
                    item.parentElement.getAttribute('id') ===
                    elem.getAttribute('data-for')
                ) {
                    elem.classList.toggle('open')
                }
            })
        })
    })
    // $(document).on("click", function (e) {
    //     if ($(e.target).is(".dropdown--toggler") === false) {
    //         $(".dropdown__elem").removeClass("open");
    //         $(".dropdown__elem .dropdown").removeClass("open");
    //     }
    // });
}
dropdownToggler()

const selectDropdown = () => {
    let dropdownItems = document.querySelectorAll('.dropdown__item')
    dropdownItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            let items = e.target.parentElement.children
            for (let i = 0; i < items.length; i++) {
                if (items[i].classList.contains('dropdown__item--active')) {
                    items[i].classList.remove('dropdown__item--active')
                }
            }
            let dropdownElems = document.querySelectorAll('.dropdown__elem')
            dropdownElems.forEach((elem) => {
                if (
                    elem.getAttribute('id') ===
                    item.parentElement.parentElement.getAttribute('data-for')
                ) {
                    e.target.classList.add('dropdown__item--active')
                    let selectedInfo = elem.children[0].children[0]
                    selectedInfo.innerHTML = e.target.innerHTML
                    selectedInfo.setAttribute('value', e.target.innerHTML)
                    elem.classList.remove('open')
                    e.target.parentElement.parentElement.classList.remove('open')
                }
            })
        })
    })
}
selectDropdown()

//# sourceMappingURL=main.js.map
