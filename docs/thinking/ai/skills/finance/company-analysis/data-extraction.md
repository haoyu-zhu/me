# 提取财报经营信息

> 公司经营分析 · 第 2 步 · 从年报里抽出结构化数据，落成 Excel 工作簿。

[← 回到「公司经营分析」](index.md)

年报下下来了，接着要把散在几百页里的数字抽成一张张干净的表。这个 Skill 把「读财报」拆成 A–F 六类，逐类抽取、跨年拼成财报数据，最后落成一个 Excel 工作簿——A股、港股、美股统一成同一套口径，跨市场可比。

## 设计思路

<div class="skill-idea">核心理念：<b>代码只定位，抽数走 LLM，缺数据不编</b>——脚本只做章节定位、单位归一化、跨年勾稽和画图这些确定性的活；具体每个数字，由 LLM 从定位到的页面文本按 schema 抽出来，绝不让代码"猜数"。抽不到就留空标注，宁可少讲，也不编一个好看的数。</div>

抽取按 A–F 六类展开：

<div class="pipe">
  <span class="pipe-step">A · 收入<em>营收拆分 / 增长</em></span>
  <span class="pipe-step">B · 分部<em>业务 / 地区分部</em></span>
  <span class="pipe-step">C · 现金流<em>经营 / 投资 / 筹资</em></span>
  <span class="pipe-step">D · 资产负债<em>结构 / 杠杆</em></span>
  <span class="pipe-step">E · 回报<em>杜邦 · 纯派生零误差</em></span>
  <span class="pipe-step">F · 治理<em>红旗信号双样本验证</em></span>
</div>

## 产出 · 数据工作簿

抽取结果落成 Excel：A–F 六类各一个 sheet、一张 Sankey 收支拆解图和多张图表。点卡片下载原始 xlsx。

<div class="wb-grid">
  <a class="wb-card" href="../../outputs/byd.xlsx" download>
    <div class="wb-thumb"><img src="../../outputs/byd-preview.png" alt="比亚迪 收支 Sankey" loading="lazy"></div>
    <div class="wb-body"><b>比亚迪 · A股</b><span class="wb-meta">2021–2025 财报数据 · A–F 六类 + Sankey</span><span class="wb-dl">下载 Excel ↓</span></div>
  </a>
  <a class="wb-card" href="../../outputs/tencent.xlsx" download>
    <div class="wb-thumb"><img src="../../outputs/tencent-preview.png" alt="腾讯 收支 Sankey" loading="lazy"></div>
    <div class="wb-body"><b>腾讯控股 · 港股</b><span class="wb-meta">2023–2024 财报数据 · IFRS 口径</span><span class="wb-dl">下载 Excel ↓</span></div>
  </a>
  <a class="wb-card" href="../../outputs/apple.xlsx" download>
    <div class="wb-thumb"><img src="../../outputs/apple-preview.png" alt="Apple 收支 Sankey" loading="lazy"></div>
    <div class="wb-body"><b>Apple · 美股</b><span class="wb-meta">2022–2025 财报数据 · 10-K</span><span class="wb-dl">下载 Excel ↓</span></div>
  </a>
  <a class="wb-card" href="../../outputs/amd.xlsx" download>
    <div class="wb-thumb"><img src="../../outputs/amd-preview.png" alt="AMD 收支 Sankey" loading="lazy"></div>
    <div class="wb-body"><b>AMD · 美股</b><span class="wb-meta">2020–2025 财报数据 · 10-K</span><span class="wb-dl">下载 Excel ↓</span></div>
  </a>
</div>

## 延伸 · 估值

抽出来的财报数据再往下接一层，就能做估值。基于同一份数据跑五法——DCF 三情景、倍数法、DDM、反向 DCF，最后汇成一张足球场图。

<div class="wb-grid">
  <a class="wb-card" href="../../outputs/apple-valuation.xlsx" download>
    <div class="wb-thumb"><img src="../../outputs/apple-valuation-preview.png" alt="Apple 估值 足球场图" loading="lazy"></div>
    <div class="wb-body"><b>Apple · 估值</b><span class="wb-meta">五法估值 · DCF / 倍数 / DDM / 反向DCF / 足球场</span><span class="wb-dl">下载 Excel ↓</span></div>
  </a>
</div>
