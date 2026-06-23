---
layout: workshop
title: Agent in a Day — 구·신 Copilot Studio 핸즈온
summary: M365 Copilot Agent Builder부터 구·신 Copilot Studio, Advanced 도구, Workflow까지 하루에 훑는 풀데이 워크샵.
level: 300
time: Full-day
author: 이영서
editions: ["Classic", "Public Preview"]
---

> 이 워크샵은 Copilot Studio의 **구(Classic) 버전과 신(New, Public Preview) 버전**을
> 한 흐름으로 다룹니다. 아래 목차는 초안이며, 각 섹션은 계속 보완될 예정입니다.

## 1. M365 Copilot Agent Builder vs Copilot Studio 비교

기능·목적 관점에서 두 도구를 간단한 비교표로 정리합니다. (제품 PPT 장표의 비교표 형태)

- **Agent Builder 예시** — 간단한 hands-on 링크만 가볍게 소개 ("원하면 직접 보세요" 수준)
  - 참고: [에이전트 생성 및 지침 작성 | Microsoft Copilot Studio](/labs/agentacademy-a1/)
- **Copilot Studio 간단 소개** — 구(Classic) → 신(New)으로 바뀐 배경 소개

> 📝 *작성 예정: 비교표(기능/목적/대상 사용자), Agent Builder 스크린샷.*

## 2. 구(Classic) Copilot Studio 기본 설명

기존 Copilot Studio의 핵심 작성 모델(에이전트, 토픽, 지식 소스, 변수, 채널)을 정리합니다.

- 참고: [반(半)개발형 Agent 만들기 | Microsoft Copilot Studio](/labs/agentthon-multi-agent/)

> 📝 *작성 예정: Classic 작성 모델 개요, 토픽/지식 소스 기본.*

## 3. New Copilot Studio 기본 설명 (구조)

새로운 Copilot Studio의 생성형 오케스트레이션 구조와 아키텍처를 소개합니다.

- Copilot Studio's New Agentic Harness & Python *(링크 추가 예정)*
- Microsoft Rebuilt Copilot Studio — Here's Everything New *(YouTube, 링크 추가 예정)*
- What's new in Copilot Studio: May 2026 update *(Microsoft, 링크 추가 예정)*

> 📝 *작성 예정: 신규 에이전틱 하니스(harness) 구조도, 변경점 요약.*

## 4. 구·신 Copilot Studio 핸즈온

이 섹션은 Microsoft Copilot Agents Labs의 **Advanced Agent in a Day** 워크샵을 구성하는
**5개 모듈 전체를 한국어 학습 가이드로 옮겨 담은** 것입니다. 원문 모듈 페이지와 슬라이드 덱(PPT)을
바탕으로 핵심 개념과 흐름을 한국어로 정리했으며, 각 모듈마다 원문 출처·슬라이드·연계 랩 링크를 함께 표기합니다.

