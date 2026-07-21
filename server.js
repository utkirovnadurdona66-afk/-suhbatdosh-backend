<!DOCTYPE html>
<html lang="uz">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#0d1526">
<meta name="google-site-verification" content="bh6pALCCdTaLf5GNhMrA04VF_39Km8O3nplMXPSyRFo" />
<title>Sardor AI — bepul o'zbek sun'iy intellekt chatbot</title>
<meta name="description" content="Sardor AI — Saydurasulov Sardor tomonidan yaratilgan bepul o'zbekcha sun'iy intellekt chatbot. Savol bering, suhbatlashing, rasm chizdiring, qo'shiq yozdiring, fayl yuboring, ovozli gaplashing.">
<meta name="keywords" content="Sardor AI, Sardor ai chatbot, sun'iy intellekt, o'zbek chatbot, Saydurasulov Sardor">
<link rel="canonical" href="https://utkirovnadurdona66-afk.github.io/sardor-ai-app/">
<meta property="og:title" content="Sardor AI — chatbot">
<meta property="og:description" content="Sizga o'xshagan sun'iy intellekt — savol bering, suhbatlashing, rasm chizdiring.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://utkirovnadurdona66-afk.github.io/sardor-ai-app/">
<meta name="robots" content="index, follow">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Sardor AI",
  "alternateName": "Sardor ai",
  "url": "https://utkirovnadurdona66-afk.github.io/sardor-ai-app/",
  "description": "Sardor AI — Saydurasulov Sardor tomonidan yaratilgan bepul o'zbekcha sun'iy intellekt chatbot.",
  "applicationCategory": "ChatApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "creator": { "@type": "Person", "name": "Saydurasulov Sardor" }
}
</script>
<link rel="manifest" href="manifest.json">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
<style>
  :root{
    --lapis: #16213e;
    --lapis-dark: #0d1526;
    --lapis-deeper: #0a0f1d;
    --turquoise: #2e9e96;
    --turquoise-light: #7fd4c9;
    --gold: #c9a227;
    --gold-soft: #e6c869;
    --cream: #f5eedc;
    --cream-dim: #e9dfc4;
    --ink: #1c1c1a;
    --danger: #c9573f;
    --bubble-bot-bg: rgba(245,238,220,0.08);
  }
  body.light{
    --lapis: #f6f2e6;
    --lapis-dark: #ffffff;
    --lapis-deeper: #ece5d1;
    --cream: #241f10;
    --cream-dim: #4a4330;
    --bubble-bot-bg: rgba(22,33,62,0.05);
  }
  *{box-sizing:border-box;}
  html,body{
    margin:0;padding:0;height:100%;
    background: var(--lapis-deeper);
    font-family:'Manrope',sans-serif;
    color:var(--cream);
    overflow:hidden;
    transition: background 0.25s, color 0.25s;
  }
  .shell{
    display:flex;
    height:100vh;
    max-width:1180px;
    margin:0 auto;
  }

  /* ---------- Sidebar ---------- */
  .sidebar{
    width:270px;
    flex-shrink:0;
    background: var(--lapis-deeper);
    border-right:1px solid rgba(201,162,39,0.18);
    display:flex;
    flex-direction:column;
    transition: margin-left 0.28s ease, background 0.25s;
  }
  .sidebar.collapsed{ margin-left:-270px; }
  .sidebarTop{
    padding:18px 16px 12px;
  }
  .brandRow{
    display:flex;
    align-items:baseline;
    justify-content:space-between;
    gap:8px;
    margin-bottom:14px;
  }
  .brandRow .brandNames{ display:flex; align-items:baseline; gap:8px; }
  .brandRow h1{
    font-family:'Cormorant Garamond', serif;
    font-weight:700;
    font-size:24px;
    margin:0;
    color:var(--cream);
  }
  .brandRow span{
    font-size:11px;
    color:var(--turquoise-light);
    opacity:0.8;
  }
  .themeToggle{
    background:transparent;
    border:1px solid rgba(201,162,39,0.4);
    color:var(--gold-soft);
    border-radius:8px;
    width:30px;
    height:30px;
    cursor:pointer;
    font-size:14px;
    flex-shrink:0;
  }
  .searchBox{
    width:100%;
    padding:8px 10px;
    border-radius:9px;
    border:1px solid rgba(201,162,39,0.3);
    background:rgba(245,238,220,0.05);
    color:var(--cream);
    font-family:'Manrope',sans-serif;
    font-size:12.5px;
    outline:none;
    margin-bottom:10px;
  }
  .searchBox::placeholder{ color:rgba(245,238,220,0.4); }
  .newChatBtn{
    width:100%;
    padding:11px 14px;
    border-radius:10px;
    border:1px solid rgba(201,162,39,0.45);
    background:rgba(201,162,39,0.1);
    color:var(--gold-soft);
    font-family:'Manrope',sans-serif;
    font-weight:600;
    font-size:14px;
    cursor:pointer;
    transition: background 0.15s, transform 0.1s;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:8px;
  }
  .newChatBtn:hover{ background:rgba(201,162,39,0.22); }
  .newChatBtn:active{ transform:scale(0.98); }
  .chatList{
    flex:1;
    overflow-y:auto;
    padding:10px 10px 12px;
    display:flex;
    flex-direction:column;
    gap:3px;
  }
  .chatItem{
    display:flex;
    align-items:center;
    gap:8px;
    padding:10px 12px;
    border-radius:9px;
    cursor:pointer;
    font-size:13.5px;
    color:var(--cream-dim);
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    transition: background 0.15s;
    position:relative;
  }
  .chatItem:hover{ background:rgba(128,128,128,0.08); }
  .chatItem.active{
    background:rgba(46,158,150,0.18);
    color:var(--cream);
    border:1px solid rgba(46,158,150,0.35);
  }
  .chatItem .pin{
    background:transparent;border:none;cursor:pointer;font-size:12px;
    opacity:0.5; flex-shrink:0; color:var(--gold-soft);
  }
  .chatItem .pin.pinned{ opacity:1; }
  .chatItem .title{ flex:1; overflow:hidden; text-overflow:ellipsis; }
  .chatItem .delBtn{
    opacity:0;
    background:transparent;
    border:none;
    color:var(--danger);
    cursor:pointer;
    font-size:14px;
    padding:2px 4px;
    transition:opacity 0.15s;
  }
  .chatItem:hover .delBtn{ opacity:0.8; }
  .chatItem .delBtn:hover{ opacity:1; }
  .sidebarFooter{
    padding:12px 16px 16px;
    font-size:11px;
    color:rgba(128,128,128,0.6);
    border-top:1px solid rgba(201,162,39,0.12);
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:8px;
  }
  .sidebarFooter button{
    background:transparent;
    border:1px solid rgba(201,162,39,0.3);
    color:var(--turquoise-light);
    font-size:10.5px;
    padding:4px 8px;
    border-radius:6px;
    cursor:pointer;
    font-family:'Manrope',sans-serif;
  }

  /* ---------- Main ---------- */
  .app{
    flex:1;
    min-width:0;
    display:flex;
    flex-direction:column;
    background: var(--lapis);
    position:relative;
    transition: background 0.25s;
  }
  .header{
    padding:18px 26px 14px;
    background: linear-gradient(180deg, var(--lapis-dark), var(--lapis));
    border-bottom:1px solid rgba(201,162,39,0.25);
    display:flex;
    align-items:center;
    gap:14px;
    position:relative;
    overflow:hidden;
  }
  .headerNeural{
    position:absolute;
    top:0; left:0;
    width:100%; height:100%;
    opacity:0.3;
    pointer-events:none;
  }
  .headerNeural circle{
    animation: neuralPulse 3.2s ease-in-out infinite;
  }
  .headerNeural circle:nth-child(2){ animation-delay:0.4s; }
  .headerNeural circle:nth-child(4){ animation-delay:0.8s; }
  .headerNeural circle:nth-child(6){ animation-delay:1.2s; }
  .headerNeural circle:nth-child(8){ animation-delay:1.6s; }
  @keyframes neuralPulse{
    0%,100%{ opacity:0.5; r:2.2; }
    50%{ opacity:1; r:3.2; }
  }
  .headerTitle{ position:relative; z-index:1; flex:1; min-width:0; }
  .menuToggle{
    background:transparent;
    border:1px solid rgba(201,162,39,0.4);
    color:var(--gold-soft);
    border-radius:8px;
    width:36px;
    height:36px;
    cursor:pointer;
    font-size:16px;
    flex-shrink:0;
  }
  .headerActions{ display:flex; gap:8px; position:relative; z-index:1; flex-shrink:0; }
  .headerActions button{
    background:transparent;
    border:1px solid rgba(201,162,39,0.4);
    color:var(--gold-soft);
    border-radius:8px;
    height:36px;
    padding:0 11px;
    cursor:pointer;
    font-size:13px;
    font-family:'Manrope',sans-serif;
  }
  .headerActions button:hover{ background:rgba(201,162,39,0.15); }
  .headerTitle h2{
    font-family:'Cormorant Garamond', serif;
    font-weight:700;
    font-size:24px;
    margin:0;
    color:var(--cream);
    letter-spacing:0.4px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .headerTitle p{
    margin:2px 0 0;
    font-size:12px;
    color:var(--turquoise-light);
    letter-spacing:0.3px;
    display:flex;
    align-items:center;
    gap:6px;
  }
  .onlineDot{
    width:7px;height:7px;border-radius:50%;
    background:#5fd68a;
    box-shadow:0 0 6px #5fd68a;
    animation: onlineBlink 2s infinite ease-in-out;
    flex-shrink:0;
  }
  @keyframes onlineBlink{
    0%,100%{ opacity:1; }
    50%{ opacity:0.35; }
  }
  .girih{
    height:12px;
    width:100%;
    background-image: repeating-linear-gradient(135deg, var(--gold) 0 2px, transparent 2px 12px),
                      repeating-linear-gradient(45deg, var(--turquoise) 0 2px, transparent 2px 12px);
    opacity:0.5;
    flex-shrink:0;
  }
  .messages{
    flex:1;
    overflow-y:auto;
    padding:24px 28px;
    display:flex;
    flex-direction:column;
    gap:4px;
    position:relative;
  }
  .messages.dragOver{
    outline: 2px dashed var(--turquoise);
    outline-offset:-8px;
    background: rgba(46,158,150,0.06);
  }
  @keyframes riseIn{
    from{ opacity:0; transform:translateY(10px); }
    to{ opacity:1; transform:translateY(0); }
  }
  .msgRow{
    display:flex;
    flex-direction:column;
    margin-bottom:12px;
    animation: riseIn 0.28s ease;
  }
  .msgRow.user{ align-items:flex-end; }
  .msgRow.bot{ align-items:flex-start; }
  .msg{
    max-width:82%;
    padding:12px 16px;
    border-radius:14px;
    line-height:1.55;
    font-size:15px;
    white-space:pre-wrap;
  }
  .msg.user{
    background:var(--turquoise);
    color:var(--lapis-dark);
    border-bottom-right-radius:3px;
  }
  .msg.bot{
    background:var(--bubble-bot-bg);
    border:1px solid rgba(201,162,39,0.3);
    color:var(--cream);
    border-bottom-left-radius:3px;
  }
  .msg.bot.typing{
    display:flex;
    align-items:center;
    gap:5px;
    padding:16px 18px;
  }
  .dot{
    width:6px;height:6px;border-radius:50%;
    background:var(--turquoise-light);
    animation: bounce 1.1s infinite ease-in-out;
  }
  .dot:nth-child(2){ animation-delay:0.15s; }
  .dot:nth-child(3){ animation-delay:0.3s; }
  @keyframes bounce{
    0%,80%,100%{ transform:translateY(0); opacity:0.5; }
    40%{ transform:translateY(-5px); opacity:1; }
  }
  .msgMeta{
    font-size:10.5px;
    color:rgba(128,128,128,0.7);
    margin-top:3px;
    padding:0 4px;
    display:flex;
    gap:6px;
    align-items:center;
  }
  .fileChip{
    display:inline-flex;
    align-items:center;
    gap:6px;
    margin-top:8px;
    padding:6px 10px;
    border-radius:8px;
    background:rgba(0,0,0,0.15);
    border:1px solid rgba(201,162,39,0.3);
    font-size:12.5px;
  }
  .imgGrid{
    display:flex;
    flex-wrap:wrap;
    gap:6px;
    margin-top:8px;
  }
  .imgGrid img{
    width:140px;
    height:140px;
    object-fit:cover;
    border-radius:10px;
    border:1px solid rgba(201,162,39,0.3);
  }
  .genImageWrap{
    margin-top:8px;
  }
  .genImageWrap img{
    max-width:320px;
    width:100%;
    border-radius:12px;
    display:block;
    border:1px solid rgba(201,162,39,0.35);
  }
  .msgActions{
    display:flex;
    gap:6px;
    margin-top:9px;
    flex-wrap:wrap;
  }
  .msgActions button, .msgActions a{
    background:transparent;
    border:1px solid rgba(201,162,39,0.3);
    color:var(--turquoise-light);
    font-size:11.5px;
    padding:3px 10px;
    border-radius:7px;
    cursor:pointer;
    font-family:'Manrope',sans-serif;
    text-decoration:none;
  }
  .msgActions button:hover, .msgActions a:hover{ background:rgba(201,162,39,0.15); }
  .msgActions button.reacted{ background:rgba(46,158,150,0.25); border-color:var(--turquoise); }
  .empty{
    margin:auto;
    text-align:center;
    color:var(--turquoise-light);
    opacity:0.7;
    font-size:14px;
    animation: riseIn 0.4s ease;
  }
  .suggestRow{
    display:flex;
    flex-wrap:wrap;
    gap:8px;
    justify-content:center;
    margin-top:14px;
  }
  .suggestRow button{
    background:rgba(46,158,150,0.12);
    border:1px solid rgba(46,158,150,0.4);
    color:var(--turquoise-light);
    padding:8px 14px;
    border-radius:20px;
    font-size:12.5px;
    cursor:pointer;
    font-family:'Manrope',sans-serif;
  }
  .suggestRow button:hover{ background:rgba(46,158,150,0.22); }
  .scrollDownBtn{
    position:absolute;
    bottom:14px;
    right:20px;
    width:38px;
    height:38px;
    border-radius:50%;
    background:var(--gold);
    color:var(--lapis-dark);
    border:none;
    font-size:16px;
    cursor:pointer;
    box-shadow:0 3px 10px rgba(0,0,0,0.3);
    display:none;
    z-index:5;
  }
  .scrollDownBtn.show{ display:block; }
  .composer{
    display:flex;
    gap:9px;
    padding:10px 26px 10px;
    background:var(--lapis-dark);
    border-top:1px solid rgba(201,162,39,0.25);
    align-items:flex-end;
  }
  .composer textarea{
    flex:1;
    resize:none;
    min-height:46px;
    max-height:140px;
    padding:12px 14px;
    border-radius:12px;
    border:1px solid rgba(201,162,39,0.4);
    background:rgba(128,128,128,0.06);
    color:var(--cream);
    font-family:'Manrope',sans-serif;
    font-size:15px;
    outline:none;
    transition:border-color 0.15s;
  }
  .composer textarea::placeholder{color:rgba(128,128,128,0.6);}
  .composer textarea:focus{border-color:var(--gold-soft);}
  .composer button{
    padding:0 20px;
    height:46px;
    border-radius:12px;
    border:none;
    background:var(--gold);
    color:var(--lapis-dark);
    font-weight:700;
    font-size:15px;
    cursor:pointer;
    transition:background 0.15s, transform 0.1s;
    flex-shrink:0;
  }
  .composer button:hover{background:var(--gold-soft);}
  .composer button:active{ transform:scale(0.97); }
  .composer button:disabled{opacity:0.5;cursor:default;transform:none;}
  #sendBtn.stopping{
    background: var(--danger) !important;
    color:#fff !important;
  }
  #sendBtn.stopping:hover{ background:#e06a4e !important; }
  .iconBtn{
    padding:0 13px !important;
    background:transparent !important;
    border:1px solid rgba(201,162,39,0.4) !important;
    color:var(--gold-soft) !important;
    font-size:17px !important;
  }
  .iconBtn.active{
    background:var(--turquoise) !important;
    color:var(--lapis-dark) !important;
    border-color:var(--turquoise) !important;
  }
  .composerFooter{
    display:flex;
    justify-content:space-between;
    padding:0 26px 12px;
    font-size:10.5px;
    color:rgba(128,128,128,0.55);
  }
  .msg img{
    max-width:100%;
    border-radius:10px;
    display:block;
    margin-top:8px;
  }
  .attachBar{
    display:none;
    align-items:center;
    gap:10px;
    padding:8px 26px;
    background:var(--lapis-dark);
    border-top:1px solid rgba(201,162,39,0.15);
    animation: riseIn 0.2s ease;
    flex-wrap:wrap;
  }
  .attachBar.show{ display:flex; }
  .attachThumb{
    position:relative;
    height:48px;
    width:48px;
    flex-shrink:0;
  }
  .attachThumb img{
    height:48px;
    width:48px;
    object-fit:cover;
    border-radius:8px;
    border:1px solid rgba(201,162,39,0.4);
    display:block;
  }
  .attachThumb .rm{
    position:absolute;
    top:-6px; right:-6px;
    width:18px; height:18px;
    border-radius:50%;
    background:var(--danger);
    color:#fff;
    border:none;
    font-size:11px;
    line-height:18px;
    text-align:center;
    cursor:pointer;
    padding:0;
  }
  .attachBar .fileIcon{
    height:48px;width:48px;
    display:flex;align-items:center;justify-content:center;
    font-size:20px;
    border-radius:8px;
    background:rgba(46,158,150,0.15);
    border:1px solid rgba(46,158,150,0.4);
  }
  .attachBar span{
    font-size:13px;
    color:var(--turquoise-light);
    flex:1;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .attachBar button{
    background:transparent;
    border:none;
    color:var(--gold-soft);
    cursor:pointer;
    font-size:14px;
  }
  .messages::-webkit-scrollbar, .chatList::-webkit-scrollbar{width:8px;}
  .messages::-webkit-scrollbar-thumb, .chatList::-webkit-scrollbar-thumb{background:rgba(201,162,39,0.35);border-radius:4px;}
  .codeWrap{
    position:relative;
    margin:10px 0;
    border-radius:10px;
    overflow:hidden;
    border:1px solid rgba(201,162,39,0.3);
  }
  .codeWrap pre{
    margin:0;
    padding:14px 16px;
    overflow-x:auto;
    font-size:13px;
    background:#0d1526 !important;
  }
  .codeCopyBtn{
    position:absolute;
    top:6px;
    right:6px;
    background:rgba(201,162,39,0.25);
    border:1px solid rgba(201,162,39,0.5);
    color:var(--gold-soft);
    font-size:11px;
    padding:4px 10px;
    border-radius:6px;
    cursor:pointer;
    font-family:'Manrope',sans-serif;
  }
  .codeCopyBtn:hover{background:rgba(201,162,39,0.4);}
  .toast{
    position:fixed;
    bottom:80px;
    left:50%;
    transform:translateX(-50%);
    background:var(--lapis-dark);
    border:1px solid rgba(201,162,39,0.5);
    color:var(--cream);
    padding:9px 18px;
    border-radius:20px;
    font-size:13px;
    z-index:50;
    opacity:0;
    pointer-events:none;
    transition:opacity 0.25s, transform 0.25s;
  }
  .toast.show{ opacity:1; transform:translateX(-50%) translateY(-6px); }

  @media (max-width: 720px){
    .sidebar{
      position:fixed;
      z-index:20;
      height:100vh;
      box-shadow:8px 0 24px rgba(0,0,0,0.4);
    }
    .sidebar.collapsed{ margin-left:-270px; }
    .sidebar:not(.collapsed){ margin-left:0; }
    .headerTitle h2{ font-size:20px; }
    .msg{ max-width:90%; }
    .headerActions button span.lbl{ display:none; }
  }
</style>
</head>
<body>
<div class="shell">

  <div class="sidebar" id="sidebar">
    <div class="sidebarTop">
      <div class="brandRow">
        <div class="brandNames">
          <h1>Sardor AI</h1>
          <span>suhbatlar</span>
        </div>
        <button class="themeToggle" id="themeToggle" title="Mavzuni almashtirish">🌙</button>
      </div>
      <input type="text" class="searchBox" id="searchBox" placeholder="🔍 Suhbatlarni qidirish...">
      <button class="newChatBtn" id="newChatBtn">+ Yangi suhbat <span style="opacity:.55;font-weight:400;">(Ctrl+K)</span></button>
    </div>
    <div class="chatList" id="chatList"></div>
    <div class="sidebarFooter">
      <span>Saydurasulov Sardor</span>
      <button id="exportAllBtn" title="Barcha suhbatlarni .txt qilib yuklab olish">⬇ Export</button>
    </div>
  </div>

  <div class="app">
    <div class="header">
      <svg class="headerNeural" viewBox="0 0 600 80" preserveAspectRatio="none">
        <path d="M0,55 L70,55 L92,25 L125,25 L148,55 L215,55 L238,18 L278,18 L300,55 L378,55 L400,30 L442,30 L464,55 L540,55 L562,15 L600,15" fill="none" stroke="#7fd4c9" stroke-width="1"/>
        <circle cx="92" cy="25" r="2.4" fill="#c9a227"/>
        <circle cx="238" cy="18" r="2.4" fill="#c9a227"/>
        <circle cx="400" cy="30" r="2.4" fill="#c9a227"/>
        <circle cx="562" cy="15" r="2.4" fill="#c9a227"/>
        <circle cx="148" cy="55" r="1.8" fill="#7fd4c9"/>
        <circle cx="300" cy="55" r="1.8" fill="#7fd4c9"/>
        <circle cx="464" cy="55" r="1.8" fill="#7fd4c9"/>
        <circle cx="70" cy="55" r="1.8" fill="#7fd4c9"/>
      </svg>
      <button class="menuToggle" id="menuToggle" title="Suhbatlar ro'yxati">☰</button>
      <div class="headerTitle">
        <h2 id="chatTitle">Sardor AI</h2>
        <p><span class="onlineDot"></span> Onlayn — javob berishga tayyor</p>
      </div>
      <div class="headerActions">
        <button id="renameBtn" title="Suhbat nomini o'zgartirish">✏️ <span class="lbl">Nomlash</span></button>
        <button id="shareBtn" title="Suhbatni nusxalash">🔗 <span class="lbl">Ulashish</span></button>
      </div>
    </div>
    <div class="girih"></div>
    <div class="messages" id="messages">
      <div class="empty" id="emptyState">
        Xabar yozing va suhbatni boshlang
        <div class="suggestRow" id="suggestRow">
          <button data-q="Salom, qalaysan?">👋 Salom</button>
          <button data-q="Menga qiziqarli bir fakt ayt">✨ Qiziqarli fakt</button>
          <button data-q="Python'da 'salom dunyo' deb chiqaradigan kod yoz">💻 Kod yozdir</button>
          <button data-q="Rasm chiz: tog'lar orasidagi quyosh botishi, sokin ko'l aks etgan holda">🎨 Rasm chizdir</button>
          <button data-q="Do'stlik haqida qisqa qo'shiq matni yoz">🎤 Qo'shiq yozdir</button>
        </div>
      </div>
      <button class="scrollDownBtn" id="scrollDownBtn" title="Pastga tushish">⬇</button>
    </div>
    <div class="attachBar" id="attachBar">
      <div id="attachPreviewSlot"></div>
      <span id="attachLabel"></span>
      <button id="attachRemoveBtn">✕ olib tashlash</button>
    </div>
    <div class="composer">
      <input type="file" id="imgInput" accept="image/*" multiple style="display:none;">
      <input type="file" id="fileInput" accept=".pdf,.txt,.md,.csv" style="display:none;">
      <button id="imgBtn" class="iconBtn" title="Rasm biriktirish">📷</button>
      <button id="fileBtn" class="iconBtn" title="Fayl biriktirish (PDF, TXT)">📎</button>
      <button id="micBtn" class="iconBtn" title="Ovozli xabar">🎤</button>
      <textarea id="input" placeholder="Xabaringizni yozing... (Ctrl+/ bilan bu yerga sakrang)" rows="1"></textarea>
      <button id="sendBtn">Yuborish</button>
      <button id="clearBtn" title="Bu suhbatni tozalash" style="background:transparent;border:1px solid rgba(201,162,39,0.4);color:var(--gold-soft);">Tozalash</button>
    </div>
    <div class="composerFooter">
      <span id="charCounter">0 belgi</span>
      <span>Enter — yuborish · Shift+Enter — yangi qator</span>
    </div>
  </div>
</div>
<div class="toast" id="toast"></div>

<script>
  // ---------------- State & storage ----------------
  const STORAGE_KEY = 'sardorAI_chats_v2';
  const ACTIVE_KEY = 'sardorAI_activeChat_v2';
  const THEME_KEY = 'sardorAI_theme_v1';
  const BACKEND_BASE = 'https://sardor-saydurasulov-bot.onrender.com';
  const CHAT_URL = BACKEND_BASE + '/chat';
  const IMAGE_URL = BACKEND_BASE + '/generate-image';

  const IMAGE_INTENT_RE = /\b(rasm|surat|kartinka|logo|banner)\b.*\b(chiz|yarat|soz|generatsi)|\bdraw\b|\bgenerate\b.*\bimage\b|\bnaris[uy]/i;

  let chats = {};
  let activeId = null;
  let sending = false;
  let pendingImages = [];
  let pendingFile = null;
  let lastInputWasVoice = false;
  let abortController = null;
  let searchQuery = '';

  function loadChats(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      chats = raw ? JSON.parse(raw) : {};
    }catch(e){ chats = {}; }
    activeId = localStorage.getItem(ACTIVE_KEY);
    if(!activeId || !chats[activeId]){
      const ids = Object.keys(chats);
      activeId = ids.length ? ids[ids.length - 1] : null;
    }
    if(!activeId){
      createChat();
    }
  }

  function persist(){
    try{
      localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
      localStorage.setItem(ACTIVE_KEY, activeId);
    }catch(e){
      console.warn('Saqlashda muammo (xotira to\'lgan bo\'lishi mumkin):', e);
    }
  }

  function createChat(){
    const id = 'c_' + Date.now() + '_' + Math.random().toString(36).slice(2,7);
    chats[id] = { id, title: 'Yangi suhbat', messages: [], pinned: false, draft: '' };
    activeId = id;
    persist();
    return id;
  }

  function showToast(text){
    const t = document.getElementById('toast');
    t.textContent = text;
    t.classList.add('show');
    clearTimeout(showToast._tm);
    showToast._tm = setTimeout(() => t.classList.remove('show'), 1800);
  }

  function timeNow(){
    return new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' });
  }

  function greetingByHour(){
    const h = new Date().getHours();
    if(h < 6) return "Tungi tinchlik 🌙 Nima haqida gaplashamiz?";
    if(h < 11) return "Xayrli tong! ☀️ Bugun sizga qanday yordam bera olaman?";
    if(h < 17) return "Assalomu alaykum! 👋 Nima haqida gaplashamiz?";
    if(h < 22) return "Xayrli kech! 🌆 Sizni tinglayman.";
    return "Kech bo'ldi, lekin men doim shu yerdaman 🌙 Nima kerak?";
  }

  // ---------------- Theme ----------------
  const themeToggle = document.getElementById('themeToggle');
  function applyTheme(theme){
    document.body.classList.toggle('light', theme === 'light');
    themeToggle.textContent = theme === 'light' ? '☀️' : '🌙';
  }
  function initTheme(){
    const saved = localStorage.getItem(THEME_KEY) || 'dark';
    applyTheme(saved);
  }
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light');
    const next = isLight ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });

  // ---------------- Sidebar rendering ----------------
  const chatListEl = document.getElementById('chatList');
  const chatTitleEl = document.getElementById('chatTitle');

  function renderChatList(){
    chatListEl.innerHTML = '';
    let ids = Object.keys(chats);
    if(searchQuery){
      const q = searchQuery.toLowerCase();
      ids = ids.filter(id => (chats[id].title || '').toLowerCase().includes(q));
    }
    ids.sort((a,b) => {
      const ca = chats[a], cb = chats[b];
      if(!!ca.pinned !== !!cb.pinned) return ca.pinned ? -1 : 1;
      const na = Number(a.split('_')[1]) || 0;
      const nb = Number(b.split('_')[1]) || 0;
      return nb - na;
    });
    for(const id of ids){
      const chat = chats[id];
      const item = document.createElement('div');
      item.className = 'chatItem' + (id === activeId ? ' active' : '');

      const pinBtn = document.createElement('button');
      pinBtn.className = 'pin' + (chat.pinned ? ' pinned' : '');
      pinBtn.textContent = '📌';
      pinBtn.title = chat.pinned ? "Qadab qo'yishni bekor qilish" : "Qadab qo'yish";
      pinBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        chat.pinned = !chat.pinned;
        persist();
        renderChatList();
      });

      const titleSpan = document.createElement('span');
      titleSpan.className = 'title';
      titleSpan.textContent = chat.title || 'Yangi suhbat';
      titleSpan.title = "Nomini o'zgartirish uchun ikki marta bosing";
      titleSpan.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        renameChat(id);
      });

      const delBtn = document.createElement('button');
      delBtn.className = 'delBtn';
      delBtn.textContent = '✕';
      delBtn.title = 'O\'chirish';
      delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteChat(id);
      });

      item.appendChild(pinBtn);
      item.appendChild(titleSpan);
      item.appendChild(delBtn);
      item.addEventListener('click', () => switchChat(id));
      chatListEl.appendChild(item);
    }
  }

  function renameChat(id){
    const chat = chats[id];
    const name = prompt("Suhbat nomini kiriting:", chat.title || '');
    if(name && name.trim()){
      chat.title = name.trim().slice(0, 60);
      persist();
      renderChatList();
      if(id === activeId) chatTitleEl.textContent = chat.title;
    }
  }
  document.getElementById('renameBtn').addEventListener('click', () => renameChat(activeId));

  document.getElementById('searchBox').addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderChatList();
  });

  function switchChat(id){
    if(id === activeId) return;
    if(sending) stopGenerating();
    if(chats[activeId]) chats[activeId].draft = inputEl.value;
    activeId = id;
    persist();
    renderChatList();
    renderMessages();
    inputEl.value = chats[activeId].draft || '';
    autoGrow();
    updateCharCounter();
    if(window.innerWidth <= 720) sidebar.classList.add('collapsed');
  }

  function deleteChat(id){
    delete chats[id];
    if(id === activeId){
      const ids = Object.keys(chats);
      activeId = ids.length ? ids[ids.length - 1] : createChat();
    }
    persist();
    renderChatList();
    renderMessages();
  }

  document.getElementById('newChatBtn').addEventListener('click', () => {
    if(sending) stopGenerating();
    if(chats[activeId]) chats[activeId].draft = inputEl.value;
    createChat();
    renderChatList();
    renderMessages();
    inputEl.value = '';
    autoGrow();
    updateCharCounter();
    if(window.innerWidth <= 720) sidebar.classList.add('collapsed');
  });

  document.getElementById('exportAllBtn').addEventListener('click', () => {
    let out = 'SARDOR AI — barcha suhbatlar\n\n';
    for(const id of Object.keys(chats)){
      const c = chats[id];
      out += `=== ${c.title || 'Yangi suhbat'} ===\n`;
      for(const m of c.messages){
        out += `[${m.role === 'user' ? 'SIZ' : 'SARDOR AI'}]: ${m.content || ''}\n`;
      }
      out += '\n';
    }
    downloadText(out, 'sardor-ai-suhbatlar.txt');
  });

  document.getElementById('shareBtn').addEventListener('click', () => {
    const chat = chats[activeId];
    if(!chat || chat.messages.length === 0){ showToast("Suhbat bo'sh"); return; }
    let out = '';
    for(const m of chat.messages){
      out += `${m.role === 'user' ? 'SIZ' : 'SARDOR AI'}: ${m.content || ''}\n\n`;
    }
    navigator.clipboard.writeText(out).then(() => showToast("Suhbat nusxalandi ✓"));
  });

  function downloadText(text, filename){
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  // ---------------- Sidebar toggle ----------------
  const sidebar = document.getElementById('sidebar');
  document.getElementById('menuToggle').addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });
  if(window.innerWidth <= 720) sidebar.classList.add('collapsed');

  // ---------------- Keyboard shortcuts ----------------
  document.addEventListener('keydown', (e) => {
    if(e.ctrlKey && e.key.toLowerCase() === 'k'){
      e.preventDefault();
      document.getElementById('newChatBtn').click();
    } else if(e.ctrlKey && e.key === '/'){
      e.preventDefault();
      inputEl.focus();
    }
  });

  // ---------------- Suggested questions ----------------
  function wireSuggestRow(el){
    el.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-q]');
      if(!btn) return;
      inputEl.value = btn.getAttribute('data-q');
      autoGrow();
      updateCharCounter();
      sendMessage();
    });
  }
  wireSuggestRow(document.getElementById('suggestRow'));

  // ---------------- Message rendering ----------------
  const messagesEl = document.getElementById('messages');
  const inputEl = document.getElementById('input');
  const sendBtn = document.getElementById('sendBtn');
  const scrollDownBtn = document.getElementById('scrollDownBtn');
  const charCounter = document.getElementById('charCounter');

  messagesEl.addEventListener('scroll', () => {
    const distFromBottom = messagesEl.scrollHeight - messagesEl.scrollTop - messagesEl.clientHeight;
    scrollDownBtn.classList.toggle('show', distFromBottom > 200);
  });
  scrollDownBtn.addEventListener('click', () => {
    messagesEl.scrollTo({ top: messagesEl.scrollHeight, behavior: 'smooth' });
  });

  function updateCharCounter(){
    charCounter.textContent = inputEl.value.length + ' belgi';
  }

  function renderMessageContent(container, text){
    const parts = text.split(/```(\w*)\n?([\s\S]*?)```/g);
    for(let i = 0; i < parts.length; i += 3){
      const plain = parts[i];
      if(plain) container.appendChild(document.createTextNode(plain));
      const lang = parts[i+1];
      const code = parts[i+2];
      if(code !== undefined){
        const wrap = document.createElement('div');
        wrap.className = 'codeWrap';
        const btn = document.createElement('button');
        btn.className = 'codeCopyBtn';
        btn.textContent = 'Copy';
        btn.addEventListener('click', () => {
          navigator.clipboard.writeText(code.trim()).then(() => {
            btn.textContent = 'Nusxalandi!';
            setTimeout(() => btn.textContent = 'Copy', 1500);
          });
        });
        const pre = document.createElement('pre');
        const codeEl = document.createElement('code');
        if(lang) codeEl.className = 'language-' + lang;
        codeEl.textContent = code.trim();
        pre.appendChild(codeEl);
        wrap.appendChild(btn);
        wrap.appendChild(pre);
        container.appendChild(wrap);
        if(window.hljs) window.hljs.highlightElement(codeEl);
      }
    }
  }

  // opts: { imageUrls, fileMeta, generatedImageUrl, showActions, rawText, time, reaction, onRegenerate, onEdit }
  function buildMessageEl(role, text, opts){
    opts = opts || {};
    const row = document.createElement('div');
    row.className = 'msgRow ' + (role === 'user' ? 'user' : 'bot');

    const div = document.createElement('div');
    div.className = 'msg ' + (role === 'user' ? 'user' : 'bot');
    const textHolder = document.createElement('div');
    if(text){
      if(role === 'bot' && text.includes('```')){
        renderMessageContent(textHolder, text);
      } else {
        textHolder.appendChild(document.createTextNode(text));
      }
    }
    div.appendChild(textHolder);

    if(opts.imageUrls && opts.imageUrls.length){
      const grid = document.createElement('div');
      grid.className = 'imgGrid';
      opts.imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        grid.appendChild(img);
      });
      div.appendChild(grid);
    }
    if(opts.generatedImageUrl){
      const wrap = document.createElement('div');
      wrap.className = 'genImageWrap';
      const img = document.createElement('img');
      img.src = opts.generatedImageUrl;
      wrap.appendChild(img);
      div.appendChild(wrap);
    }
    if(opts.fileMeta){
      const chip = document.createElement('div');
      chip.className = 'fileChip';
      chip.textContent = '📎 ' + opts.fileMeta.name;
      div.appendChild(chip);
    }

    if(opts.showActions !== false && (text || opts.generatedImageUrl)){
      const actions = document.createElement('div');
      actions.className = 'msgActions';

      const copyBtn = document.createElement('button');
      copyBtn.textContent = '📋';
      copyBtn.title = 'Nusxalash';
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(opts.rawText !== undefined ? opts.rawText : text).then(() => {
          showToast('Nusxalandi ✓');
        });
      });
      actions.appendChild(copyBtn);

      if(role === 'bot' && text){
        const speakBtn = document.createElement('button');
        speakBtn.textContent = '🔊';
        speakBtn.title = "Ovoz bilan o'qish";
        speakBtn.addEventListener('click', () => speak(text));
        actions.appendChild(speakBtn);
      }

      if(opts.generatedImageUrl){
        const dlBtn = document.createElement('a');
        dlBtn.textContent = '⬇';
        dlBtn.title = 'Yuklab olish';
        dlBtn.href = opts.generatedImageUrl;
        dlBtn.download = 'sardor-ai-rasm.png';
        actions.appendChild(dlBtn);
      }

      if(role === 'bot' && opts.onRegenerate){
        const regenBtn = document.createElement('button');
        regenBtn.textContent = '🔄';
        regenBtn.title = 'Qayta yaratish';
        regenBtn.addEventListener('click', opts.onRegenerate);
        actions.appendChild(regenBtn);
      }
      if(role === 'user' && opts.onEdit){
        const editBtn = document.createElement('button');
        editBtn.textContent = '✏️';
        editBtn.title = "Tahrirlash va qayta yuborish";
        editBtn.addEventListener('click', opts.onEdit);
        actions.appendChild(editBtn);
      }
      if(role === 'bot'){
        const upBtn = document.createElement('button');
        upBtn.textContent = '👍';
        upBtn.className = opts.reaction === 'up' ? 'reacted' : '';
        upBtn.addEventListener('click', () => {
          if(opts.onReact) opts.onReact(opts.reaction === 'up' ? null : 'up');
        });
        const downBtn = document.createElement('button');
        downBtn.textContent = '👎';
        downBtn.className = opts.reaction === 'down' ? 'reacted' : '';
        downBtn.addEventListener('click', () => {
          if(opts.onReact) opts.onReact(opts.reaction === 'down' ? null : 'down');
        });
        actions.appendChild(upBtn);
        actions.appendChild(downBtn);
      }

      div.appendChild(actions);
    }

    row.appendChild(div);

    if(opts.time){
      const meta = document.createElement('div');
      meta.className = 'msgMeta';
      meta.textContent = opts.time;
      row.appendChild(meta);
    }

    row._textHolder = textHolder;
    row._bubble = div;
    return row;
  }

  function renderMessages(){
    messagesEl.querySelectorAll('.msgRow, .empty').forEach(el => el.remove());
    const chat = chats[activeId];
    chatTitleEl.textContent = chat && chat.title !== 'Yangi suhbat' ? chat.title : 'Sardor AI';
    if(!chat || chat.messages.length === 0){
      const div = document.createElement('div');
      div.className = 'empty';
      div.innerHTML = 'Xabar yozing va suhbatni boshlang' +
        '<div class="suggestRow" id="suggestRow2">' +
        '<button data-q="Salom, qalaysan?">👋 Salom</button>' +
        '<button data-q="Menga qiziqarli bir fakt ayt">✨ Qiziqarli fakt</button>' +
        '<button data-q="Python\'da \'salom dunyo\' deb chiqaradigan kod yoz">💻 Kod yozdir</button>' +
        '<button data-q="Rasm chiz: tog\'lar orasidagi quyosh botishi, sokin ko\'l aks etgan holda">🎨 Rasm chizdir</button>' +
        '<button data-q="Do\'stlik haqida qisqa qo\'shiq matni yoz">🎤 Qo\'shiq yozdir</button>' +
        '</div>';
      messagesEl.insertBefore(div, scrollDownBtn);
      wireSuggestRow(div.querySelector('.suggestRow'));
      return;
    }
    let lastUserIdx = -1;
    chat.messages.forEach((m, i) => { if(m.role === 'user') lastUserIdx = i; });
    chat.messages.forEach((m, idx) => {
      let imageUrls = [];
      if(Array.isArray(m.images)) imageUrls = m.images.map(i => i.previewUrl).filter(Boolean);
      else if(m.image && m.image.previewUrl) imageUrls = [m.image.previewUrl];
      const genUrl = m.generatedImage ? `data:${m.generatedImage.mimeType};base64,${m.generatedImage.data}` : null;
      const role = m.role === 'user' ? 'user' : 'bot';
      const row = buildMessageEl(role, m.content, {
        imageUrls,
        fileMeta: m.file ? { name: m.file.name } : null,
        generatedImageUrl: genUrl,
        time: m.time || '',
        reaction: m.reaction,
        onReact: role === 'bot' ? (val) => { m.reaction = val; persist(); renderMessages(); } : null,
        onRegenerate: (role === 'bot' && idx === chat.messages.length - 1) ? () => regenerateLast() : null,
        onEdit: (role === 'user' && idx === lastUserIdx) ? () => editAndResend(idx) : null
      });
      messagesEl.insertBefore(row, scrollDownBtn);
    });
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function autoTitleChat(chat, firstText){
    if(chat.title === 'Yangi suhbat' && firstText){
      chat.title = firstText.length > 34 ? firstText.slice(0,34) + '…' : firstText;
    }
  }

  // ---------------- Regenerate / Edit ----------------
  function regenerateLast(){
    if(sending) return;
    const chat = chats[activeId];
    if(!chat || chat.messages.length === 0) return;
    if(chat.messages[chat.messages.length - 1].role === 'assistant'){
      chat.messages.pop();
      persist();
      renderMessages();
    }
    setSendingUI(true);
    runChatStream(chat).finally(() => { setSendingUI(false); messagesEl.scrollTop = messagesEl.scrollHeight; });
  }

  function editAndResend(idx){
    if(sending) return;
    const chat = chats[activeId];
    const msg = chat.messages[idx];
    const newText = prompt("Xabarni tahrirlang:", msg.content || '');
    if(newText === null) return;
    chat.messages = chat.messages.slice(0, idx);
    inputEl.value = newText;
    persist();
    renderMessages();
    autoGrow();
    updateCharCounter();
    sendMessage();
  }

  // ---------------- Composer ----------------
  function autoGrow(){
    inputEl.style.height = 'auto';
    inputEl.style.height = Math.min(inputEl.scrollHeight, 140) + 'px';
  }
  inputEl.addEventListener('input', () => {
    lastInputWasVoice = false;
    autoGrow();
    updateCharCounter();
    if(chats[activeId]) chats[activeId].draft = inputEl.value;
  });

  const imgInput = document.getElementById('imgInput');
  const imgBtn = document.getElementById('imgBtn');
  const MAX_IMAGES = 6;

  function addImageFile(file){
    if(!file || !file.type.startsWith('image/')) return;
    if(pendingImages.length >= MAX_IMAGES){
      showToast(`Eng ko'pi bilan ${MAX_IMAGES} ta rasm`);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      const base64 = dataUrl.split(',')[1];
      pendingImages.push({ mimeType: file.type, data: base64, name: file.name, previewUrl: dataUrl });
      showAttachBar();
    };
    reader.readAsDataURL(file);
  }

  imgBtn.addEventListener('click', () => imgInput.click());
  imgInput.addEventListener('change', () => {
    Array.from(imgInput.files).forEach(addImageFile);
    imgInput.value = '';
  });

  document.addEventListener('paste', (e) => {
    const items = e.clipboardData && e.clipboardData.items;
    if(!items) return;
    let found = false;
    for(const item of items){
      if(item.type.startsWith('image/')){
        const file = item.getAsFile();
        if(file){ addImageFile(file); found = true; }
      }
    }
    if(found) e.preventDefault();
  });

  // Drag & drop images onto the chat window
  ['dragenter','dragover'].forEach(evt => {
    messagesEl.addEventListener(evt, (e) => {
      e.preventDefault();
      messagesEl.classList.add('dragOver');
    });
  });
  ['dragleave','drop'].forEach(evt => {
    messagesEl.addEventListener(evt, (e) => {
      e.preventDefault();
      messagesEl.classList.remove('dragOver');
    });
  });
  messagesEl.addEventListener('drop', (e) => {
    const files = e.dataTransfer && e.dataTransfer.files;
    if(!files) return;
    Array.from(files).forEach(f => { if(f.type.startsWith('image/')) addImageFile(f); });
  });

  const fileInput = document.getElementById('fileInput');
  const fileBtn = document.getElementById('fileBtn');
  fileBtn.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if(!file) return;
    if(file.size > 8 * 1024 * 1024){
      showToast("Fayl juda katta (8MB dan oshmasin)");
      fileInput.value = '';
      return;
    }
    const reader = new FileReader();
    if(file.type === 'application/pdf'){
      reader.onload = () => {
        const base64 = reader.result.split(',')[1];
        pendingFile = { kind:'file', mimeType: 'application/pdf', data: base64, name: file.name };
        showAttachBar();
      };
      reader.readAsDataURL(file);
    } else {
      reader.onload = () => {
        pendingFile = { kind:'text', mimeType: 'text/plain', data: reader.result, name: file.name };
        showAttachBar();
      };
      reader.readAsText(file);
    }
  });

  const attachBar = document.getElementById('attachBar');
  const attachPreviewSlot = document.getElementById('attachPreviewSlot');
  const attachLabel = document.getElementById('attachLabel');
  document.getElementById('attachRemoveBtn').addEventListener('click', clearAttachment);

  function showAttachBar(){
    attachPreviewSlot.innerHTML = '';
    pendingImages.forEach((img, idx) => {
      const thumb = document.createElement('div');
      thumb.className = 'attachThumb';
      const im = document.createElement('img');
      im.src = img.previewUrl;
      const rm = document.createElement('button');
      rm.className = 'rm';
      rm.textContent = '✕';
      rm.addEventListener('click', () => {
        pendingImages.splice(idx, 1);
        if(pendingImages.length === 0 && !pendingFile) clearAttachment();
        else showAttachBar();
      });
      thumb.appendChild(im);
      thumb.appendChild(rm);
      attachPreviewSlot.appendChild(thumb);
    });
    if(pendingFile){
      const box = document.createElement('div');
      box.className = 'fileIcon';
      box.textContent = '📄';
      attachPreviewSlot.appendChild(box);
    }
    const parts = [];
    if(pendingImages.length) parts.push(pendingImages.length + ' ta rasm');
    if(pendingFile) parts.push(pendingFile.name);
    attachLabel.textContent = parts.join(' + ');
    attachBar.classList.add('show');
  }
  function clearAttachment(){
    pendingImages = [];
    pendingFile = null;
    imgInput.value = '';
    fileInput.value = '';
    attachBar.classList.remove('show');
  }

  // ---- Voice input ----
  const micBtn = document.getElementById('micBtn');
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = null;
  let listening = false;
  if(SpeechRecognition){
    recognition = new SpeechRecognition();
    recognition.lang = 'uz-UZ';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      inputEl.value = (inputEl.value ? inputEl.value + ' ' : '') + transcript;
      lastInputWasVoice = true;
      autoGrow();
      updateCharCounter();
    };
    recognition.onend = () => { listening = false; micBtn.classList.remove('active'); };
    recognition.onerror = () => { listening = false; micBtn.classList.remove('active'); };
  }
  micBtn.addEventListener('click', () => {
    if(!recognition){
      showToast("Bu brauzer ovozli kiritishni qo'llab-quvvatlamaydi");
      return;
    }
    if(listening){
      recognition.stop(); listening = false; micBtn.classList.remove('active');
    } else {
      recognition.start(); listening = true; micBtn.classList.add('active');
    }
  });

  function speak(text){
    if(!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'uz-UZ';
    utter.rate = 1;
    utter.pitch = 0.9;
    const voices = window.speechSynthesis.getVoices();
    let chosen = voices.find(v => /male/i.test(v.name));
    if(!chosen) chosen = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('uz'));
    if(!chosen) chosen = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('ru'));
    if(!chosen) chosen = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('en'));
    if(chosen) utter.voice = chosen;
    window.speechSynthesis.speak(utter);
  }
  if(window.speechSynthesis){
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }

  // ---------------- Send / Stream / Stop ----------------
  function setSendingUI(isSending){
    sending = isSending;
    if(isSending){
      sendBtn.textContent = '⏹ To\'xtatish';
      sendBtn.classList.add('stopping');
    } else {
      sendBtn.textContent = 'Yuborish';
      sendBtn.classList.remove('stopping');
      sendBtn.disabled = false;
    }
  }

  function stopGenerating(){
    if(abortController){
      abortController.abort();
      abortController = null;
    }
    setSendingUI(false);
  }

  sendBtn.addEventListener('click', () => {
    if(sending){ stopGenerating(); return; }
    sendMessage();
  });

  async function sendMessage(){
    if(sending) return;
    const text = inputEl.value.trim();
    const hasImages = pendingImages.length > 0;
    const attach = hasImages ? { kind: 'images', images: pendingImages.slice() } : pendingFile;

    if((!text && !attach)) return;

    setSendingUI(true);
    inputEl.value = '';
    autoGrow();
    updateCharCounter();

    const chat = chats[activeId];
    chat.draft = '';
    clearAttachment();

    let displayText = text;
    let userMsg = { role: 'user', content: text, time: timeNow() };

    if(attach && attach.kind === 'images'){
      userMsg.images = attach.images.map(img => ({ mimeType: img.mimeType, data: img.data, previewUrl: img.previewUrl }));
    } else if(attach && attach.kind === 'file'){
      userMsg.file = { mimeType: attach.mimeType, data: attach.data, name: attach.name };
    } else if(attach && attach.kind === 'text'){
      displayText = (text ? text + '\n\n' : '') + `[Fayl: ${attach.name}]`;
      userMsg.content = (text ? text + '\n\n' : '') + `--- ${attach.name} fayli mazmuni ---\n${attach.data}`;
    }

    if(chat.messages.length === 0) autoTitleChat(chat, text || (attach ? (attach.name || 'Rasmlar') : 'Yangi suhbat'));

    chat.messages.push(userMsg);
    persist();
    renderChatList();
    renderMessages();

    const isImageIntent = IMAGE_INTENT_RE.test(text);

    if(isImageIntent && text){
      await runImageGeneration(chat, text, attach && attach.kind === 'images' ? attach.images[0] : null);
    } else {
      await runChatStream(chat);
    }

    setSendingUI(false);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  async function runImageGeneration(chat, prompt, refImage){
    const typingEl = document.createElement('div');
    typingEl.className = 'msgRow bot';
    typingEl.innerHTML = '<div class="msg bot typing"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
    messagesEl.insertBefore(typingEl, scrollDownBtn);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    abortController = new AbortController();
    try{
      const body = { prompt };
      if(refImage) body.image = { mimeType: refImage.mimeType, data: refImage.data };

      const response = await fetch(IMAGE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: abortController.signal
      });
      const data = await response.json();
      typingEl.remove();

      if(!response.ok || !data.image){
        const errMsg = (data.error && data.error.message) ? data.error.message : "Rasmni chizib bo'lmadi.";
        renderBotError(chat, errMsg);
        return;
      }

      const caption = data.text || "Mana, tayyor! 🎨";
      chat.messages.push({ role: 'assistant', content: caption, generatedImage: data.image, time: timeNow() });
      persist();
      renderChatList();
      renderMessages();
    }catch(err){
      typingEl.remove();
      if(err.name !== 'AbortError'){
        renderBotError(chat, "Internetga ulanishda muammo bo'ldi. Qaytadan urinib ko'ring.");
      } else {
        chat.messages.pop();
        persist();
        renderChatList();
        renderMessages();
      }
    }finally{
      abortController = null;
    }
  }

  function renderBotError(chat, errMsg){
    chat.messages.pop();
    persist();
    renderMessages();
    const row = buildMessageEl('bot', "Xatolik: " + errMsg, { showActions: false });
    messagesEl.insertBefore(row, scrollDownBtn);
  }

  async function runChatStream(chat){
    const typingEl = document.createElement('div');
    typingEl.className = 'msgRow bot';
    typingEl.innerHTML = '<div class="msg bot typing"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
    messagesEl.insertBefore(typingEl, scrollDownBtn);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    abortController = new AbortController();
    let fullText = '';
    let botRow = null;
    let aborted = false;

    try{
      const response = await fetch(CHAT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: chat.messages }),
        signal: abortController.signal
      });

      if(!response.ok){
        let errMsg = 'Nomalum xatolik';
        try{ const data = await response.json(); errMsg = (data.error && data.error.message) ? data.error.message : errMsg; }catch(e){}
        typingEl.remove();
        renderBotError(chat, errMsg);
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while(true){
        const { done, value } = await reader.read();
        if(done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop();
        for(const line of lines){
          const trimmed = line.trim();
          if(!trimmed.startsWith('data:')) continue;
          const jsonStr = trimmed.slice(5).trim();
          if(!jsonStr || jsonStr === '[DONE]') continue;
          try{
            const obj = JSON.parse(jsonStr);
            if(obj.text){
              fullText += obj.text;
              if(!botRow){
                typingEl.remove();
                botRow = buildMessageEl('bot', '', { showActions: false });
                messagesEl.insertBefore(botRow, scrollDownBtn);
              }
              botRow._textHolder.textContent = fullText;
              messagesEl.scrollTop = messagesEl.scrollHeight;
            }
          }catch(e){}
        }
      }
    }catch(err){
      if(err.name === 'AbortError'){
        aborted = true;
      } else {
        typingEl.remove();
        renderBotError(chat, "Internetga ulanishda muammo bo'ldi. Wi-Fi yoki internetni tekshiring.");
        abortController = null;
        return;
      }
    }

    abortController = null;

    if(!fullText){
      typingEl.remove();
      if(!aborted){
        renderBotError(chat, "Kechirasiz, javob ololmadim.");
      } else {
        chat.messages.pop();
        persist();
        renderChatList();
        renderMessages();
      }
      return;
    }

    const finalText = fullText + (aborted ? '\n\n[to\'xtatildi]' : '');
    chat.messages.push({ role: 'assistant', content: finalText, time: timeNow() });
    persist();
    renderChatList();
    renderMessages();
    if(lastInputWasVoice && !aborted) speak(fullText);
    lastInputWasVoice = false;
  }

  document.getElementById('clearBtn').addEventListener('click', () => {
    if(!confirm('Shu suhbatni tozalashni xohlaysizmi?')) return;
    if(sending) stopGenerating();
    chats[activeId].messages = [];
    chats[activeId].title = 'Yangi suhbat';
    persist();
    renderChatList();
    renderMessages();
  });

  inputEl.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' && !e.shiftKey){
      e.preventDefault();
      if(!sending) sendMessage();
    }
  });

  // ---------------- Init ----------------
  initTheme();
  loadChats();
  renderChatList();
  renderMessages();
  inputEl.value = (chats[activeId] && chats[activeId].draft) || '';
  autoGrow();
  updateCharCounter();
</script>
</body>
</html>
