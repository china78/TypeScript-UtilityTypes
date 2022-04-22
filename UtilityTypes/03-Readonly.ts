// Readonly<Type>

interface Book {
  title: string;
  content: string;
}

const jpm: Book = {
  title: '金瓶梅',
  content: '一些不可描述的事情'
}

const jks: Readonly<Book> = {
  title: '教科书',
  content: '永远跟党走'
}

jpm.content = '开始有画面了';
jks.content = '你要篡改历史吗..?';