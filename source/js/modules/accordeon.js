const firstCheckbox = document.querySelector('#checkbox-1');
const secondCheckbox = document.querySelector('#checkbox-2');


const changeAttr = function (mutations) {
  console.log('mutations ', mutations);
  if (firstCheckbox.checked === 'true') {
    secondCheckbox.checked = 'false';
  }
};

const observer = new MutationObserver(changeAttr);

if (firstCheckbox) {
  observer.observe(firstCheckbox, {
    attributes: true,
    childList: true, // наблюдать за непосредственными детьми
    subtree: true, // и более глубокими потомками
    characterDataOldValue: true,
    attributeFilter: ['checked'],
  });
}
