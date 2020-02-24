'use strict';//エラーチェックのため

{
  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault(); //ページ遷移をキャンセル
    console.log('submit');
  });
}
