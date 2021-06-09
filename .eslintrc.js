module.exports = {
  root: true,
  // 指定环境
  env: {
    node: true,
  },
  // 共享配置
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  // 定义解析器相关规则
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    // ************参考地址 https://eslint.bootcss.com/docs/rules/ **********
    // *********1 start Possible Errors
    // 禁用console
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 禁止在常规字符串中出现模板字面量占位符语法
    'no-template-curly-in-string': 'error',
    // *********1 end Possible Errors

    // *********2 start best practices
    //在定义对象的时候，getter/setter需要同时出现
    'accessor-pairs': 'error',
    //强制数组的回调函数中有return
    // Array.from
    // Array.prototype.every
    // Array.prototype.filter
    // Array.prototype.find
    // Array.prototype.findIndex
    // Array.prototype.map
    // Array.prototype.reduce
    // Array.prototype.reduceRight
    // Array.prototype.some
    // Array.prototype.sort
    'array-callback-return': 'error',
    // 强制把变量的使用限制在其定义的作用域范围内
    'block-scoped-var': 'error',
    // 要求 return 语句要么总是要么从不指定值
    'consistent-return': 'error',
    // 在块区域前后时刻保留大括号是一种最佳实践，即使他们是可有可无的
    curly: ['error', 'all'],
    //规则的目的是在 switch 语句中强制声明 default 分支。或者也可以在最后一个 case 分支下，使用 // no default 来表明此处不需要 default 分支。注释可以任何形式出现，比如 // No Default
    'default-case': 'error',
    // 强制在任何情况下都使用 === 和 !==
    eqeqeq: 'error',
    // JavaScript 的 alert、confirm 和 prompt 被广泛认为是突兀的 UI 元素，应该被一个更合适的自定义的 UI 界面代替
    'no-alert': 'error',
    'no-caller': 'error',
    // 禁止出现空函数
    'no-empty-function': 'error',
    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 'error',
    // 禁止在全局范围使用变量和函数声明
    'no-implicit-globals': 'error',
    // 禁用不必要的嵌套块
    'no-lone-blocks': 'error',
    // 禁止使用多行字符串
    'no-multi-str': 'error',
    // 禁止对 function 的参数进行重新赋值
    'no-param-reassign': 'error',
    // 禁止使用多行字符串
    'no-multi-str': 'error',
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': ['error', 'always'],
    // 禁止使用不带 await 表达式的 async 函数
    'require-await': 'error',
    // *********2 end best practices

    // *********3 start  Variables
    // 不允许标签与变量同名
    'no-label-var': 'error',
    // 禁止变量定义前使用
    'no-use-before-define': 'error',
    // *********3 end  Variables

    // *********4 start Stylistic Issues 风格指南 相对主观
    // 要求使用骆驼拼写法
    camelcase: 'error',
    // 拖尾逗号 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
    'comma-dangle': ['error', 'only-multiline'],
    // 强制在逗号周围使用空格
    'comma-spacing': ['error', { before: false, after: true }],
    // 禁止在计算属性内使用空格
    'computed-property-spacing': ['error', 'never'],
    // 在非空文件中存在拖尾换行
    'eol-last': ['error', 'always'],
    // 禁止在函数名和开括号之间有空格
    'func-call-spacing': ['error', 'never'],
    // 如果函数的任一参数有换行，则要求在函数括号内换行。否则禁止换行。
    'function-paren-newline': ['error', 'multiline'],
    // 标识符长度限制
    'id-length': ['error', { min: 2, max: 30 }],
    // 代码缩进
    indent: ['error', 2],
    // 强制所有不包含双引号的 JSX 属性值使用双引号。
    'jsx-quotes': ['error', 'prefer-double'],
    // 禁止在对象字面量的键和冒号之间存在空格 要求在对象字面量的冒号和值之间存在至少有一个空格
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // 强制行注释只在代码上方，单独成行。
    'line-comment-position': ['error', { position: 'above' }],
    // 强制块语句的最大可嵌套深度
    'max-depth': ['error', 4],
    // 强制一行的最大长度
    'max-len': ['error', { code: 80 }],
    // 强制在函数中的最大行数
    'max-lines-per-function': ['error', { max: 100 }],
    // 强制最大参数个数 6
    'max-params': ['error', 6],
    // 强制三元操作数之间有换行。
    'multiline-ternary': ['error', 'always'],
    // 要求调用 new 操作符时有首字母大写的函数, 要求调用首字母大写的函数时有 new 操作符。
    'new-cap': ['error', { newIsCap: true, capIsNew: true }],
    // 强制调用无参构造函数时有圆括号
    'new-parens': ['error', 'always'],
    // 要求在方法链中的每个调用之后或或深度成员访问之后有一个换行符 ,允许在同一行成链的深度为2
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    // 禁止 if 语句作为唯一语句出现在 else 语句块中
    'no-lonely-if': 'error',
    // 禁止连续赋值
    'no-multi-assign': 'error',
    // 禁止嵌套的三元表达式
    'no-nested-ternary': 'error',
    // 该规则禁止在点号周围或对象属性之前的左括号前出现空白。如果对象和属性不在同一行上，这种情况，该规则允许使用空白，因为对级联的属性增加新行是一种很普遍的行为。
    'no-whitespace-before-property': 'error',
    // 禁止单行语句之前有换行。
    'nonblock-statement-body-position': ['error', 'beside'],
    // 规则旨在强制分号周围的空格。该规则防止在表达式中的分号之前使用空格
    'semi-spacing': ['error', { before: false, after: true }],
    // 强制分号在句子末尾
    'semi-style': ['error', 'last'],
    // 操作符前后都需要添加空格。
    'space-infix-ops': ['error', { int32Hint: false }],
    // switch 中case子句冒号左右的空格
    'switch-colon-spacing': ['error', { after: true, before: false }],
    // *********4 end Stylistic Issues

    // *********5 start ECMAScript 6
    // 当大括号是可以省略的，强制不使用它们 (默认)
    'arrow-body-style': ['error', 'as-needed'],
    // (默认) 要求在所有情况下使用圆括号将参数括起来。
    'arrow-parens': ['error', 'always'],
    // 要求箭头函数的箭头之前或之后有空格
    'arrow-spacing': ['error', { before: true, after: true }],
    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-confusing-arrow': 'error',
    // 不允许改变用const声明的变量
    'no-const-assign': 'error',
    // 不允许类成员中有重复的名称
    'no-dupe-class-members': 'error',
    // 禁止使用不必要的计算属性。
    'no-useless-computed-key': 'error',
    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-rename': 'error',
    // 禁止使用var
    'no-var': 'error',
    // *********5 end ECMAScript 6
    'prettier/prettier': 'error',
  },
  // 指定全局变量
  globals: {},
};
