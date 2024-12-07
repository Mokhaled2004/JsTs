function listHTMLElements(htmlElement) {
    const result = [];
    if (htmlElement.children.length === 0) {
        result.push(htmlElement);
    }

    for (let element of Array.from(htmlElement.children)) {
        result.push(element);
        const children = listHTMLElements(element);
        result.push(...children);
    }
    return result;
}
// [div#app, div, p, p, span]
console.log(listHTMLElements(document.body));