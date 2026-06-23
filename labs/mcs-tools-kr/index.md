---
layout: lab
title: "Copilot Studio Tools — 에이전트에 도구 장착하기 (한국어)"
summary: "커넥터·에이전트 플로우·MCP 서버·커스텀 프롬프트·CUA로 에이전트를 확장하는 법. Advanced Agent in a Day 랩 1을 이미지 포함 한국어로 클론."
edition: "Public Preview"
level: 300
time: "60분"
audience: "Maker"
author: "이영서"
accent: "#5B5FC7"
tags: ["Tools", "Connector", "Agent Flow", "MCP", "Custom Prompt", "CUA"]
source_url: "https://microsoft.github.io/mcs-labs/labs/mcs-tools/?event=advanced-agent-in-a-day"
source_title: "Copilot Studio Tools — Microsoft Copilot Agents Labs (mcs-labs)"
next_url: /labs/mcs-workflows-kr/
next_title: "Workflows — 이벤트 기반 자율 에이전트 (한국어)"
---

# Copilot Studio Tools — 에이전트에 도구 장착하기

> **출처 및 라이선스 (Source & License)**
> 본 페이지는 Microsoft가 공개한 **[microsoft/mcs-labs](https://github.com/microsoft/mcs-labs)** 의 랩
> **[Copilot Studio Tools](https://microsoft.github.io/mcs-labs/labs/mcs-tools/?event=advanced-agent-in-a-day)** 를 한국어로 클론·번역한 것입니다.
> 원문은 **MIT License — Copyright © Microsoft Corporation** 하에 배포되며, 본 한국어 자료는 MIT 라이선스가 허용하는 범위
> (저작권·라이선스 고지 유지) 안에서 원문을 번역·재구성했습니다.
> 라이선스 전문: <https://github.com/microsoft/mcs-labs/blob/main/LICENSE>
> · 본 페이지의 스크린샷은 원문 랩(MIT © Microsoft)에서 가져온 것입니다.

도구(Tools)는 대화형 에이전트를 강력한 비즈니스 어시스턴트로 바꿔 줍니다. **커넥터**는 수백 개 서비스와의 사전 제작 통합을,
**에이전트 플로우**는 Power Fx 기반의 결정론적 비즈니스 로직을, **MCP 서버**는 Dataverse 같은 데이터 소스의 실시간 접근을,
**커스텀 프롬프트**는 일관된 구조화 응답을 제공합니다. API가 없는 시스템은 **CUA(Computer Using Agents)**로 GUI를 시뮬레이션해 자동화합니다.

---

## 랩 정보

| 항목 | 내용 |
|------|------|
| **레벨** | 300 |
| **대상** | Maker |
| **소요** | 60분 (+ 추가 점수 CUA 약 20분) |
| **목표** | 커넥터로 외부 서비스 통합, 에이전트 플로우로 결정론적 로직 구축, MCP 서버로 실시간 데이터 접근, 커스텀 프롬프트로 구조화 응답 생성. (선택) CUA로 레거시 시스템 자동화 |

---

## 왜 중요한가 (Why This Matters)

도구를 에이전트의 **손과 발**이라고 생각하세요.

- **도구가 없으면:** 에이전트는 지식 소스와 지침에 근거한 답변만 가능 — 행동·실시간 데이터·비즈니스 로직 실행 불가.
- **도구가 있으면:** 데이터베이스 조회, 계산, API 호출, 레거시 시스템 연동, 구조화된 실행 가능한 응답을 제공하는 진짜 어시스턴트가 됩니다.

이 랩이 해결하는 흔한 문제들:

- "내 에이전트는 답은 하지만 실제로 **아무것도 하지 못한다**."
- "Dataverse 등 시스템의 **실시간 데이터**에 접근해야 한다."
- "**항상 같은 결과**를 내야 하는 비즈니스 규칙이 있다 — AI만으로는 결정론적이지 않다."
- "**API가 없는 레거시 시스템**에 연결해야 한다."

60분 동안 에이전트를 확장하는 네 가지 방법을 배우고, *말만 하는 게 아니라 행동하는* 에이전트를 만듭니다.

---

## 핵심 개념 (Core Concepts)

| 개념 | 설명 |
|------|------|
| **Connectors(커넥터)** | 수백 개 Microsoft·서드파티 서비스와의 사전 제작 통합. 메일 발송·레코드 생성·외부 API 조회 등 |
| **Agent Flows(에이전트 플로우)** | Power Fx로 입력을 처리해 예측 가능한 출력을 내는 결정론적·규칙 기반 워크플로우. 항상 일관돼야 하는 비즈니스 로직에 필수 |
| **MCP Servers** | Dataverse 같은 데이터 소스에 실시간·동적 접근을 제공하는 Model Context Protocol 서버. 라이브 데이터에 자연어 질의 |
| **Custom Prompts(커스텀 프롬프트)** | 데이터 소스의 특정 필드를 끌어와 응답을 표준화하는 구조화 프롬프트 템플릿 |
| **CUA(Computer Using Agents)** | GUI를 사람처럼 조작해, API가 없는 레거시 시스템 자동화 |

**참고 문서(원문 링크):**
[Copilot Studio 도구 개요](https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent) ·
[에이전트 플로우](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow) ·
[Dataverse MCP 연결](https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp) ·
[프롬프트 노드](https://learn.microsoft.com/microsoft-copilot-studio/nlu-prompt-node) ·
[커넥터 사용](https://learn.microsoft.com/microsoft-copilot-studio/advanced-connectors) ·
[Computer use](https://learn.microsoft.com/microsoft-copilot-studio/computer-use) ·
[Free Dictionary API](https://dictionaryapi.dev/)

---

## 사전 준비 (Prerequisites)

- 적절한 라이선스로 **Microsoft Copilot Studio** 접근 권한.
- Copilot Studio가 활성화된 **Power Platform 환경**.
- Copilot Studio 인터페이스 기본 친숙도.
- (CUA 추가 점수용) Outlook 통합이 활성화된 Office 365 환경.

---

## 학습 목표 (Summary of Targets)

이 랩을 마치면 다음을 할 수 있습니다.

- 커넥터로 외부 서비스를 에이전트에 통합.
- 커미션 계산용 결정론적 비즈니스 로직을 가진 에이전트 플로우 구축.
- 실시간 자연어 데이터 접근을 위한 Dataverse MCP 서버 연결.
- 특정 데이터 필드로 응답을 구조화하는 커스텀 프롬프트 생성.
- (추가 점수) API가 없는 레거시 시스템을 자동화하는 CUA 구성.

---

## 다루는 Use Case

| # | 제목 | 내용 | 소요 |
|---|------|------|:----:|
| 1 | 커넥터로 에이전트 확장 | 사전 제작 커넥터로 외부 서비스 통합·행동 | 15분 |
| 2 | 에이전트 플로우로 결정론적 로직 구축 | 항상 일관된 결과를 내는 비즈니스 규칙 구현 | 15분 |
| 3 | MCP 서버로 실시간 데이터 접근 | 라이브 Dataverse 데이터에 자연어 질의 | 20분 |
| 4 | 구조화 응답용 커스텀 프롬프트 생성 | 일관된 비즈니스 응답을 위해 에이전트 출력 표준화 | 10분 |
| EC | (추가 점수) CUA로 레거시 시스템 자동화 | API 없는 시스템을 데스크톱 시뮬레이션으로 자동화 (선택) | 약 20분 |

---

## Use Case 1 — 커넥터로 에이전트 확장

**목표:** Free Dictionary API용 커스텀 커넥터를 만들고, 에이전트에 도구로 추가해, 자연어 대화로 단어 조회를 테스트합니다.

**시나리오:** 단어 정의·어원·발음을 조회하는 Dictionary Agent가 필요합니다. Free Dictionary API가 데이터를 제공하지만 사전 제작 커넥터가 없으므로, 커스텀 커넥터를 만들어 에이전트 도구로 연결합니다.

### 1) Dictionary Agent 만들기

1. [Microsoft Copilot Studio](https://copilotstudio.microsoft.com/)에서 개발 환경인지 확인.
2. 왼쪽 내비게이션에서 **Agents** 선택.
3. Agents 목록에서 **New Agent** 옆 아래 화살표(chevron) → **New classic agent** 선택. *Name your agent* 대화상자에 `Dictionary Agent` 입력 → **Create**.

![New classic agent를 보여주는 New Agent 분할 버튼 메뉴]({{ '/labs/mcs-tools-kr/images/new-agent-classic-menu.png' | relative_url }})

> 📝 **New experience** 토글은 ON으로 두세요 — New classic agent는 경험을 바꾸지 않고 새 탭에서 클래식 캔버스를 엽니다. 첫 로그인 시 일회성 *Welcome to Microsoft Copilot Studio* 동의 대화상자가 나타날 수 있습니다(Get Started).

4. 프로비저닝되면 이름이 `Dictionary Agent`인지 확인. Description에 `This agent allows a user to lookup the definition of a word` 입력 후 **Save**.

### 2) 커스텀 커넥터 만들기

1. 상단 내비게이션 **Tools** → **Add Tool** → **Create new** 아래 **See all** → **Custom connector**.
2. 상단 내비게이션 **New custom connector** → **Create from blank**.
3. Connector name에 `Lookup Word in Dictionary` 입력 → **Continue**.
4. **Host**에 `api.dictionaryapi.dev`, **Base URL**에 `/api/v2/` 입력.
5. 하단 **Security** 선택. (이 API는 인증이 필요 없음 — 인증이 필요한 API는 여기서 유형 선택.) 인증 유형을 **No authentication**으로 두고 **Definition** 선택.

### 3) API 액션 정의

1. Actions 섹션에서 **+ New action**.
2. **Summary**: `Word Lookup`, **Description**: `Lookup a word in the dictionary`.

> 💡 Description은 도구 설명으로 쓰여 오케스트레이터가 도구 사용 시점을 판단합니다. 설명을 충분히 자세히 쓰세요.

3. **Operation ID**: `WordLookup`.
4. Request 아래 **Import from sample** → **Verb**: Get → URL: `https://api.dictionaryapi.dev/api/v2/entries/en/{word}` → **Import**.
5. `word` 옆 아래 화살표 → **Edit** → Description: `The word that you want to lookup the definition of` → 상단 **Back**.

### 4) 응답 스키마 정의

1. Response 섹션에서 **default** → **Import from sample**.
2. Body 필드에 "hello" 단어의 사전 항목 JSON 샘플(철자·발음·어원·품사별 의미)을 붙여넣어 에이전트에 필요한 컨텍스트를 제공 → **Import**.
3. 다음 본문 항목의 Title/Description을 편집(각 항목 아래 화살표 → Edit):
   - `origin` — 어원(정의·품사·용례·동의어·반의어 등 단어의 모든 잠재적 용법 포함)
   - `phonetic` — 발음(음성 파일 포함)
   - `word` — 조회한 단어
4. 상단 **Create connector**.

### 5) 커스텀 커넥터를 도구로 추가

1. Copilot Studio 탭으로 돌아와 페이지 새로고침.
2. Add tool 화면 검색창에 `Lookup a word in the dictionary` 입력 후 Enter.

> 📝 새 커넥터가 Copilot Studio에 동기화되기까지 몇 분 걸릴 수 있습니다. 안 보이면 페이지를 새로고침하세요.

3. 검색 결과에서 **Word Lookup** 커넥터 선택 → Connection 옆 아래 화살표 → **Create new connection** → **Create**.
4. 녹색 체크가 보이면 **Add and configure** → **Additional details** → **Credentials to use**를 **Maker-provided credentials**로 설정.

> 💡 인증이 없는 API는 Maker-provided credentials를 쓰면 익명 커넥터를 위해 사용자가 연결을 만들 필요가 없습니다.

5. Inputs 섹션에서 `word` 옆 **Customize**. 커넥터 정의에서 입력이 자동 채워진 것을 확인(상세 설명이 중요한 이유). **Save**.

### 6) Dictionary Agent 테스트

1. 우상단 **Settings** → Generative AI 설정 맨 아래 **Allow ungrounded responses** 끄기 → **Save** → Settings 닫기.

> 📝 *Allow ungrounded responses*를 끄면 기반 언어 모델이 아니라 커스텀 커넥터 API만 답하도록 보장합니다. (구버전 UI의 *Use general knowledge*와 동일.)

2. 테스트 창에서 다음 질의:
   ```
   What is the meaning of the word copilot?
   Where does it come from?
   How about the word amazing?
   ```
3. 에이전트가 커스텀 커넥터 도구로 정의·어원·발음 정보를 Free Dictionary API에서 가져오는지 확인.

> ✅ **축하합니다!** Use Case #1 완료. **핵심 정리:** 어떤 REST API에서도 커스텀 커넥터를 만들 수 있고, 상세한 메타데이터(설명)가 오케스트레이터의 도구 선택을 돕고, 인증 없는 API는 Maker-provided credentials를 사용합니다.

---

## Use Case 2 — 에이전트 플로우로 결정론적 로직 구축

**목표:** 결정론적 비즈니스 규칙으로 판매 커미션을 계산하는 에이전트 플로우를 만들고, 입력을 수집하는 대화형 동작을 구성해 전체 워크플로우를 테스트합니다.

**시나리오:** Contoso Electronics 영업팀은 커미션을 즉시 확인하고 싶어 합니다. 커미션은 성과 등급별 비율과 제품 믹스 보너스가 있어 같은 입력엔 항상 같은 결과가 나와야 합니다. AI 응답이 아니라 결정론적·규칙 기반 처리를 제공하는 에이전트 플로우가 이상적입니다.

### 1) 새 에이전트 만들기

1. [Copilot Studio](https://copilotstudio.microsoft.com/) → **Agents** → **New Agent** 옆 chevron → **New classic agent** → 이름 `Sales Commission Assistant` → **Create**.
2. Details 섹션 **Edit** → Name 확인, Description: `Calculates sales commissions based on performance data` → **Save**.
3. Overview에서 **Knowledge** 섹션의 **Web Search** 끄기.
4. **Instructions** 섹션 Edit → `When collecting information for a tool, always ask for one piece of information at a time.` 입력 → **Save**.

> 📝 정보 수집 방식을 지침으로 설명하는 것은 Instructions의 좋은 활용 예입니다. 모든 상호작용 패턴을 위해 토픽/플로우를 만들지 않고도 에이전트의 대화 행동을 안내합니다.

### 2) 에이전트 플로우 추가

1. 상단 **Tools** → **+ Add a tool** → 필터 목록에서 **Flow**.
2. 사전 제작된 **Calculate Sales Commission** 플로우 선택 → **Add and configure**.

> 💡 이 플로우는 커미션 계산 로직·입력 매개변수·응답 구성이 미리 프로비저닝돼 있습니다. 실제로는 Power Fx 식으로 직접 만들며, 로직은 필요한 만큼 복잡해질 수 있습니다.

### 3) 커미션 계산기 테스트

1. 우상단 **Test** → 테스트 창에 `Calculate my commission` 입력.
2. 에이전트가 한 번에 하나씩 정보를 묻습니다. 입력:
   - Name: `Jennifer Rodriguez`
   - Annual Revenue: `675000`
   - Quota Amount: `400000`
   - Strategic Product Revenue: `250000`
3. 결과 확인: Commission Tier **Tier 3**, Rate **12.0%**, Base **$81,000.00**, Product Mix Bonus **$3,000.00** (전략 제품 ≥ 30%), Total **$84,000.00**.
4. 대화를 리셋하고 다른 시나리오 테스트: David Park / 75000 / 100000 / 10000 → Tier 0, Rate 0.0%, Base $0.00, Bonus $0.00 (전략 제품 < 30%), Total $0.00.

> ✅ **축하합니다!** Use Case #2 완료. **핵심 정리:** 같은 입력은 항상 같은 출력(재무 계산에 필수), Power Fx로 비율·합계 계산, 예측·감사 가능해야 하는 규칙은 AI가 아니라 에이전트 플로우. 매개변수 이름은 **대소문자 구분**.

---

## Use Case 3 — MCP 서버로 실시간 데이터 접근

**목표:** Dataverse MCP 서버를 통합한 Copilot 에이전트를 만들어, 자연어로 계정·연락처 정보를 읽고 질의합니다.

**시나리오:** Contoso 영업팀이 Teams를 벗어나지 않고 계정·연락처를 빠르게 조회·업데이트해야 합니다. Dataverse MCP 서버가 Dataverse에 저장된 핵심 데이터에 자연어 접근을 제공합니다.

### 1) 에이전트 생성·구성

1. [Copilot Studio](https://copilotstudio.microsoft.com/) → **Agents** → chevron → **New classic agent** → 이름 `Contoso Agent` → **Create**.
2. **Edit** → Name 확인, Description: `This agent will help Contoso sales reps update their accounts and contacts using the Dataverse MCP Server.` → **Save**.
3. **Instructions** Edit → 다음 입력 후 **Save**:
   ```
   This agent will:
   Read accounts and contact information from the Account and Contact Tables in Dataverse using the Dataverse MCP Server.
   Update accounts and contact information from the Account and Contact Tables in Dataverse using the Dataverse MCP Server.
   Create new accounts and contact information in the Account and Opportunity Tables in Dataverse using the Dataverse MCP Server.
   Do not use outside knowledge. Only use the Dataverse MCP Tool to create, read, update and delete.
   ```
4. Overview의 **Suggested prompts** → **Add suggested prompts** 로 다음 추가 후 **Save**:
   - *Account Search* — `List all accounts in Redmond`
   - *Contact Search* — `List all contacts from Coho Winery`

![Suggested prompts 구성]({{ '/labs/mcs-tools-kr/images/step4b-suggested-prompts-search.png' | relative_url }})

> 💡 최대 6개의 제안 프롬프트를 구성할 수 있습니다. Teams·Copilot Chat에서 새 대화 전 환영 페이지에 표시되며, Copilot Studio 테스트 창에서는 보이지 않습니다.

### 2) Dataverse MCP 서버를 도구로 추가

1. Overview의 **Tools** 섹션 → **+ Add tool**.

![Dataverse MCP Server 옵션이 강조된 Add tool 대화상자]({{ '/labs/mcs-tools-kr/images/step6-add-tool.png' | relative_url }})

2. **Dataverse** 검색 → **Dataverse MCP Server** 선택. 여러 개면 deprecated/preview 항목은 선택하지 마세요.

![MCP Dataverse 선택]({{ '/labs/mcs-tools-kr/images/step7-mcp-dataverse.png' | relative_url }})

3. Connection이 *Not connected*면 선택 → **Create new connection**.

![인증 추가]({{ '/labs/mcs-tools-kr/images/step8-add-auth.png' | relative_url }})

4. Authentication Type은 이미 **Oauth**로 설정 — 변경 없이 **Create**. (학생 자격 증명 확인 시 확인.)

> ⚠️ Dataverse MCP 서버는 테이블에 자연어 접근을 제공합니다. 사용 가능한 도구: list tables, describe table, read data, create record, update record, list prompts, execute prompt, list knowledge sources, retrieve knowledge.

5. **Add and configure** → 에이전트가 쓸 도구를 선택·해제. 도구 실행 시 목록은 MCP 서버에서 동적으로 갱신됩니다.

![MCP 도구 검토]({{ '/labs/mcs-tools-kr/images/step9-review-mcp.png' | relative_url }})

> 📝 토픽에서는 MCP 서버를 호출할 수 없습니다. MCP 도구는 자연어 대화 중 에이전트 오케스트레이터가 호출합니다.

### 3) 에이전트 테스트

1. 테스트 창에서 질문: `List the accounts in the state of WA.`
2. 첫 실행 시 도구가 "End user credentials"를 쓰도록 기본 설정돼 있어 동의 대화상자가 나타납니다 → **Allow**.

![MCP 접근 허용]({{ '/labs/mcs-tools-kr/images/step11a-allow-mcp.png' | relative_url }})

![에이전트 테스트]({{ '/labs/mcs-tools-kr/images/step11b-test-agent.png' | relative_url }})

> 💡 테스트 창 상단 **Activity Map**으로 어떤 토픽/도구가 쓰였는지 추적. Dataverse MCP 서버가 시작되고 list_tables, describe_tables, read_query 등이 쓰이는 것을 볼 수 있습니다.

![Activity map 추적]({{ '/labs/mcs-tools-kr/images/step11c-activity-map.png' | relative_url }})

3. 사용된 도구를 선택하면 Inputs/Outputs를 볼 수 있습니다.

![도구 입력·출력]({{ '/labs/mcs-tools-kr/images/step11d-inputs-outputs.png' | relative_url }})

4. 계정이 없으면 테스트 데이터 생성: `Create 10 account rows with test data for the common fields, include some accounts with a State of WA` → 이전 프롬프트 재시도.
5. 각 계정에 연락처 추가: `for each account create a test contact associated with the account` → `Who are the contacts for each account` 로 계속 테스트.

![연락처 질의 테스트]({{ '/labs/mcs-tools-kr/images/step12-test-contacts.png' | relative_url }})

> ✅ **축하합니다!** Use Case #3 완료. **핵심 정리:** Dataverse MCP 서버는 자연어 질의로 비즈니스 데이터에 실시간 접근을 제공하고, Activity Map으로 도구 실행 흐름을 디버그하며, 적절한 지침이 에이전트가 지정 도구만 쓰도록 보장합니다.

---

## Use Case 4 — 구조화 응답용 커스텀 프롬프트 생성

**목표:** 응답 행동을 제어하는 커스텀 프롬프트 도구를 가진 Chit Chat Agent를 만들고, 여러 AI 모델로 테스트하며, 에이전트가 정의된 경계 안에 머무는지 검증합니다.

**시나리오:** 조직은 친근하고 전문적으로 가벼운 잡담을 처리하되 적절한 주제에 머무는 에이전트를 원합니다. 커스텀 프롬프트 도구로 에이전트 응답 방식(모델 선택 포함)을 세밀하게 제어합니다.

### 1) Chit Chat Agent 만들기

1. [Copilot Studio](https://copilotstudio.microsoft.com/) → **Agents** → chevron → **New classic agent** → 이름 `Chit Chat Agent` → **Create**.
2. Description: `This agent allows a user to chit chat and have general conversation` → **Save**.

### 2) Chit Chat 프롬프트 도구 만들기

1. 상단 **Tools** → **Add a tool** → **Create new** 아래 **Prompt**.
2. 프롬프트 이름("Custom prompt" + 날짜)을 **Chit Chat Prompt**로 변경.
3. Instructions에 붙여넣기:
   ```
   Respond to this (Replace this text) with an appropriate chit chat response. Do not leverage any information within the model to provide details outside of a simple chit chat response to the question. You should make the response be friendly and professional. It should never talk about politics, religion, or anything that is not just simple chit chat type discussion such as "Hello", "How are you?", or "How old are you?". Do not ask follow up questions as part of your response.
   ```
4. `(Replace this text)`를 마우스로 선택 → **Add content** → **Text**로 교체. Text 입력의 **Name**을 `Query`로 설정.
5. **Sample data**에 `Hey there. I like cats do you?` 입력 → **Close**.

> 📝 샘플 데이터는 Prompt Builder 테스트용으로, 사용자가 말할 법한 내용을 시뮬레이션해 응답을 미리 봅니다.

### 3) AI 모델 테스트·선택

1. **Test** → Model response 검토.
2. **GPT-4.1 mini** 옆 아래 화살표로 모델 목록 확인 → 다른 모델 선택 후 **Test** 다시. 모델에 따라 응답 스타일이 달라지는 것을 관찰.
3. 가장 비용 효율적·빠른 **GPT-4.1 mini**로 되돌림 → **Save** → **Add and configure**.

### 4) 프롬프트 도구 구성

1. Description을 다음으로 변경:
   ```
   This tool provides capabilities to allow the user to do chit chat with this agent. It should stay focused to only handle simple chit chat scenarios like "Hello" or "How old are you?" type of things but stay away from any non-chit chat related topics. Do not use this topic for things like "Goodbye".
   ```
2. Inputs에서 **Query** 입력의 **Fill Using**을 **Custom value**로 변경 → Value 필드 **…** → **System** → **Activity.Text** 선택.

> 💡 System.Activity.Text는 사용자가 마지막에 한 말을 저장합니다. 이로써 사용자 메시지가 커스텀 프롬프트로 자동 전달됩니다.

3. Chit Chat Prompt 도구 **Save**.

### 5) 일반 지식 비활성화 & 기본 Greeting 토픽 끄기

1. Overview의 **Knowledge** 섹션 **Web Search** 끄기 → **Settings** → Generative AI에서 **Allow ungrounded responses** 끄기, **Use information from the web**도 꺼졌는지 확인 → **Save** → 닫기.
2. **Topics** 탭 → 시스템 토픽 목록의 **Greeting** 토픽 → **More** → 토픽 끄기(Off).

> 📝 기본 Greeting 토픽은 인사로 분류되는 발화("Hello", "Hi" 등)에 발화되어 오케스트레이터가 도구로 라우팅하기 전에 가로챕니다. 다음 단계 테스트 질의 중 "Hey do you like cats?" 같은 인사형 문구가 있어, 켜져 있으면 테스트가 단락됩니다. 꺼서 Chit Chat Prompt 도구로 라우팅되게 합니다.

### 6) Chit Chat Agent 테스트

1. 테스트 창에서 잡담 질의:
   ```
   Hey do you like cats? I have a tabby
   How old are you?
   The weather is great today.
   ```
2. 친근·전문적인 잡담 응답을 확인.
3. 경계 테스트(잡담 아닌 질문):
   ```
   How tall is the Empire State Building?
   Who is the president of the United States?
   ```
4. 에이전트가 이 사실 질문에 답하지 않고 잡담 경계 안에 머무는지 확인.

> ✅ **축하합니다!** Use Case #4 완료. **핵심 정리:** 커스텀 프롬프트는 톤·경계·행동을 정의하는 세밀한 제어를 제공하고, 모델을 선택·비교할 수 있으며, System.Activity.Text로 사용자 최신 메시지를 자동 전달합니다.

---

## (추가 점수) Extra Credit — CUA로 레거시 시스템 자동화

> 📝 **선택 (약 20분):** 60분 랩 시간에 포함되지 않습니다. 시간이 남거나 고급 자율 에이전트 기능을 탐구하고 싶을 때 진행하세요.

**목표:** Computer use 도구로 레거시 웹 인터페이스에서 포트폴리오 데이터를 가져와 메일로 회신하는 자율 에이전트를 만듭니다.

**시나리오:** 재무 어드바이저가 고객명·포트폴리오 가치·담당 매니저를 빠르게 조회해야 하지만, 데이터가 API 없는 레거시 시스템에 있습니다. 전통적 RPA는 깨지기 쉬운 화면 스크래핑에 의존하지만, CUA는 더 똑똑하고 견고한 접근을 제공합니다.

### 1) 에이전트 생성 & 이메일 트리거 구성

1. [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com/) → **Agents** → chevron → **New classic agent** → 이름 `Portfolio Lookup Agent` → **Create**.
2. triggers 섹션 → **+ Add trigger** → `When a new email arrives (V3) (Office 365 Outlook)` 검색·선택 → **Next**.
3. 트리거 이름을 **When a portfolio lookup email arrives**로 변경 → **Next** → **Subject Filter (Optional)**에 `Portfolio` 입력 → **Create trigger** → **Close**.

### 2) Computer Use 도구 구성

1. **Tools** → **+ Add a tool** → **+ New tool** → **Computer use**.
2. Instructions에 입력:
   ```
   1. Go to https://computerusedemos.blob.core.windows.net/web/Portfolio/index.html.
   2. Enter the Portfolio ID in the "Enter Portfolio ID" search field and Select the "Search" button.
   3. Retrieve the "Client Name", "Portfolio Value" and "Manager" values exactly as shown.
   4. Return those three values as the final output.

   If no portfolio data is found, reply that you couldn't find a portfolio with the specified ID.
   ```
3. **Use hosted browser**를 켠 채로 호스팅 브라우저 연결 생성. 도구 이름을 `Look up portfolio data`, Description을 `Search and retrieve financial portfolio data`로 설정.
4. Inputs → **+ Add input** → name `Portfolio ID`, description `The ID of the portfolio` → **Done** → **Save**.

> 💡 실행 중 Computer use는 지침과 입력 값을 결합해 작업을 완료합니다.

### 3) Computer Use 도구 테스트

1. Instructions 섹션의 **Test** → 샘플 값 `44123BCD` → **Test now**.
2. 좌측 패널은 지침·추론·액션 로그, 우측 패널은 머신 액션 미리보기를 보여줍니다.

![포트폴리오 조회 테스트 인터페이스 — Financial Portfolio Dashboard 검색 결과]({{ '/labs/mcs-tools-kr/images/test_CUA.jpg' | relative_url }})

3. **Finish testing**.

### 4) 이메일 회신 설정

1. **Tools** 탭 → **+ Add a tool** → `Send an email (V2) (Office 365 Outlook)` 검색·선택 → **Add and configure**.
2. 이름 `Reply to email`, description `Use this operation to reply to the email received`. **Additional details** → Credentials to use를 **Maker-provided credentials**로.
3. 입력 설명 커스터마이즈: To `Use the "from" email of the triggering received email.`, Subject `Write the email subject.`, Body `Write the email body using HTML and highlight the requested data.` → **Save**.

### 5) 에이전트 지침 구성

1. Overview 탭 → Instructions **Edit** → 입력:
   ```
   When a financial portfolio related request is received, identify the Portfolio ID and search for the requested data using (replace this text). Once you have gathered the financial portfolio information, use the (replace this text) tool to reply to the original email you received. Do not respond with data beyond what was requested.
   ```
2. 각 `(replace this text)` 플레이스홀더를 선택하고 `/`를 입력해 드롭다운에서 해당 도구 선택: 첫 번째 → **Look up portfolio data**, 두 번째 → **Reply to email**.

![에이전트 지침]({{ '/labs/mcs-tools-kr/images/agent_instructions.jpg' | relative_url }})

3. 지침 저장 → **Settings** → Knowledge 섹션의 **Allow ungrounded responses** 비활성화(CUA 데이터에만 그라운딩) → 저장.

### 6) 전체 워크플로우 테스트

1. 임의 주소에서 트레이닝 사용자 계정으로 테스트 메일 발송 — Subject: `Portfolio data request`, Body는 포트폴리오 #44123BCD의 매니저·가치 문의.
2. outlook.office.com 받은 편지함에서 메일 수신 확인.
3. Overview의 **Triggers** 섹션 → **Test trigger** → 트리거 인스턴스 선택 → **Start testing**.

![트리거 테스트]({{ '/labs/mcs-tools-kr/images/test_trigger.jpg' | relative_url }})

4. 에이전트 회신을 메일에서 확인.

> 💡 Computer use 도구 액션은 테스트 창 또는 에이전트 Activity 페이지에서 모니터링. Activity 페이지에서 현재 실행 선택 후 Activity map → Transcript로 모든 단계를 스크린샷과 함께 실시간으로 볼 수 있습니다.

> ✅ **축하합니다!** 추가 점수 섹션 완료. CUA로 API 없는 레거시 시스템에서 포트폴리오 데이터를 가져오는 자율 에이전트를 만들었습니다.

---

## 학습 요약 (Summary of Learnings)

Copilot Studio에서 도구의 효과를 극대화하려면:

- **올바른 도구 유형 선택** — 사전 제작 서비스 통합은 커넥터, 결정론적 비즈니스 로직은 에이전트 플로우, 실시간 데이터는 MCP 서버, 구조화 응답은 커스텀 프롬프트, 레거시 자동화는 CUA.
- **예측 가능한 로직은 에이전트 플로우로** — 재무 계산·컴플라이언스 규칙 등 감사·일관성이 필요한 로직은 AI가 아닌 결정론적 플로우.
- **실시간 데이터는 MCP로** — Dataverse MCP 서버가 커스텀 API 없이 라이브 데이터에 자연어 접근 제공.
- **커스텀 프롬프트로 표준화** — 모든 사용자가 필요한 데이터 필드로 일관된 응답을 받도록.
- **철저히 테스트** — Activity Map으로 도구 실행 흐름 이해, 엣지 케이스로 계산 검증, 엔드투엔드 워크플로우 확인.

---

## 결론 및 권장사항 (Conclusions & Recommendations)

> **Copilot Studio 도구 황금률:**
> - 통합 필요에 도구 유형을 맞추기 — 모든 시나리오에 한 가지 방식을 강요하지 마세요.
> - 항상 같은 결과를 내야 하는 비즈니스 로직은 에이전트 플로우.
> - 어떤 도구를 언제 쓸지 지정하는 적절한 에이전트 지침을 항상 구성.
> - Activity Map으로 도구 실행을 디버그·최적화.
> - 배포 전 현실적 데이터·엣지 케이스로 테스트.
> - 비즈니스 결정에 일관성이 중요하면 커스텀 프롬프트로 응답을 구조화.

이 원칙을 따르면, 대화를 넘어 *행동하고* 라이브 데이터에 접근하며 비즈니스 로직을 실행하고 조직의 시스템과 통합하는 에이전트를 만들 수 있습니다.

---

> 📌 본 한국어 페이지는 [원문 Copilot Studio Tools 랩](https://microsoft.github.io/mcs-labs/labs/mcs-tools/?event=advanced-agent-in-a-day)(MIT © Microsoft)을 번역·재구성한 것입니다. 최신 업데이트는 원문을 함께 참고하세요.
