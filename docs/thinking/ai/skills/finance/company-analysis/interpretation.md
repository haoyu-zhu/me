# 解读财报

> 公司经营分析 · 第 3 步 · 把抽出来的数据读成人话，出一份人写的研报初稿。

[← 回到「公司经营分析」](index.md)

数据抽干净了，最后一步是把它读成人话。这个 Skill 拿着上一步的财报数据，写成一份自然语言的财报解读——不是把数字换个格式念一遍，而是像研究员那样，先给结论、再讲逻辑、每句话背后都指得回一处数据。

## 设计思路

<div class="skill-idea">核心理念：<b>结构固定，深浅随数据自动降级</b>——报告骨架是固定的（摘要四段 + 分析九维），但每一维展开多深，由这家公司实际抽到多少数据决定：数据全就展开讲透，数据缺就据实收窄，绝不为凑满结构而编内容。一条判断对应一处数据，读者能顺着追溯回去。</div>

一份解读由两部分拼成：

<div class="pipe">
  <span class="pipe-step">摘要 · 四段式<em>它做什么 / 赚不赚钱 / 财务健康否 / 风险在哪</em></span>
  <span class="pipe-step">分析 · 九维<em>成长 / 盈利 / 现金 / 结构 / 回报 / 分部 / 治理 …</em></span>
</div>

<div class="disc">
  <span class="disc-item"><b>数据驱动降级</b>coverage 检查每一维的数据覆盖度，缺哪块自动收窄哪块的篇幅，不硬撑</span>
  <span class="disc-item"><b>先结论后论据</b>每维先给一句判断，再用抽出来的数字支撑，读起来像研报不像流水账</span>
  <span class="disc-item"><b>可追溯</b>结论对应数据，出成 HTML 时保留出处，方便回查</span>
  <span class="disc-item"><b>三市场通用</b>A股 / 港股 / 美股共用一套解读框架，口径与「提取财报经营信息」对齐</span>
</div>

## 产出 · 解读报告

<div class="skill-viewer" data-viewer>
  <div class="sv-tabs">
    <button class="sv-tab is-active" data-src="../../outputs/anker-interpretation.html" data-title="安克创新｜财报解读">安克创新</button>
    <button class="sv-tab" data-src="../../outputs/byd-interpretation.html" data-title="比亚迪｜财报解读">比亚迪</button>
  </div>
  <div class="sv-bar">
    <span class="sv-title"></span>
    <span class="sv-actions">
      <a class="sv-dl sv-dl-html" download>下载 HTML ↓</a>
    </span>
  </div>
  <iframe class="sv-frame" loading="lazy" title="财报解读产出"></iframe>
</div>

<script src="../../viewer.js"></script>
