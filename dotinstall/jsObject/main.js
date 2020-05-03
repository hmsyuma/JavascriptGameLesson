'use strict';

{
class SponsorePost {
  constructor(text, sponsor) {
    this.text = text
    this.likeCount = 0
  }

  show() {
    console.log(`${this.text} - ${this.likeCount}likes`)
    console.log(`...suponserd by ${this.sponsor}`)
  }

  like(){
    this.likeCount++;
    this.show();
  }

  //静的メゾッド
  //thisは使えない
  static showInfo() {
    console.log('post ckass version 1');
  }
}

class Post {
  constructor(text) {
    this.text = text
    this.likeCount = 0
  }

  show() {
    console.log(`${this.text} - ${this.likeCount}likes`)
  }

  like(){
    this.likeCount++;
    this.show();
  }

  //静的メゾッド
  //thisは使えない
  static showInfo() {
    console.log('post ckass version 1');
  }
}

const posts = [
  new Post('LOVE JS'),
  new Post('追い込め！'),
  new SponsorePost('hige','hoge')
]

//プロパティを直接操作せずに、クラスにメソッドを追加する
//カプセル化
posts[0].like();
posts[1].show();
Post.showInfo();
posts[2].show();
}