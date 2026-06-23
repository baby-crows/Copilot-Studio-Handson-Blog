---
layout: workshop
title: New Copilot Studio — 구조 자세히 보기
summary: 재설계된 New Copilot Studio가 "UI 리스킨"이 아니라 새로운 에이전트 아키텍처인 이유 — 왜 다시 만들었나, 무엇이 달라졌나, 6대 구성요소.
level: 300
time: 읽기 자료
author: 이영서
editions: ["Public Preview"]
accent: "#B11F4B"
---

<style>
.ncs-root{--cp-surface:#fff;--cp-surface-soft:#F5F4F2;--cp-border:#EDEBE9;--cp-text:#201F1E;--cp-text-muted:#605E5C;--cp-text-soft:#797775;--cp-accent:#B11F4B;--cp-accent-soft:rgba(177,31,75,.08);--cp-link:#0078D4;--cp-warning:#996A00;--cp-shadow:0 8px 28px rgba(0,0,0,.12)}
.ncs-note{background:var(--cp-accent-soft,rgba(177,31,75,.08));border-left:4px solid #B11F4B;border-radius:0 .625rem .625rem 0;padding:13px 18px;margin:18px 0;font-size:.95rem;color:#201F1E}
.ncs-warn{background:rgba(245,158,11,.12);border-left:4px solid #996A00;border-radius:0 .625rem .625rem 0;padding:13px 18px;margin:18px 0;font-size:.9rem;color:#201F1E}
.ncs-draft{display:inline-block;font-size:.7rem;font-weight:700;color:#996A00;border:1px solid #996A00;border-radius:999px;padding:2px 8px;margin-left:8px;vertical-align:middle}
.ncs-fgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin:18px 0}
.ncs-fcard{background:#fff;border:1px solid #EDEBE9;border-radius:14px;padding:15px 18px;box-shadow:0 1px 2px rgba(0,0,0,.06)}
.ncs-fcard .ico{font-size:1.2rem}
.ncs-fcard h4{font-size:1rem;margin:4px 0 6px;color:#B11F4B}
.ncs-fcard p{font-size:.88rem;color:#605E5C;margin:0}
.ncs-cgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:18px 0}
.ncs-comp{background:#fff;border:1px solid #EDEBE9;border-radius:14px;padding:16px 18px;box-shadow:0 1px 2px rgba(0,0,0,.06);border-top:3px solid #B11F4B}
.ncs-comp .cnum{font-size:.7rem;font-weight:700;letter-spacing:.05em;color:#797775}
.ncs-comp h4{font-size:1.05rem;margin:2px 0 6px;color:#201F1E}
.ncs-comp .def{font-size:.9rem;color:#201F1E;margin-bottom:8px}
.ncs-comp .analogy{font-size:.82rem;color:#797775;border-top:1px dashed #EDEBE9;padding-top:8px}
.ncs-comp .analogy b{color:#B11F4B}
.ncs-scard{display:flex;flex-direction:column;background:#fff;border:1px solid #EDEBE9;border-radius:14px;overflow:hidden;text-decoration:none;color:inherit;box-shadow:0 1px 2px rgba(0,0,0,.06);transition:border-color .15s,box-shadow .15s,transform .15s}
.ncs-scard:hover{border-color:#B11F4B;box-shadow:0 8px 28px rgba(0,0,0,.12);transform:translateY(-2px);text-decoration:none}
.ncs-scard .sthumb{width:100%;aspect-ratio:16/9;object-fit:cover;border:0;border-bottom:1px solid #EDEBE9;background:#F5F4F2;margin:0;border-radius:0;box-shadow:none;display:block}
.ncs-scard .sbody{padding:12px 14px 14px}
.ncs-scard .stype{font-size:.68rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#B11F4B}
.ncs-scard h4{font-size:.95rem;margin:3px 0 4px;color:#201F1E}
.ncs-scard p{font-size:.82rem;color:#605E5C;margin:0}
.ncs-scard .sgo{font-size:.78rem;color:#0078D4;font-weight:600;margin-top:8px;display:block}
.ncs-hgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:16px 0}
.ncs-hcard{display:flex;flex-direction:column;gap:4px;background:#fff;border:1px solid #EDEBE9;border-radius:12px;padding:12px 14px;text-decoration:none;color:inherit;box-shadow:0 1px 2px rgba(0,0,0,.06);transition:border-color .15s,box-shadow .15s,transform .15s}
.ncs-hcard:hover{border-color:#B11F4B;box-shadow:0 8px 28px rgba(0,0,0,.12);transform:translateY(-2px);text-decoration:none}
.ncs-hcard .hstep{font-size:.66rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#B11F4B}
.ncs-hcard h4{font-size:.9rem;margin:0;color:#201F1E}
.ncs-hcard p{font-size:.78rem;color:#605E5C;margin:0}
.ncs-flag{display:flex;align-items:center;gap:8px;font-size:.84rem;color:#797775;margin:6px 0 0}
@media (max-width:820px){.ncs-fgrid,.ncs-cgrid{grid-template-columns:1fr}.ncs-hgrid{grid-template-columns:1fr 1fr}}
</style>

최근 재설계(rebuilt)된 Copilot Studio는 화면만 바뀐 것이 아니라, **에이전틱 하네스(코딩 하네스·CLI 레이어) 위에 AI 코어를 재건축**한 새로운 런타임입니다.<span class="ncs-draft">PREVIEW</span> 왜 다시 만들었는지, 무엇이 달라졌는지, 새 에이전트는 어떤 구성요소로 이뤄지는지를 정리합니다.

> **참고 소스** — YouTube "Microsoft Rebuilt Copilot Studio"(Reza Dorrani) · Microsoft Copilot Studio 공식 문서·블로그 · New Copilot Studio What's New · Solution Engineer 치원님 가이드(Agent_Blog) 2·3부

## 1. 왜 다시 만들었나 — 기존(클래식) Studio의 구조적 한계

클래식 Studio는 **모든 경로를 사람이 미리 그려야** 했습니다. 시나리오가 복잡해질수록 분기가 폭발했고, 다단계·장기 작업에서 흐름이 끊겼습니다.

- **흐름이 깨짐**: 다단계 중 예상 못한 입력이 들어오면 토픽이 끊김
- **분기 폭발**: 복잡해질수록 노드·조건이 기하급수적으로 증가
- **도구 호출 경직**: 언제 무엇을 부를지 메이커가 전부 설계해야 함
- **긴 작업 불가**: "읽고 분석해 보고서 작성" 같은 long-horizon 작업에 난항

Anthropic이 진단한 에이전트의 두 가지 실패 모드도 같은 맥락입니다.

- **① one-shot 소진**: 한 번에 다 하려다 컨텍스트가 중간에 소진 → 다단계가 끊기고 미완성 종료
- **② 조기 완료 선언**: 진척만 보고 다 됐다고 선언 → 핵심이 안 됐는데 대화 종료

<div class="ncs-note"><strong>FAQ — "그냥 UI 리스킨 아닌가요?"</strong> 아닙니다. 신뢰성·다단계 향상은 UI가 아니라 <strong>새로운 AI 코어</strong>에서 시작됩니다.</div>

## 2. 무엇이 새로워졌나 — AI 코어 재건축

AI 코어(오케스트레이터)를 **coding harness · CLI 레이어** 위에 다시 지었습니다. 핵심 개선은 다음과 같습니다.

<div class="ncs-fgrid">
<div class="ncs-fcard"><div class="ico">📌</div><h4>지시 준수 강화</h4><p>긴 대화에서도 원래 지침을 놓치지 않음 (강한 instruction adherence)</p></div>
<div class="ncs-fcard"><div class="ico">⏱️</div><h4>장기·다단계 작업</h4><p>중간에 무너지지 않고 끝까지 수행 (long-horizon execution)</p></div>
<div class="ncs-fcard"><div class="ico">🔁</div><h4>재귀적 실행</h4><p>복잡한 문제를 스스로 단계로 쪼개 반복 (recursive task execution)</p></div>
<div class="ncs-fcard"><div class="ico">📄</div><h4>리치 파일 생성</h4><p>전용 컨테이너에서 Word·PPT·Excel·PDF 산출, 대용량 콘텐츠 처리</p></div>
<div class="ncs-fcard"><div class="ico">🧩</div><h4>스킬(Skills) 지원</h4><p>필요할 때만 로드하는 재사용 지침(markdown). GitHub Copilot·Claude Code 스킬 임포트도 가능</p></div>
<div class="ncs-fcard"><div class="ico">🗂️</div><h4>빌드 인터페이스 간소화</h4><p>구성 탭을 9개 → 4개로 축소: Build · Preview · Evaluate · Monitor</p></div>
</div>

### 에이전트 작성 화면 & 라이프사이클

| 탭 | 역할 |
|----|------|
| **Build 빌드** | 지침·지식·도구·스킬·모델 구성 |
| **Preview 미리 보기** | 미리 보기 채팅으로 대화형 테스트 |
| **Evaluate 평가** | 테스트 세트로 품질 측정 |
| **Monitor 모니터** | 작업·활동·성능 검토 (게시 후) |

라이프사이클: **① 생성(Create) → ② 빌드(Build) → ③ 테스트(Test, Preview·Evaluate) → ④ 게시(Publish) → ⑤ 모니터(Monitor)**

### 워크플로우 · 컴퓨터 사용 · 음성 (공식 블로그)

- **새 워크플로우 디자이너**: 단일 캔버스에서 결정론적 단계와 에이전트를 결합. 노드 단위 테스트·버전 관리.
- **에이전트 노드(Agent nodes)**: 워크플로우 중 단순 if-then으로 표현 못 하는 지점에 추론·도구 오케스트레이션·지식 검색이 가능한 에이전트를 호출.
- **MCP 서버**: Model Context Protocol 도구 생태계 연결(프리뷰) — 보안·권한·컴플라이언스 경계 내에서 실행.
- **컴퓨터 사용 에이전트(Computer use) 정식 출시(GA)**: API가 없는 웹·데스크톱 앱을 UI를 통해 직접 조작·자동화.
- **실시간 음성 에이전트 GA(북미, Dynamics 365 Contact Center)**: 발신자 식별·질의 응답·맥락 유지 상담사 전환. S2S(speech-to-speech) 지원.
- **A2A(Agent-to-Agent) 통신 GA** · **Work IQ REST API/CLI**: 에이전트 간 위임·협업, 외부 시스템과의 표준 연결.

## 3. 구(클래식) vs 신(New CLI) 구조 비교

같은 "Copilot Studio" 이름이지만 **실행 모델 자체가 다릅니다.** 핵심은 클래식의 "검색 기반(RAG)" vs New CLI의 "실행 기반(Code+Tool)"입니다.

| 영역 | 클래식 Studio | New Studio (CLI) | 강화 효과 |
|------|---------------|------------------|-----------|
| **실행 모델** | 토픽 트리(흐름 설계) | 격리 컨테이너 + 에이전틱 루프 | 다단계·장기, 분기 폭발 해소 |
| **참조자료** | 검색 스니펫 답변 | 실파일 다운로드 + Python 처리 | 대용량·코드 처리 정확도 향상 |
| **산출물** | 텍스트 위주 | Word·PPT·Excel·PDF (created/) | 산출 형식 대폭 확장 |
| **도구 실행** | 사전 설계 액션 | bash·python·grep 실시간 루프 | 적응·재시도·재귀 |
| **코드 실행** | 없음 / 제한적 | 사전 설치 Python(격리) | 대용량 데이터 분석 |
| **메모리** | 변수·토픽 상태 | 단기 DB + 장기 M365 | 컨텍스트 추적·체크포인트 |
| **보안 경계** | 플랫폼 거버넌스 | 세션별 격리 + sandbox + 엔진 차단 | 세션 격리·최소 권한 |

### 참조자료 처리 — 가장 크게 개선된 부분 ★

<div class="ncs-fgrid">
<div class="ncs-fcard"><h4>클래식 — 검색 기반(RAG)</h4><p>파일을 통째로 받지 않음 → 질문을 검색 쿼리로 변환 → Azure AI Search/SharePoint에서 유사 청크 Top-K(512~2048 토큰)만 LLM에 삽입. <strong>청크에 없으면 답 못함 ❌</strong> (근사치)</p></div>
<div class="ncs-fcard"><h4>New CLI — 실행 기반(Code)</h4><p>원본 파일을 직접 열어 처리 → <code>/app/uploads</code>에 다운로드 → Python으로 전체 행 집계·변환 → 결과 요약만 LLM에. <strong>집계·정렬·필터 모두 정확값 ✅</strong></p></div>
</div>

<div class="ncs-note"><strong>핵심 정리:</strong> ① 업계 하네스 원리를 Microsoft 강점으로 재구현 ② 세션마다 격리 컨테이너에서 실제 도구·코드가 동작(미허용 사이트·패키지 차단) ③ RAG → 코드 실행 ④ 같은 철학, 다른 목적 — <strong>Claude Code = 자율 / Studio CLI = 거버넌스 + M365 데이터 + HITL(Enterprise)</strong></div>

## 4. 새 에이전트의 구성요소 — 6대 빌드 요소

New Copilot Studio에서 에이전트 하나는 **6개 부품**으로 구성됩니다. 핵심 멘탈모델은 **"무엇을(What)은 사람이 적고, 어떻게(How)는 에이전트가 한다"** — 유능한 신입에게 일을 맡기듯, 환경만 갖춰주고 방식은 에이전트가 정합니다.

<div class="ncs-cgrid">
<div class="ncs-comp"><div class="cnum">01</div><h4>지침 (Instructions)</h4><div class="def">항상 켜져 있는 <strong>상위 규칙(헌법)</strong>. 정체성·범위·행동 규칙을 짧고 명확하게.</div><div class="analogy">비유: <b>근무 수칙</b> — 항상 지켜야 할 최상위 규칙</div></div>
<div class="ncs-comp"><div class="cnum">02</div><h4>스킬 (Skills)</h4><div class="def">필요할 때만 꺼내 쓰는 <strong>재사용 지침 묶음</strong>(markdown, 온디맨드 로드).</div><div class="analogy">비유: <b>업무 매뉴얼</b> — 특정 작업의 방법을 적은 문서(필요할 때 펼침)</div></div>
<div class="ncs-comp"><div class="cnum">03</div><h4>도구 (Tools)</h4><div class="def">외부에서 실제로 행동하는 <strong>손발</strong>(커넥터·MCP·코드 인터프리터).</div><div class="analogy">비유: <b>연장</b> — 실제로 무언가를 실행하는 수단</div></div>
<div class="ncs-comp"><div class="cnum">04</div><h4>참고자료 (Knowledge)</h4><div class="def">에이전트가 읽는 <strong>지식</strong>(엑셀·문서). New CLS는 RAG를 넘어 코드로 직접 처리.</div><div class="analogy">비유: <b>참고 문서·자료실</b> — 읽고 근거로 삼는 지식</div></div>
<div class="ncs-comp"><div class="cnum">05</div><h4>연결된 에이전트 (Connected agents)</h4><div class="def">전문 작업을 <strong>위임</strong>하는 협업 에이전트(컨텍스트 격리).</div><div class="analogy">비유: <b>전문 동료</b> — 깊은 작업을 위임하는 협업자</div></div>
<div class="ncs-comp"><div class="cnum">06</div><h4>메모리 (Memory)</h4><div class="def">대화·작업의 <strong>맥락 유지</strong>(단기 세션 + 장기 M365 2계층).</div><div class="analogy">비유: <b>업무 노트</b> — 대화·작업의 맥락 보관</div></div>
</div>

> 출처: [Solution Engineer 치원님 가이드 2부 — 새 에이전트 빌드의 6요소](https://chichoi1991.github.io/Agent_Blog/chapters/newcs2-build/) · 해당 저자 제작 자료입니다.

## 5. 영상으로 보기 — 엔드투엔드 실습 데모

Reza Dorrani의 **"Microsoft Rebuilt Copilot Studio — Everything New"**는 새 경험으로 **IT 헬프데스크 에이전트 "Rex"**를 처음부터 끝까지(생성 → 스킬·도구·메모리 → 테스트 → 워크플로우 연동 → M365 게시) 만드는 26분 실습 데모입니다. 위 1~4장의 개념이 실제 화면에서 어떻게 동작하는지 눈으로 확인하기 좋습니다.

<div class="ncs-fgrid">
<a class="ncs-scard" href="https://www.youtube.com/watch?v=CaEEv9Y-ibs" target="_blank" rel="noopener"><img class="sthumb" src="https://img.youtube.com/vi/CaEEv9Y-ibs/hqdefault.jpg" alt="Microsoft Rebuilt Copilot Studio 유튜브 썸네일" /><span class="sbody"><span class="stype">유튜브 · Reza Dorrani · 약 26분</span><h4>Microsoft Rebuilt Copilot Studio — Everything New 🚀</h4><p>IT 헬프데스크 에이전트 "Rex" 엔드투엔드 빌드 데모</p><span class="sgo">시청 →</span></span></a>
<div class="ncs-fcard"><h4>영상에서 참고할 부분 (타임라인)</h4><p style="font-size:.84rem;color:#3B3A39;line-height:1.7"><strong>~1:00</strong> 클래식 → 새 경험 전환(Try it now)<br><strong>~2:00</strong> Build 탭 핵심 개념 한눈에<br><strong>~5:00</strong> 스킬 업로드 &amp; 직접 작성<br><strong>~9:00</strong> 메모리 토글 ON + 설정<br><strong>~11:00</strong> Preview 실측(Word/PDF 생성·메일·SharePoint)<br><strong>~17:00</strong> 워크플로우 디자이너 → 에이전트 도구로 연결<br><strong>~26:00</strong> 완성 에이전트를 M365에서 사용</p><span class="ncs-flag">※ 시간은 자동 자막 기준 대략값입니다.</span></div>
</div>

## 6. 직접 해보기 — 새 에이전트 실습 (핸즈온)

2부에서 익힌 6요소를 실제 클릭 순서로 조립해 **"통신사 세일즈 어시스턴트"**를 완성하는 핸즈온입니다. SharePoint 판매 엑셀을 분석하고, Word 안내 문서를 참조해 답하며, HTML 대시보드를 만들어 메일로 발송합니다.

<div class="ncs-hgrid">
<a class="ncs-hcard" href="https://chichoi1991.github.io/Agent_Blog/chapters/newcs3-1-setup-agent/" target="_blank" rel="noopener"><span class="hstep">Step 1</span><h4>사전 준비 &amp; 생성·지침</h4><p>프리뷰 진입 → 빈 에이전트 → 지침 작성</p></a>
<a class="ncs-hcard" href="https://chichoi1991.github.io/Agent_Blog/chapters/newcs3-2-knowledge/" target="_blank" rel="noopener"><span class="hstep">Step 2</span><h4>참조자료 추가</h4><p>SharePoint 폴더 연결 + 코드 처리 원리</p></a>
<a class="ncs-hcard" href="https://chichoi1991.github.io/Agent_Blog/chapters/newcs3-3-single-skill/" target="_blank" rel="noopener"><span class="hstep">Step 3</span><h4>단일 스킬 작성</h4><p>UI에 바로 붙여넣는 SKILL.md 한 장</p></a>
<a class="ncs-hcard" href="https://chichoi1991.github.io/Agent_Blog/chapters/newcs3-4-skill-package/" target="_blank" rel="noopener"><span class="hstep">Step 4</span><h4>스킬 패키지 임포트</h4><p>디자인·템플릿을 묶은 ZIP 고성능 스킬</p></a>
<a class="ncs-hcard" href="https://chichoi1991.github.io/Agent_Blog/chapters/newcs3-5-tools/" target="_blank" rel="noopener"><span class="hstep">Step 5</span><h4>커넥터·MCP 추가</h4><p>Work IQ Mail·OneDrive MCP</p></a>
<a class="ncs-hcard" href="https://chichoi1991.github.io/Agent_Blog/chapters/newcs3-6-test/" target="_blank" rel="noopener"><span class="hstep">Step 6</span><h4>테스트</h4><p>프롬프트 #1~#5 실측 + 점검</p></a>
<a class="ncs-hcard" href="https://chichoi1991.github.io/Agent_Blog/chapters/newcs3-7-deploy/" target="_blank" rel="noopener"><span class="hstep">Step 7</span><h4>배포 &amp; 트러블슈팅</h4><p>게시·채널 제약·실채널 재반복</p></a>
<a class="ncs-hcard" href="https://chichoi1991.github.io/Agent_Blog/chapters/newcs3-handson/" target="_blank" rel="noopener" style="border-color:#B11F4B"><span class="hstep">전체</span><h4>핸즈온 개요 →</h4><p>3부 전체 흐름 한눈에 보기</p></a>
</div>

<div class="ncs-warn">📌 <strong>출처 명시</strong> — 위 핸즈온(2·3부) 자료는 <strong>Solution Engineer 치원님(Agent_Blog)</strong>의 제작물입니다. 본 워크샵 자료가 아니며, 원문에 그대로 연결합니다. · <a href="https://chichoi1991.github.io/Agent_Blog/chapters/newcs3-handson/" target="_blank" rel="noopener">핸즈온 원문 열기 ↗</a></div>

> 본 문서는 교육용 정리 자료이며 프리뷰(preview) 기준입니다. 기능·화면·일정은 변경될 수 있으니(subject to change) 실제 도입 전 공식 문서를 확인하세요.
