const btn = document.querySelector("button");
const containerHeader = document.querySelector("h2");

btn.addEventListener("click", () => {
    scrollTo(
        0,
        Math.abs(
            document.body.getBoundingClientRect().y -
                containerHeader.getBoundingClientRect().y
        )
    );
});
