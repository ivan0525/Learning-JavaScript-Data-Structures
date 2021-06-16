/**
 * match position
 */

// var result = "I\nlove\njavascript".replace(/^|$/mg, '♥');
// console.log(result);

// 单词边界
// const result = "[JS] Lesson_01.mp4".replace(/\b/g, '#');
// console.log(result);


/**
 * (?=p)和(?!p) => "p"是一个子模式
 * (?=p)：表示匹配"p"前面的位置
 * (?!p)：表示与(?=p)的结果相反，不匹配"p"的前面位置(其他位置都匹配)
 * 
 */
// const result = "hello".replace(/(?=l)/g, '♥');
// console.log(result);
const result = "hello".replace(/(?!o)/g, "♥");
console.log(result);