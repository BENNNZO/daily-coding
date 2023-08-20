document.getElementById("code-input-1").focus()

window.addEventListener("input", e => {
    let index = parseInt(e.target.getAttribute("id").replace("code-input-", ""))

    // lock input boxes to max char length of 1
    if (e.target.value.length > 1) {
        e.target.value = e.target.value.charAt(0)
    }

    // focus next box when typing
    if (index !== 4 && e.inputType !== "deleteContentBackward") {
        document.getElementById(`code-input-${index + 1}`).focus()
    }
    
    // focus last box when backspacing
    if (index !== 1 && e.inputType === "deleteContentBackward") {
        document.getElementById(`code-input-${index - 1}`).focus()
    }
})