function addDataAttrToPreTags(page) {
  const arr = page.content.split('<pre>');
  page.content = arr.reduce((acc, item, index) => {
    acc += item;
    if (index !== arr.length - 1) {
      acc += `<pre data-index="${index + 1}">`
    }
    return acc;
  }, '');
  return page;
}

module.exports = {
  hooks: {
    page: addDataAttrToPreTags
  }
}