> **출처 및 라이선스 (Source & License)**
> 본 모듈의 원문은 Microsoft가 공개한 **[microsoft/mcs-labs](https://github.com/microsoft/mcs-labs)** 저장소이며,
> **MIT License — Copyright © Microsoft Corporation** 하에 배포됩니다.
> 본 한국어 자료는 MIT 라이선스가 허용하는 범위(저작권·라이선스 고지 유지) 안에서 원문을 **번역·요약·재구성**한 것입니다.
> 라이선스 전문: <https://github.com/microsoft/mcs-labs/blob/main/LICENSE>
> · 워크샵 원문: [Advanced Agent in a Day](https://microsoft.github.io/mcs-labs/workshops/advanced-agent-in-a-day/)

### 4.1 개요 & 진행 일정

빌더용 **300레벨 풀데이 워크샵**으로, 이미 Copilot Studio 기본기를 갖춘 사용자를 대상으로 합니다.
멀티 에이전트 핵심 개념, 도구(커넥터·에이전트 플로우·MCP 서버·커스텀 프롬프트·CUA),
생성형 오케스트레이션과 동적 체이닝, 신규 **Workflows** 자율 에이전트 기능, 그리고
터미널에서 Copilot Studio 스킬로 에이전트를 작성하는 방법까지 깊이 있게 다룹니다.

| 시간 | 세션 | 레벨 | 소요 |
|------|------|:----:|:----:|
| 09:00 | **환영 + 소개** — 강사 소개, 하루 일정 리뷰, 선행지식(에이전트 생성·토픽·지식 소스·변수) 확인 | — | 15분 |
| 09:15 | **[모듈 1 — 핵심 개념 개요](#42-모듈-1--copilot-studio-핵심-개념-개요)** | 200 | 30분 |
| 09:45 | **[모듈 2 — 도구(Tools)](#43-모듈-2--copilot-studio-도구tools)** | 300 | 30분 |
| 10:15 | 커피 브레이크 / Q&A | — | 15분 |
| 10:30 | **[랩 1 — 도구(Tools)](https://microsoft.github.io/mcs-labs/labs/mcs-tools/?event=advanced-agent-in-a-day)** | 300 | 60분 |
| 11:30 | **[모듈 3 — 오케스트레이션과 동적 체이닝](#44-모듈-3--오케스트레이션과-동적-체이닝)** | 300 | 45분 |
| 12:15 | 점심 | — | 60분 |
| 13:15 | **[랩 2 — 오케스트레이션](https://microsoft.github.io/mcs-labs/labs/mcs-orchestration/?event=advanced-agent-in-a-day)** | 300 | 60분 |
| 14:15 | **[모듈 4 — 워크플로우(Workflows)](#45-모듈-4--워크플로우workflows)** | 300 | 30분 |
| 14:45 | 커피 브레이크 / Q&A | — | 15분 |
| 15:00 | **[랩 3 — 워크플로우(Workflows)]({{ '/labs/mcs-workflows-kr/' | relative_url }})** | 300 | 60분 |
| 16:00 | **[모듈 5 — 개발자 도구용 플러그인](#46-모듈-5--개발자-도구용-copilot-studio-플러그인)** | 300 | 30분 |

---

### 4.2 모듈 1 — Copilot Studio 핵심 개념 개요

> **레벨** 200 · **소요** 30분 · **출처** [Copilot Studio Core Concepts Overview](https://microsoft.github.io/mcs-labs/modules/copilot-studio-core-concepts-overview/) · [슬라이드(PPT) 다운로드](https://github.com/microsoft/mcs-labs/raw/main/presentations/advanced-agent-in-a-day/02.%20Copilot%20Studio%20Core%20Concepts_AIAD.pptx) · MIT © Microsoft

에이전트·토픽·지식 소스·도구·변수·채널 등 구성 요소를 **Classic 작성 모델**과 **신규 생성형 오케스트레이션** 양쪽 관점에서 훑는 개요 모듈입니다.

**Classic Copilot Studio의 주요 구성 요소**

| 구성 요소 | 한국어 설명 |
|-----------|-------------|
| **Topics(토픽)** | 메이커가 대화의 모든 흐름을 직접 설계·제어하는 작성형 경험. 구조적이고 예측 가능한 상호작용에 유리 |
| **Knowledge(지식)** | SaaS 기반 RAG 패턴으로 콘텐츠를 검색·요약. 일반 RAG와 달리 토픽·도구와 함께 오케스트레이션 가능 |
| **Tools(도구)** | Power Platform 커넥터·Power Automate 플로우를 감싼 "대화형 API 래퍼". 입력을 모으고 출력을 동적으로 생성 |
| **Variables(변수)** | 대화 상태·정보를 메모리에 저장해 대화를 적응적으로 끌고 감 (상태 유지) |
| **Agents(에이전트)** | 도구·지식을 묶어 소비하거나 외부 에이전트와 연결 (멀티 에이전트 오케스트레이션) |
| **Channels(채널)** | Teams, 웹챗, SharePoint 등 다양한 인터페이스로 에이전트를 원클릭 배포 |
| **Analytics / Evaluations** | 대화·감사·성능에 대한 E2E 텔레메트리, 테스트셋 기준 품질 평가 |

**지식(Knowledge)과 RAG의 핵심**

- 단순 검색이 아니라 사람의 정보 탐색 과정을 모사: **요청 → 쿼리 이해 → 검색 → 관련성 점검·반복 → 요약 → 더 나은 응답**.
- RAG 3단계: **Search(최적화 쿼리로 인덱스 검색) → Retrieve(가장 관련 있는 스니펫 추출) → Summarize(인용 포함 근거 기반 응답)**.
- RAG가 **하지 않는 것**: 두 긴 문서 비교, 계약-정책 준수 검증 같은 심층 문서 분석. 이런 작업은 결정론적 로직·사람 검토·전용 도구가 필요.

**Classic vs New 오케스트레이터**

- **Classic(메인라인)**: *계획 생성 → 실행*. 사용자 발화에서 토픽/액션/지식으로 계획을 세우고 슬롯 필링·실행 후 통합 응답 생성.
- **New(추론 루프)**: *Think → Act → Observe → Reflect*를 목표 달성까지 반복. 매 턴을 실제 관측에 근거해 결정하므로 긴 작업에 안정적이고 오류에서 회복 가능. 단, **토픽·차일드 에이전트 미지원, 비결정론적 전용**.

**New 컴포넌트 모델**: 전역 행동·사실·액션·절차·메모리·위임·코드 실행을 분리. **Skills(`SKILL.md` 절차 + 샌드박스 보조 파일)**, **Connected agents(필요 시에만 위임)** 등으로 구성. 설계 원칙은 "루프 안에서 신뢰·검사·안전이 가능한 *가장 작은 컴포넌트*를 선택".

**Evaluations(평가)**: 테스트셋을 여러 그레이더(General Quality, Compare Meaning, Text Similarity, Exact/Partial Match, Capability Use, Classification)로 채점하고 합격률 임계값을 설정. 테스트셋은 **Zones of Coverage**로 설계 — ① 반드시 통과(≈100%), ② 비핵심/모호(<100%, 투자 로드맵), ③ 가드레일(차단되어야 하므로 ≈0%).

---

### 4.3 모듈 2 — Copilot Studio 도구(Tools)

> **레벨** 300 · **소요** 30분 · **출처** [Copilot Studio Tools](https://microsoft.github.io/mcs-labs/modules/tools-overview/) · [슬라이드(PPT) 다운로드](https://github.com/microsoft/mcs-labs/raw/main/presentations/bootcamp/08.%20Copilot%20Studio%20Tools%20Overview%20RRS_CB.pptx) · MIT © Microsoft
> **연계 랩** → [랩 1: Copilot Studio Tools](https://microsoft.github.io/mcs-labs/labs/mcs-tools/?event=advanced-agent-in-a-day)

에이전트가 단순 대화를 넘어 **실제 행동(시스템 연결·프로세스 자동화·기록 작성)**을 하도록 만드는 도구 생태계를 다룹니다. 오케스트레이터가 에이전트 지침과 사용자 입력에 따라 어떤 도구를 호출할지 결정합니다.

**에이전트 도구 상자(Agent Toolbox)**

| 도구 | 한국어 설명 |
|------|-------------|
| **프리빌트 커넥터** | 1,400+ 플러그앤플레이 서비스. DLP·인증·거버넌스 내장, 에이전트·플로우 간 재사용 |
| **커스텀 커넥터** | 자체 REST API를 트리거·액션으로 래핑해 조직 전체에서 재사용 |
| **REST API(직접)** | OpenAPI 스펙만 지정하면 바로 연결. 빠른 프로토타이핑용, 에이전트별 설정(재사용 X) |
| **MCP 서버** | 표준화된 도구 인터페이스 + 자동 디스커버리. 서버 한 번 업데이트로 모든 에이전트 반영 |
| **에이전트 플로우** | 결정론적 워크플로우 자동화. 매번 동일하게 실행되어야 하는 비즈니스 로직 |
| **AI 프롬프트** | 모델 선택형 통제된 AI 액션. 텍스트·문서·이미지 변환, 구조화 출력(JSON 등) |
| **Computer Use(CUA)** | 비전 기반 데스크톱/브라우저 UI 자동화 |

**커넥터 vs REST API vs MCP — 선택 기준**

- **Power Platform 커넥터** — *안전한 기본값*. 커넥터가 존재하거나 조직 전반 재사용·거버넌스가 필요할 때.
- **REST API(직접)** — *빠른 길*. 일회성 통합·빠른 프로토타입·아직 커넥터가 없을 때.
- **MCP 서버** — *미래 대비*. API가 자주 바뀌거나 여러 에이전트가 같은 도구를 쓰거나 중앙 관리를 원할 때.
- 빠른 판단: **프리빌트 커넥터 있으면 사용 → 없고 재사용 필요하면 커스텀 커넥터/MCP → 단순 프로토타입이면 REST API.**

**에이전트 플로우(Agent Flows)**: 에이전트는 목표에 따라 자율적으로 추론하고, 반복적·예측 가능한 무거운 작업은 결정론적 플로우가 처리. AI 액션을 선택적으로 끼워 넣어 규칙으로 표현하기 어려운 판단만 지능화. 다단계·조건부 승인(휴먼 인 더 루프)으로 보험 청구·금융 컴플라이언스·법무 문서 검토·공급망 품질관리 같은 실제 프로세스를 반영.

**MCP(Model Context Protocol)**: "AI 에이전트를 위한 USB-C". 도구마다 커스텀 통합을 만들지 않고 표준 인터페이스로 연결. **LLM 단독(정적 지식) → LLM+커넥터(도구마다 커스텀 코드) → LLM+MCP(표준화·즉시 호환)**. Dataverse·D365(Sales/Finance/Supply Chain 등)·GitHub·Outlook 등 OOB MCP 서버 카탈로그가 빠르게 확장 중이며 커스텀 MCP 서버도 구축 가능.

**Computer Use Agents(CUA)**: 사용자가 프롬프트를 주면 → CUA가 화면 스크린샷으로 상태를 파악하고 액션(클릭·입력·스크롤)을 결정·실행 → 다시 관측하며 완료까지 반복. API가 없는 레거시/UI 시스템 자동화에 강력. **RPA vs CUA**: RPA는 규칙 기반·UI 트리·스크립트인 반면 CUA는 LLM 기반·비전·자연어 지시·시각 피드백 기반 자기수정. 보안은 Azure 경계 내 실행, 학습 미사용, 전송·저장 암호화, 스크린샷 감사 추적, Intune 정책 제어, Responsible AI 검토.

---

### 4.4 모듈 3 — 오케스트레이션과 동적 체이닝

> **레벨** 300 · **소요** 45분 · **출처** [Orchestration and Dynamic Chaining](https://microsoft.github.io/mcs-labs/modules/orchestration/) · [슬라이드(PPT) 다운로드](https://github.com/microsoft/mcs-labs/raw/main/presentations/bootcamp/09.%20Orchestration%20and%20Dynamic%20Chaining%20Concepts_CB.pptx) · MIT © Microsoft
> **연계 랩** → [랩 2: Copilot Studio 오케스트레이션](https://microsoft.github.io/mcs-labs/labs/mcs-orchestration/?event=advanced-agent-in-a-day)

에이전트가 모든 대화 경로를 수동으로 짜는 대신, 도구·토픽·지식·지침을 제공하면 **오케스트레이터가 동적으로 계획을 조립**하는 방식을 다룹니다.

**자연어 이해(NLU)** — 예: *"다음 주에 파리행 비행기를 예약하고 싶어"* → **의도**(비행기 예약) + **엔티티**(목적지=파리, 날짜=다음 주) 추출 → 의도·엔티티·맥락에 가장 맞는 응답/추가 질문 결정.

**세 가지 의도 인식 방식**

- **내장 NLU 모델** — 사전 학습된 기본 모델. 트리거 구문·커스텀 엔티티로 구성. 쿼리당 단일 의도, 확장 불가.
- **생성형 오케스트레이션(Classic)** — LLM 사용. 복합 의도 처리, 토픽/액션/지식 체이닝, 누락 입력 자동 질문, 통합 응답 생성. (체인당 5메시지, 트리거 가능 토픽·액션 128개 제한)
- **New 오케스트레이터(추론 루프)** — LLM 기반, 긴 작업 안정성, 오류 회복, 지침 준수, 턴 간 동적 계획 갱신, 더 나은 도구 선택·검증. (토픽·차일드 에이전트 미지원, 비결정론적 전용)

**Classic vs Generative 오케스트레이션**

- **Classic**: 발화 → 토픽 선택(트리거 구문 매칭) → 매칭된 토픽을 *작성된 그대로* 실행 → 매칭 없으면 지식 검색 → 그래도 없으면 폴백. 예측 가능하지만 메이커가 대부분의 경로를 수동 설계.
- **Generative**: 발화 → 계획 생성(토픽/도구/지식 조합) → 슬롯 필링·실행 → 모든 출력으로 통합 응답. 더 대화형이고 유연.

**입력/출력 설계(핸드셰이크)**: 입력은 명확한 이름·설명·예시·검증용 값 목록을 제공(누락 시 동적 질문 자동 생성). 출력은 통합 응답에 쓰이며, 같은 정보를 여러 AI 프롬프트로 중복 전달("double paying") 피하고, 종료가 필요하면 *End all Topics*로 중복 응답 방지. 한 토픽의 출력(OrderID)을 다른 토픽의 입력으로 자연스럽게 전달.

**지침(Instructions)·이름·설명**: 오케스트레이터는 이름·설명에 크게 의존하므로 정확하게 작성. *플레인 텍스트로 묘사하지 말고* `/`로 도구·토픽·변수를 직접 참조. 단순하게 시작해 점진적으로 개선.

**동적 체이닝(Dynamic Chaining)**: 한 출력 → 다음 도구/에이전트/토픽 입력으로 연결(체인당 최대 5단계). 플래너가 "답에 이르는 경로"를 찾고 필요한 입력·가용 정보를 평가해 계획을 세우고 실행. 예: *"내 계좌 잔액은?"* → 계정 식별 → 금융 시스템 조회 → "$132.16".

**왜 New 에이전트로 이동하나**: 더 적고 똑똑한 질문(이미 아는 것은 추론, 누락만 질문, 묶음/재정렬), 곁가지·맥락 전환 후 작업 복귀, 더 정확한 도구 선택·병렬 실행, 지침 우선(instruction-first), 오류에서 지능적 재시도, 턴을 가로지르는 유연한 흐름. 기반 개념: **Chain of Thought(중간 추론 표출)**, **Self-Reflection & Critique(자기 검토·재시도)**, **Termination Conditions(목표 달성·예산 소진·복구 불가 오류·사용자 중단·진척 없음)**.

**마이그레이션 멘탈 모델**: *포팅이 아니라 재설계* — 토픽·변수·Power Fx·차일드 에이전트 등을 1:1 복사하지 말고, "에이전트가 수행해야 할 작업(intent)" 기준으로 루프에 맞는 컴포넌트로 번역.

---

### 4.5 모듈 4 — 워크플로우(Workflows)

> **레벨** 300 · **소요** 30분 · **출처** [Workflows](https://microsoft.github.io/mcs-labs/modules/workflows/) · MIT © Microsoft
> **연계 랩** → [Workflows 한국어 클론 랩]({{ '/labs/mcs-workflows-kr/' | relative_url }}) · [원문 랩(mcs-labs)](https://microsoft.github.io/mcs-labs/labs/mcs-workflows/?event=advanced-agent-in-a-day)

인라인 에이전트 연결과 **예약·이벤트 기반 트리거**로 에이전트가 스스로 동작하는 차세대 자율 에이전트 기능을 다룹니다. Classic 자율 에이전트 트리거 모델을 넘어, 사람이 묻지 않아도 일정·이벤트에 따라 에이전트가 능동적으로 작업을 수행합니다.

#### 📦 한국어로 클론한 실습 페이지 (원문 랩 → 한국어 전체 번역)

원문 **[랩 3: Workflows (mcs-labs)](https://microsoft.github.io/mcs-labs/labs/mcs-workflows/?event=advanced-agent-in-a-day)** 의
5개 Use Case 전체(작업 시간 블로킹, Order Management 설정, M365 Copilot 휴먼 인 더 루프, 재고 관리 인라인 에이전트, Price Quote 에이전트 호출)를
**한국어로 싹 다 클론 코딩한 별도 페이지**를 마련했습니다. (MIT © Microsoft, 출처 명시)

- ▶ **[Workflows — 이벤트 기반 자율 에이전트 (한국어 클론)]({{ '/labs/mcs-workflows-kr/' | relative_url }})**

#### ✍️ 제가 직접 만든 Daily Brief 워크플로우 실습

아래 **Daily Brief Workflow** 핸즈온은 위 모듈 개념(트리거 + 인라인/멀티 에이전트 + 구조화 출력)을 실제로 적용해
**제가 직접 설계·제작한 오리지널 실습**입니다. 매일 특정 회사 뉴스 브리프를 자동 생성해 메일로 발송하는 워크플로우를 구축합니다.

- [Daily Brief Workflow (한국어)]({{ '/labs/daily-brief-kr/' | relative_url }}) — *이영서 제작*
- [Daily Brief Workflow (English)]({{ '/labs/daily-brief-en/' | relative_url }}) — *이영서 제작*

> 📝 원문 모듈 페이지에는 별도 슬라이드 덱이 연결되어 있지 않습니다. 위 한국어 클론 랩 또는 직접 제작한 Daily Brief 랩으로 이벤트 기반 워크플로우를 실습하세요.

---

### 4.6 모듈 5 — 개발자 도구용 Copilot Studio 플러그인

> **레벨** 300 · **소요** 30분 · **출처** [Copilot Studio Plugin](https://microsoft.github.io/mcs-labs/modules/copilot-studio-plugin/) · [슬라이드(PPT) 다운로드](https://github.com/microsoft/mcs-labs/raw/main/presentations/bootcamp/13.%20Skills%20for%20Copilot%20Studio_CB.pptx) · MIT © Microsoft

**Claude Code · GitHub Copilot CLI · VS Code**에서 **YAML 파일로 Copilot Studio 에이전트를 작성·테스트·문제 해결**하는 플러그인입니다. 터미널/에디터에서 바로 클라우드의 에이전트를 다룰 수 있습니다.

**무엇을 하나 (4가지 영역)**

| 영역 | 한국어 설명 |
|------|-------------|
| **Manage** | 로컬 파일 ↔ 클라우드 간 에이전트 콘텐츠 clone·push·pull·sync |
| **Author** | 토픽·액션·지식·트리거·변수 YAML 생성/편집 |
| **Test** | 게시된 에이전트 대상 포인트 테스트·배치 스위트·평가 분석 |
| **Troubleshoot** | 잘못된 토픽 라우팅·검증 오류·예기치 않은 동작 디버깅 |

**4개 전문 에이전트**

- `/copilot-studio-manage` — clone · pull · push
- `/copilot-studio-author` — new-topic · add-action · add-knowledge · edit-triggers
- `/copilot-studio-test` — chat-with-agent · run-tests · create-eval
- `/copilot-studio-troubleshoot` — validate · known-issues · best-practices

**빠른 시작 워크플로우**: ① Clone(브라우저 인증으로 다운로드) → ② Author(고유 ID로 유효한 YAML 생성) → ③ Validate(스키마·베스트프랙티스 점검) → ④ Push(드래프트로 업로드) → ⑤ Publish(Copilot Studio UI에서 게시) → ⑥ Test(게시된 에이전트 응답 검증).

**구성**: 로컬 YAML 파일(`agent.mcs.yml`, `topics/`, `actions/`, `knowledge/`, `templates/`) + 4개 에이전트 + 30+ 스킬 + 번들 Node.js 스크립트 + 평가 프레임워크. **설치**: Node.js 18+, VS Code Copilot Studio 확장(push/pull/clone용), Power Platform 환경 필요. 마켓플레이스 또는 `microsoft/skills-for-copilot-studio` 저장소에서 설치.

**테스트 역량**: 포인트 테스트(단일/멀티턴 발화), 배치 스위트(Power CAT Copilot Studio Kit 기반 기대값·합격/불합격), 평가 분석(Copilot Studio에서 CSV 내보내 실패 분석·수정 제안).

> 📝 *추가 사례(작성 예정):* Plan & handoff 하는 skill zip 기반 에이전트, MS Learn 플러그인을 활용하는 에이전트, NEW Copilot Studio Agents — Working with Skills(YouTube) 등.

## 5. Advanced Tool

환경 구축과 확장에 활용하는 고급 도구를 정리합니다.

- **PAC CLI** — 환경 구축을 위한 도구
- **Copilot Studio skill**로 구축 & extension
- 함께 활용 가능한 **MCP 도구** — MS Learn, Dataverse MCP, Power Apps 연결 등

> 📝 *작성 예정: PAC CLI 명령 예시, MCP 도구 연결 다이어그램.*

## 6. New Copilot Studio — Workflow

신규 Workflow 기능 핸즈온은 별도 실습으로 연결됩니다.

- [Daily Brief Workflow (한국어)](/labs/daily-brief-kr/)
- [Daily Brief Workflow (English)](/labs/daily-brief-en/)

## 7. 언제 Cowork, 언제 New Copilot Studio? (Positioning)

New Copilot Studio와 다른 옵션(예: Cowork)의 포지셔닝과 선택 기준을 정리합니다.

> 📝 *작성 예정: 사용 시나리오별 의사결정 가이드.*
