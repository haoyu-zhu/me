# 产业链

[← 回到「消费电子产品经理」](index.md)

前三个 Skill 都是需求侧——该做什么、用户为什么买。这一个是它们的另一面：**供给侧**。锁定要做的产品之后，下一个问题是「做出来这台机器，物料花了多少、占售价几成，钱顺着上游被谁一层层加价、哪个件换不掉」。这是硬件 PM 的成本与供应决策，**不是投资视角**。

## 设计思路

<div class="skill-idea">核心理念：<b>一台硬件是一份"钱花在哪"的账本</b>——把终端售价拆成 BOM／制造／研发软件／品牌营销／渠道／利润，再顺着每个关键件往上游追，看每一层被谁加了价、哪个件断供代价最大。而这一切的前提是<b>证据驱动</b>：每一个成本和毛利数字都必须能回答"你从哪知道的"。</div>

分析按 A→F 六段推进，从整机的一张 BOM 一路追到上游的矿：

<div class="pipe">
  <span class="pipe-step">A · BOM 拆解<em>模块/物料/成本占比</em></span>
  <span class="pipe-step">B · 上游图谱<em>每个件追多层·只画结构</em></span>
  <span class="pipe-step">C · 利润池<em>各层毛利·微笑曲线</em></span>
  <span class="pipe-step pipe-key">D · 话语权 & 卡脖子<em>利润×话语权 2×2</em></span>
  <span class="pipe-step">E · 厂商能力图谱<em>每层谁在做·特长·适配</em></span>
  <span class="pipe-step">F · 风险 & 国产替代<em>断供·采购策略</em></span>
</div>

它和「市场调研」正好互补：市场调研回答"值不值得做"，产业链回答"做出来要花多少、卡在哪"。经典用法是**拿两款同品类产品对拆**——比如高端 TWS vs 走量白牌，看售价差 8× 但 BOM 只差 4–5×，差的那几倍藏在软件、生态和品牌里。

## 产出

<div class="skill-viewer" data-viewer>
  <div class="sv-tabs">
    <button class="sv-tab is-active" data-src="../outputs/tws-bom.html" data-title="两款经典 TWS · BOM 与售价拆解（产品经理视角）">两款经典 TWS</button>
    <button class="sv-tab" data-src="../outputs/ecoflow-delta3.html" data-title="正浩 EcoFlow DELTA 3 Max（2kWh）· BOM 与产业链（产品经理视角）">正浩 DELTA 3</button>
  </div>
  <div class="sv-bar">
    <span class="sv-title"></span>
    <span class="sv-actions">
      <a class="sv-dl sv-dl-html" download>下载 HTML ↓</a>
    </span>
  </div>
  <iframe class="sv-frame" loading="lazy" title="产业链产出"></iframe>
</div>

<script src="../viewer.js"></script>
