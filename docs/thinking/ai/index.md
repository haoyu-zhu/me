# AI

从 2023 年初 ChatGPT 3.5 爆火，到 2025 年 Agent 产品成为 LLM 发展的主流。LLM 从一个 chatbot 真的成长为了生产力。

这里有我 vibe coding 出来的一些产品，和我蒸馏的 skill，以及我使用 agent 的一些小心得。

<div class="mini-cards">
  <a class="mini" href="vibe-coding/recruitment/"><b>Vibe Coding 产品</b></a>
  <a class="mini" href="skills/consumer-electronics/"><b>Skills</b></a>
</div>

## 开源 Skills 仓库

我把这些反复用到的分析，蒸馏成了一批 Claude Agent Skill，按「公司 / 行业 / 投资」三个方向整理成三个开源仓库，源码都在 GitHub。站内的「Skills」栏目是它们的效果展示，想看怎么实现的、想自己用，点下面卡片进仓库。

<div class="skill-nav">

  <a class="skill-nav-card" href="https://github.com/haoyu-zhu/company-analysis-skills" target="_blank" rel="noopener">
    <span class="snc-num snc-gh"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.87c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/></svg></span>
    <span class="snc-body">
      <b>公司分析 <span class="snc-ext">↗</span></b>
      <em>深挖一家公司 · 财报 → 解读 → 估值</em>
      <span class="snc-desc">6 个 skill：财报批量下载、A股 / 港股 / 美股结构化解析、自然语言解读、成熟公司估值。</span>
      <span class="snc-tags"><span>财报四件套</span><span>解读</span><span>估值</span></span>
    </span>
  </a>

  <a class="skill-nav-card" href="https://github.com/haoyu-zhu/industry-analysis-skills" target="_blank" rel="noopener">
    <span class="snc-num snc-gh"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.87c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/></svg></span>
    <span class="snc-body">
      <b>行业分析 <span class="snc-ext">↗</span></b>
      <em>看懂一个行业 / 品类 · 产业链 · 竞争格局 · 消费电子</em>
      <span class="snc-desc">5 个 skill：产业链利润池、竞争格局图谱，以及从市场 / 用户 / 竞品三视角拆消费电子。</span>
      <span class="snc-tags"><span>supply-chain</span><span>competitive-landscape</span><span>consumer-electronics ×3</span></span>
    </span>
  </a>

  <a class="skill-nav-card" href="https://github.com/haoyu-zhu/finance-skills" target="_blank" rel="noopener">
    <span class="snc-num snc-gh"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.87c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/></svg></span>
    <span class="snc-body">
      <b>金融 / 投资 <span class="snc-ext">↗</span></b>
      <em>找标的 · 顺着产业链定位价值捕获环节</em>
      <span class="snc-desc">研究漏斗最上游：拆链 → 打分 → 定位利润被谁赚走 → 出可投公司清单。持续补充中。</span>
      <span class="snc-tags"><span>value-chain-investing</span></span>
    </span>
  </a>

</div>
