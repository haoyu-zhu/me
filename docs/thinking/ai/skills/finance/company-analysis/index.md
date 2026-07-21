# 公司经营分析

> ① 金融 Skill · 从一份年报，读懂一家公司怎么赚钱、赚得好不好、值多少钱。

[← 回到「金融」](../index.md)

一家公司的经营，几乎全写在财报里——只是年报太厚、数字太散，认真读一家就要大半天。我把「读财报」这件事拆成一条流水线，每一步落成一个能单独调用的 Skill：先把年报**抓**下来，再从里面**抽**出结构化数据，最后**读**成人话。A股、港股、美股统一一套口径。

<div class="product-links">
  <a class="product-cta product-cta--ghost" href="https://github.com/haoyu-zhu/company-analysis-skills" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.87c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/></svg>查看 Skill 源码 · GitHub ↗</a>
</div>

## 设计思路

<div class="skill-idea">核心理念：<b>代码只做确定性的事，判断交给 LLM，且缺数据不编</b>——脚本负责下载年报、在里面定位章节、把数字归一化、跨年勾稽、画图；至于这家公司赚不赚钱、护城河在哪、值多少钱，这些判断由 LLM 基于抽出来的数据来写，一条结论对应一处数据。</div>

一份年报进来，按这条链走——点开每一步看它单独怎么做：

<div class="pipe">
  <span class="pipe-step">1 · 批量下载财报<em>A股 / 港股 / 美股 自动下载</em></span>
  <span class="pipe-step">2 · 提取财报经营信息<em>抽 A–F 六类 + 财报数据 Excel</em></span>
  <span class="pipe-step">3 · 解读财报<em>摘要四段 + 分析九维</em></span>
</div>

## 三个 Skill

<div class="skill-nav">

  <a class="skill-nav-card" href="grabber/">
    <span class="snc-num">1</span>
    <span class="snc-body">
      <b>批量下载财报</b>
      <em>把原始年报下下来 · A股 / 港股 / 美股一站式</em>
      <span class="snc-desc">CNINFO＋SZSE、HKEX 披露易、SEC EDGAR 四源全通，公司名/代码自动解析，繁简与文档格式自动处理。</span>
    </span>
  </a>

  <a class="skill-nav-card" href="data-extraction/">
    <span class="snc-num">2</span>
    <span class="snc-body">
      <b>提取财报经营信息</b>
      <em>从年报抽出结构化数据 · 落成 Excel 工作簿</em>
      <span class="snc-desc">A–F 六类（收入 / 分部 / 现金流 / 资产负债 / 回报 / 治理），跨年财报数据 + Sankey 收支拆解；再往下接五法估值。</span>
      <span class="snc-tags"><span>比亚迪</span><span>腾讯</span><span>Apple</span><span>AMD</span></span>
    </span>
  </a>

  <a class="skill-nav-card" href="interpretation/">
    <span class="snc-num">3</span>
    <span class="snc-body">
      <b>解读财报</b>
      <em>把数据读成人话 · 一份人写的研报初稿</em>
      <span class="snc-desc">摘要四段式 + 分析九维，数据驱动地按覆盖度自动降级，出成一份可读的 HTML 报告。</span>
      <span class="snc-tags"><span>安克创新</span><span>比亚迪</span></span>
    </span>
  </a>

</div>
