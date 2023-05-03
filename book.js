var book = document.querySelector(".book")
var pages = [...document.getElementsByClassName("page")]
for (var i = 0; i < pages.length; i++) {
	var page = pages[i]
	if (i % 2 === 0) {
		page.style.zIndex = pages.length - i
	}
}

document.addEventListener("DOMContentLoaded", function () {
	pages.forEach((el, i) => {
		el.pageNum = i + 1
		el.onclick = changePage

		function changePage(evt) {
			pages.forEach((el) => {
				console.log(el.onclick)
				el.onclick = null
				setTimeout(() => {
					el.onclick = changePage
				}, 900);
				
			})

			switch (evt.target.pageNum) {
				case 1:
					book.classList.add("toRight")
					break
				case 2:
					book.classList.remove("toRight")
					break
				case (pages.length):
					book.classList.remove("toLeft")
					break
				case (pages.length - 1):
					book.classList.add("toLeft")
					break
			}
			
			if (evt.target.pageNum % 2 === 0) {
				evt.target.classList.remove("flipped")
				evt.target.previousElementSibling.classList.remove("flipped")
			} else {
				evt.target.classList.add("flipped")
				evt.target.nextElementSibling.classList.add("flipped")
			}
		}
	})
})
