# 目的
vueの勉強として画像アップロード機能を作ってみました。
画像の入力時に、bootstrapVueのモーダルを使用しています。

## 使い方
画像アップロードボタンを押すと、画像入力フォームが表示されるので、アップしたい画像を選択してください。
jpegとpngの画像しか選択できない仕様になっています。

## 課題点
画像未選択時は、エラー文が表示される仕様になっています。
しかし、初回アップロード時は問題なく動作しますが、2回目以降は適切にバリデーションがかからないので解決する必要があります。

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```


