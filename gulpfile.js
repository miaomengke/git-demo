// 1.less 编译 压缩 合并
// 2.js合并 压缩 混淆
// 3.图片的拷贝
// 4. html压缩


//在gulpfile中先载入gulp的包，应为这个包提供了一些基本的API
var gulp = require("gulp");
var less = require("gulp-less");//less编译
var cssnano = require("gulp-cssnano");//css的压缩
var concat = require("gulp-concat");//合并
var uglify = require("gulp-uglify");//js压缩混淆
var htmlmin = require("gulp-htmlmin");//html压缩混淆
gulp.task("style",function () {
	//这里是执行style任务时自动执行的	
	gulp.src("src/styles/*.less")
	.pipe(less())
	.pipe(gulp.dest("dist/styles"));
});