module.exports = {
  parser:  '@typescript-eslint/parser', //定义ESLint的解析器
  extends: ['plugin:@typescript-eslint/recommended','plugin:prettier/recommended','prettier/@typescript-eslint'], //定义文件继承的子规范
  plugins: ['@typescript-eslint','prettier'], //定义了该eslint文件所依赖的插件
    env: {
        "browser": true,
        "es6": true
    },
    rules: {
      "prettier/prettier": 1,    //  eslint-plugin-prettier 使用 prettier作为 eslint 规则
    }
};