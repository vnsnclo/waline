// api/index.js

// 使用 CommonJS 语法导出函数，兼容所有 Vercel 环境
module。exports = async (req， res) => {
  // 在内部使用动态导入 (Dynamic Import) 来加载 Waline v3 的 ESM 核心
  const { 默认: Application } = await import('@waline/vercel');
  
  const handler = Application({
    plugins: [],
    async postSave(comment) {
      // do what ever you want after comment saved
    },
  });
  
  return handler(req, res);
};
