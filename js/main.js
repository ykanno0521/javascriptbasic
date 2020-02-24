'use strict';//エラーチェックのため

{
  document.querySelector('ul').addEventListener('click', e => {
    if (e.target.nodeName === 'li') {
      e.target.classList.toggle('done');
    }
  });
}
