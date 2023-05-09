function getCSSVariableNames(){
let cssVariables=["--header-height",
"--header-background-color",
"--font-family"]

cssVariables.forEach(
    element=>

console.log( element+":",getComputedStyle(document.documentElement).getPropertyValue(element))
)
}

getCSSVariableNames()