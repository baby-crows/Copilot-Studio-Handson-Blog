---
layout: lab
title: "Workflows — 이벤트 기반 자율 에이전트 (한국어)"
summary: "트리거 + 인라인 에이전트 + 도구로 동작하는 차세대 자율 워크플로우. Advanced Agent in a Day 랩 3을 한국어로 클론."
edition: "Public Preview"
level: 300
time: "60분"
audience: "Maker"
author: "이영서"
accent: "#5B5FC7"
tags: ["Workflow", "Trigger", "Inline Agent", "MCP", "Human-in-the-loop"]
source_url: "https://microsoft.github.io/mcs-labs/labs/mcs-workflows/?event=advanced-agent-in-a-day"
source_title: "Workflows — Microsoft Copilot Agents Labs (mcs-labs)"
prev_url: /labs/daily-brief-en/
prev_title: "Daily Brief Workflow (English)"
---

# Workflows — 이벤트 기반 자율 에이전트

> **출처 및 라이선스 (Source & License)**
> 본 페이지는 Microsoft가 공개한 **[microsoft/mcs-labs](https://github.com/microsoft/mcs-labs)** 의 랩
> **[Workflows](https://microsoft.github.io/mcs-labs/labs/mcs-workflows/?event=advanced-agent-in-a-day)** 를 한국어로 클론·번역한 것입니다.
> 원문은 **MIT License — Copyright © Microsoft Corporation** 하에 배포되며, 본 한국어 자료는 MIT 라이선스가 허용하는 범위
> (저작권·라이선스 고지 유지) 안에서 원문을 번역·재구성했습니다.
> 라이선스 전문: <https://github.com/microsoft/mcs-labs/blob/main/LICENSE>
> · 본 페이지의 스크린샷은 원문 랩(MIT © Microsoft)에서 가져온 것입니다.

Copilot Studio의 **Workflows**는 차세대 자율 에이전트입니다. 이벤트 기반 트리거로 시작해, 트리거 데이터를 추론하고
도구(Outlook 캘린더, Microsoft To Do, 웹 검색 등)로 행동하는 **비결정론적 인라인 에이전트**를 워크플로우 안에 끼워 넣어,
기존의 결정론적 자율 에이전트 모델을 넘어섭니다.

---

## 랩 정보

| 항목 | 내용 |
|------|------|
| **레벨** | 300 |
| **대상** | Maker |
| **소요** | 60분 |
| **목표** | Copilot Studio에서 Workflow를 만들고, 이벤트 기반 트리거로 실행하며, 트리거 데이터를 추론하고 도구로 행동하는 비결정론적 인라인 에이전트를 임베드 |

---

## 왜 중요한가 (Why This Matters)

에이전트가 사용자가 메시지를 입력할 때만 답하는 것이 아니라, **무언가 일어나는 순간 스스로 백그라운드에서 일하기를** 원하신 적이 있나요?

- **Classic 에이전트**는 대화형 — 사용자 턴을 기다렸다가 응답합니다.
- **Workflows**는 이벤트 기반 — 트리거(일정, 또는 외부 시스템 변화)로 시작해 아무도 지켜보지 않아도 끝까지 실행됩니다.
- **에이전트 노드(agent node)**는 워크플로우의 한 단계를 고정된 결정론적 액션 대신 *추론하는 에이전트*에게 위임합니다. 자동화가 "어떻게" 목표를 달성할지 스스로 결정합니다.

이 랩이 해결하는 흔한 문제들:

- "누가 채팅을 열 때가 아니라, **레코드가 바뀔 때** 자동화가 시작되면 좋겠다."
- "내 플로우는 너무 경직돼 있다 — **지저분한 실제 입력을 추론**하고 무엇을 할지 선택하는 단계가 필요하다."
- "**스스로** 내 캘린더를 읽고 시간을 잡고 작업을 업데이트하는 에이전트가 필요하다."

60분 동안, 작업을 추가하는 것만으로 **인라인 에이전트가 캘린더에 집중 시간을 잡고 할 일을 보강**하는 자율 워크플로우를 만듭니다.

---

## 핵심 개념 (Core Concepts)

| 개념 | 설명 |
|------|------|
| **Workflow** | Copilot Studio의 자율 단위. 채팅 턴이 아니라 트리거로 실행되어 사용자 없이 백그라운드에서 작업 수행 |
| **Trigger(트리거)** | 워크플로우를 시작하는 것. 수동(manual), 예약(recurrence), 커넥터 기반(외부 서비스 이벤트, 예: 새 To Do 작업) |
| **Inline agent(에이전트 노드)** | 워크플로우 단계에 직접 임베드된 비결정론적 에이전트. 고정 액션 대신 입력을 추론해 목표 달성 방법을 결정 |
| **Dynamic content / `/` 토큰** | 워크플로우 앞 단계에서 생성된 데이터(예: 트리거의 to-do 제목)를 에이전트 지침에 삽입해, 런타임에 실제 항목 기준으로 동작 |
| **Tools(도구)** | 에이전트가 행동하도록 부여하는 역량 — 여기서는 Work IQ Calendar MCP(Outlook 캘린더), Update to-do 액션, 웹 검색 |

**참고 문서(원문 링크):**
[Workflows 개요](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview) ·
[워크플로우에 에이전트 추가](https://learn.microsoft.com/microsoft-copilot-studio/agent-node-workflow?tabs=workflows) ·
[트리거 개요](https://learn.microsoft.com/microsoft-copilot-studio/authoring-triggers-about) ·
[에이전트에 도구 추가](https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent) ·
[Copilot Studio의 MCP](https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-mcp)

---

## 사전 준비 (Prerequisites)

- Workflows가 활성화된 환경에서 적절한 라이선스로 **Microsoft Copilot Studio** 접근 권한.
- Outlook(캘린더)과 Microsoft To Do가 프로비저닝된 **회사/학교 Microsoft 365 계정** — 에이전트가 이 계정의 캘린더·작업을 읽고 씀.
- **Microsoft To-Do (Business)** 및 **Work IQ Calendar** 도구의 연결을 만들 권한.
- Copilot Studio 인터페이스 기본 친숙도.

> ⚠️ **중요:** 이 랩 전반에서 Copilot Studio · Microsoft To Do · Outlook에 **동일한 회사 계정**을 사용하세요. 트리거·에이전트·도구가 모두 하나의 ID로 동작하므로, 일치하지 않으면 워크플로우가 목록을 보거나 캘린더에 쓸 수 없습니다.

---

## 학습 목표 (Summary of Targets)

이 랩을 마치면 다음을 할 수 있습니다.

- Workflow를 만들고, 새 Microsoft To Do 항목에서 발화하는 커넥터 트리거를 구성.
- 워크플로우에 비결정론적 인라인 에이전트를 임베드하고 목표 지향 지침을 부여.
- `/` 동적 콘텐츠 토큰으로 트리거 데이터를 에이전트 지침 안에서 참조.
- 에이전트에 도구(Work IQ Calendar, Update to-do)와 웹 검색 장착.
- Workflow를 게시하고 엔드투엔드로 트리거한 뒤, 실행을 모니터링하고 캘린더·to-do 변경을 검증.

---

## 다루는 Use Case

| # | 제목 | 내용 | 소요 |
|---|------|------|:----:|
| 1 | Workflow + 인라인 에이전트로 작업 시간 블로킹 자동화 | 트리거 기반 자율 워크플로우의 인라인 에이전트가 작업을 추론해 캘린더·할 일에 걸쳐 행동 | 45분 |
| 2 | Order Management 워크플로우 설정 | 연결·소유권 구성 후, 사전 제작된 멀티 분기 분류 워크플로우 게시 | 15분 |
| 3 | M365 Copilot + 휴먼 인 더 루프 | Customer Inquiry 경로 검증: M365 Copilot 초안 작성 → 사람 승인 → 워크플로우 회신 | 10분 |
| 4 | 재고 관리용 인라인 에이전트 구축 | 창고 재고를 확인하고 Dataverse 작업을 생성하는 MCP 기반 인라인 에이전트 추가 | 20분 |
| 5 | 워크플로우에서 Price Quote 전문 에이전트 호출 | 게시된 에이전트를 워크플로우 분기에 연결해 견적 생성·발송 | 15분 |

---

## Use Case 1 — Workflow + 인라인 에이전트로 작업 시간 블로킹 자동화

**목표:** *To Do Time Block* 워크플로우를 만들고 게시 — To Do 트리거가 새 작업을 인라인 에이전트에 전달하면, 에이전트가 근무 시간 안에서 캘린더 블록을 잡고 to-do를 업데이트한 뒤, 엔드투엔드로 실행해 캘린더 이벤트와 보강된 작업을 확인합니다.

**시나리오:** 할 일은 Microsoft To Do에 적어두지만 실제로 그 시간을 확보하지는 않습니다. 작업을 적는 순간 근무 시간 중 적절한 슬롯을 찾아 캘린더 블록을 잡고, 마감일·알림·메모·범주로 작업을 업데이트해 주는 어시스턴트를 원합니다.

### 1) 워크플로우를 구동할 To-Do 목록 만들기

1. Microsoft To Do([to-do.office.com](https://to-do.office.com/))에서 왼쪽 사이드바의 **New list**를 선택하고 이름을 **Time Block**으로 지정한 뒤 Enter. 이 목록이 워크플로우가 감시할 대상이며, 여기에 작업을 추가하면 자동화가 트리거됩니다.

> 💡 Copilot Studio와 **같은 계정**으로 To Do에 로그인하세요. 목록과 워크플로우가 한 ID 아래 있어야 합니다.

![Microsoft To Do에 생성된 새 Time Block 목록]({{ '/labs/mcs-workflows-kr/images/create-time-block-list.png' | relative_url }})

### 2) 워크플로우 생성 및 트리거 구성

1. Copilot Studio에서 올바른 환경인지 확인한 뒤, 홈에서 **Workflow** (Automate business processes with agents and actions)를 선택. 디자이너 상단 제목을 클릭해 *Untitled Workflow* → **To Do Time Block**으로 이름 변경.

![트리거가 구성된 To Do Time Block 워크플로우]({{ '/labs/mcs-workflows-kr/images/trigger-todo-time-block.png' | relative_url }})

2. **Start 트리거 노드**를 선택. 구성 패널에서 **Trigger type**을 Manual → **Connector**로 변경, **Select trigger…**에서 *To Do* 검색. **Microsoft To-Do (Business)** 아래 **When a new to-do in a specific folder is created** 선택.

> ⚠️ **(Business)** 커넥터를 선택하세요 — (Consumer) 아님. 이 랩은 회사/학교 To Do 계정을 사용합니다.

3. 안내가 뜨면 **Create new connection**을 선택하고 이 랩에서 쓰는 회사 계정으로 로그인. 연결에 계정이 표시되면 **To-do List**를 드롭다운에서 **Time Block**으로 설정.

> ⚠️ 계정 선택기에서 개인/다른 회사 계정이 아닌 **랩 계정**을 선택했는지 다시 확인.

### 3) 인라인 에이전트 추가 및 구성

1. 트리거 뒤의 **+** 를 선택하고 **Agent**를 골라 에이전트 노드 추가. (Copilot Studio가 자동으로 **Apply to each** 루프로 감싸 새 to-do마다 1회 실행.) 안내 시 랩 계정으로 **Create new connection**. **Agent** 드롭다운은 **New agent**로 두어 이 워크플로우 전용의 새 비결정론적 에이전트를 생성.

> 💡 이것이 랩의 핵심입니다. 하드코딩된 액션 대신, 워크플로우가 작업을 **추론하는 에이전트**에게 넘깁니다. 기본 모델은 Claude Sonnet 4.6.

![New agent for this workflow가 선택된 에이전트 노드 추가]({{ '/labs/mcs-workflows-kr/images/add-new-agent-node.png' | relative_url }})

2. **Instructions** 상자에 목표를 부여합니다. 런타임에 실제 to-do 제목을 받도록 **세 부분으로 나눠** 입력하세요.

   - 먼저 첫 줄 입력:
     ```
     Find a time that is appropriate for this task
     ```
   - `/` 를 입력해 동적 콘텐츠 선택기를 열고, (When a new to-do in a specific folder is created 아래) **Title** 선택 — to-do 제목이 토큰으로 삽입됩니다.
   - 토큰 바로 뒤에 나머지 지침을 이어서 입력:
     ```
     on my calendar in the next couple of business days and block that time on my
     calendar to work on this task. Then update the to-do with a due date a week out
     from the time block we created. Add appropriate notes and suggestions in the
     notes on key things I might want to consider and categorize it as blue. Also set
     a reminder 2 days before the due date. Make sure that the format of the Calendar
     notes and To-Do are formatted properly for the user to be able to read them well.
     Only schedule the time block within my normal working hours of 8:00 AM to 5:00 PM.
     ```

> ⚠️ `/Title` 토큰이 동적성의 핵심입니다 — 에이전트가 각 새 작업의 실제 제목을 받아, 고정 문자열이 아니라 실제 to-do를 근거로 스케줄을 결정합니다. 마지막 문장(근무 시간 제약)이 없으면 에이전트가 기술적으로 비어 있는 첫 슬롯(이른 새벽 등)을 잡을 수 있습니다.

![Title 토큰이 인라인으로 삽입된 완성된 에이전트 지침]({{ '/labs/mcs-workflows-kr/images/agent-instructions-filled.png' | relative_url }})

3. 에이전트에 도구를 부여합니다. 에이전트 패널에서:
   - **Tools** → **+** (Add tool) → *Work IQ Calendar* 검색 → **Work IQ Calendar (Preview)** (Outlook 캘린더용 MCP 서버) 선택 → 랩 계정으로 **Create new connection** → **Add**.
   - 두 번째 도구: **+** → *Update to-do* 검색 → **Microsoft To-Do (Business)** 아래 **Update to-do** → **Add** (기존 To Do 연결 재사용).
   - **Web search** 토글을 켜서 에이전트가 정보를 검색(예: 작업에 언급된 장소/위치)할 수 있게 함.

> 💡 Work IQ Calendar 도구는 free/busy 조회와 이벤트 생성을, Update to-do는 마감일·메모·범주·알림을 작업에 기록하게 합니다.

![Work IQ Calendar와 Update to-do 도구 및 웹 검색이 활성화된 에이전트]({{ '/labs/mcs-workflows-kr/images/agent-tools-web-search.png' | relative_url }})

### 4) 게시 후 트리거

1. **Save** → **Publish** 선택.

> ⚠️ **게시 필수.** 워크플로우는 게시된 후에만 트리거를 수신합니다. 게시 전에 to-do를 추가하면 아무 일도 일어나지 않습니다. 게시 후 **Activity**·**Monitor** 탭이 활성화됩니다.

![Trigger·Apply to each·Agent 노드가 보이는 게시된 To Do Time Block 워크플로우]({{ '/labs/mcs-workflows-kr/images/workflow-published.png' | relative_url }})

2. Microsoft To Do → **Time Block** 목록에서 새 작업 추가: **Book Skull's Rainbow Room in Nashville for Next Friday**. 감시 목록에 작업을 만드는 것이 트리거를 발화시킵니다.

> 💡 시간·장소가 내포된 실제 약속 형태의 제목을 쓰면 에이전트가 추론할 구체적 재료(슬롯 찾기, 캘린더 블록, 장소 조회)가 생깁니다.

![Time Block 목록에 추가된 새 작업]({{ '/labs/mcs-workflows-kr/images/add-todo-task.png' | relative_url }})

### 5) 실행 관찰

1. 워크플로우로 돌아와 **Activity** 탭에서 **Refresh**. 새 실행(상태 *Running*)이 나타나면 선택해 노드별 실행(trigger → Apply to each → Agent)을 관찰.

> ⚠️ To Do 트리거는 일정 주기로 폴링하므로 실행이 나타나기까지 몇 분 걸릴 수 있습니다. Activity 목록에서 Refresh를 몇 번 누르세요.

![Activity 뷰에서 Running으로 표시된 새 실행]({{ '/labs/mcs-workflows-kr/images/activity-run-running.png' | relative_url }})

![트리거 성공, Agent 노드 진행 중인 실행]({{ '/labs/mcs-workflows-kr/images/run-monitor-executing.png' | relative_url }})

2. 실행 상세에서 **Agent** 노드를 펼치면 에이전트가 한 일(free/busy 확인 → 근무 시간 내 슬롯 선택 → 캘린더 이벤트 생성 → to-do 검색·업데이트)을 스스로 서술합니다. 이 부분이 비결정론적 — 세부 사항은 에이전트가 결정한 것이지 워크플로우에 하드코딩된 게 아닙니다.

![에이전트의 추론과 도구 액션이 보이는 Agent 노드 실행 상세]({{ '/labs/mcs-workflows-kr/images/agent-run-details.png' | relative_url }})

### 6) 결과 검증

1. Microsoft To Do의 Time Block 목록을 새로고침하고 작업을 열면 에이전트가 업데이트한 내용 확인: 마감일(일주일 뒤), 마감 2일 전 알림, 파란색 범주, 풍부하게 서식된 메모(목표일·예약된 작업 블록·액션 체크리스트).

![마감일·알림·파란색 범주·서식 메모로 업데이트된 to-do]({{ '/labs/mcs-workflows-kr/images/todo-updated-details.png' | relative_url }})

2. Outlook → 캘린더. 에이전트가 다음 영업일 중 비어 있고 8:00 AM–5:00 PM 근무 시간 내인 시점에 타임 블록 이벤트를 추가했고, 본문에 목표일·장소 요약이 들어 있습니다. 추가 입력 없이 워크플로우가 엔드투엔드로 실행됐습니다.

![에이전트가 Outlook에 만든 캘린더 타임 블록 이벤트]({{ '/labs/mcs-workflows-kr/images/calendar-event-details.png' | relative_url }})

> ✅ **축하합니다!** 추론하는 인라인 에이전트를 갖춘 자율 워크플로우를 만들었습니다.

---

## Use Case 2 — Order Management 워크플로우 설정

**목표:** 사전 제작된 Order Management 워크플로우의 설정 완료 — 솔루션 연결 참조 구성, 소유권 이전, 캔버스 수준 연결 확인, 분류 범주 탐색, 게시, "Other" 경로로 엔드투엔드 검증.

> ⚠️ 이 Use Case는 이후 모든 Use Case의 토대입니다. 여기서 완료하는 연결·소유권·게시는 Customer Inquiry / Quote Request / Supplier Delay 경로에 필요합니다. 연결 참조 누락이나 소유권 미이전은 이후 단계에서 조용히 실패하거나 진단하기 어려운 오류를 일으킵니다.

**시나리오:** 환경에 사전 제작된 Order Management 워크플로우가 있어, 제목에 "Order Management"가 포함된 수신 메일을 자동 분류합니다. 메일을 **Quote Request / Supplier Delay / Customer Inquiry / Other** 네 범주 중 하나로 라우팅해 각기 다른 자동 액션을 취합니다. 실행 전, 모든 연결을 구성하고 솔루션에 연결해야 합니다.

### 1) 소유권 확보 및 솔루션 구성

1. Power Apps([make.powerapps.com](https://make.powerapps.com/))에서 올바른 환경 확인 → **Solutions** → **LAB: Order Management** 솔루션 열기. 이 솔루션은 워크플로우와 연결 참조·에이전트·관련 구성요소를 묶고 있습니다.

![Power Apps의 LAB: Order Management 솔루션]({{ '/labs/mcs-workflows-kr/images/solution-order-management.png' | relative_url }})
2. Copilot Studio → **Workflows** → **Order Management Workflow** 열기. 캔버스의 각 노드를 클릭해 열고(필요하면 닫았다 다시 열어 자동 새로고침), 대부분 노드는 내 계정으로 녹색 체크와 함께 연결이 자동 표시됩니다.

> 📝 **M365 Copilot**과 **Human Request** 노드를 제외한 대부분 노드는 자동으로 연결됩니다. 이 두 노드는 수동으로 **Create new connection**을 클릭해 랩 계정으로 로그인해야 합니다.

3. Power Apps 솔루션 → **Connection References**. 각 연결 참조마다 **Edit** → 방금 만든 연결 선택. 드롭다운에 값이 없는(이 환경에 배포된 커넥터가 없는) 참조는 솔루션에서 안전하게 제거 가능 — 워크플로우 실행에 불필요. 나머지는 연결 선택 후 **Save** → **Save changes**.

> ⚠️ 연결은 항상 **랩 계정**으로 생성. 모든 연결이 같은 ID를 써야 런타임 권한 오류를 피합니다.

4. 솔루션 안의 **Cloud Flow**(Order Management Workflow) 선택 → 명령 모음 **Edit → Owner**(또는 Primary Owner) → 소유자를 본인(랩 계정)으로 변경. 게시·모니터링 전체 권한 확보.

> ⚠️ 소유권 이전은 **연결 참조 구성 후**에 해야 합니다. 소유권이 없으면 Publish가 막히거나 모호한 오류가 납니다.

### 2) 워크플로우 열기 및 탐색

- Copilot Studio → **Workflows** → **Order Management Workflow** 열기. 이미 소유·연결 구성됐으므로 소유권 경고 없이 로드됩니다. 트리거 노드("When a new email arrives"), **Classify** 노드, 범주별 분기 경로가 보입니다.

![컬버스 디자이너에서 열린 Order Management Workflow]({{ '/labs/mcs-workflows-kr/images/order-management-workflow-overview.png' | relative_url }})

### 3) 트리거 연결 및 제목 필터 확인

1. 트리거 노드("When a new email arrives") 선택. 연결이 누락 표시면 **Create new connection**으로 Office 365 Outlook 연결을 랩 계정으로 설정.
2. **Subject Filter** 식 관찰: `@{string('Order Management')}`. 제목에 "Order Management"가 포함된 메일에서만 발화하고 나머지는 무시합니다.

> ⚠️ 테스트 메일 제목에는 반드시 **"Order Management"**가 들어가야 합니다. 흔한 "테스트가 안 되는" 원인.

![유효한 연결이 설정된 트리거 노드]({{ '/labs/mcs-workflows-kr/images/trigger-connection-created.png' | relative_url }})

![트리거에 구성된 제목 필터 식]({{ '/labs/mcs-workflows-kr/images/subject-filter-expression.png' | relative_url }})

### 4) Classify 노드 연결 확인 및 범주 탐색

1. **Classify** 노드 선택. Dataverse 연결이 누락 표시면 **Create new connection**으로 Microsoft Dataverse 연결 설정.
2. 네 개 분류 범주(이름 + 예시 텍스트)를 검토 — AI 모델이 수신 메일 라우팅을 결정하는 데 사용:
   - **Quote Request** — 제품/서비스 가격·견적 요청
   - **Supplier Delay** — 공급업체 지연 통지
   - **Customer Inquiry** — 주문·배송 등 고객 일반 문의
   - **Other** — 위에 해당 없음(스팸·홍보·무관)

> 💡 각 범주에 다양한 표현의 예시를 여러 개 추가하면 모델 일반화가 좋아집니다. Classify 노드의 **Test** 탭으로 일반/엣지 케이스를 시험하며 범주 설명을 다듬으세요.

![Dataverse 연결이 설정된 Classify 노드]({{ '/labs/mcs-workflows-kr/images/classify-connection-created.png' | relative_url }})

![예시 설명과 함께 표시된 네 개 분류 범주]({{ '/labs/mcs-workflows-kr/images/classify-categories-all.png' | relative_url }})

### 5) 분류 테스트 → 게시 → "Other" 경로 검증

1. Classify 노드 **Test** 탭에서 예시 본문(예: "Hi, I would like to request a quote for 500 units of Product A.") 입력 → **Quote Request**로 분류되는지 확인.

![Quote Request로 나타난 분류 테스트 결과]({{ '/labs/mcs-workflows-kr/images/classify-test-result.png' | relative_url }})

2. Copilot Studio → **Workflows** 목록에서 **Order Management Workflow**의 **Publish** 선택. 상태가 Draft → **Published**로.

> ⚠️ 게시 실패 시: 네 연결 참조가 모두 연결됐는지, 워크플로우 소유권이 있는지 재확인(가장 흔한 두 원인).

![Published 상태의 Order Management Workflow]({{ '/labs/mcs-workflows-kr/images/workflow-published.png' | relative_url }})

3. Outlook([outlook.office.com](https://outlook.office.com/))에서 랩 계정으로 메일 작성 — 제목: `Order Management - Congratulations! Your order desk has been selected`, 본문은 전형적 스팸/사기 문구(상금 당첨, 수수료 요구 등). 이 메일은 **Other**로 분류되어야 합니다.

> 📝 제목에 "Order Management"가 있어야 트리거가 매칭됩니다. 본문은 견적·공급·문의와 무관하게 작성해 "Other"로 떨어지게 합니다.

4. 약 1–2분 후 Outlook **Archive** 폴더 확인 — 테스트 메일이 자동 이동돼 있으면 "Other" 경로가 정상 동작.

![Outlook에서 작성 중인 테스트 메일]({{ '/labs/mcs-workflows-kr/images/test-other-email-compose.png' | relative_url }})

![워크플로우가 Archive 폴더로 이동시킨 테스트 메일]({{ '/labs/mcs-workflows-kr/images/archive-other-email.png' | relative_url }})

> ✅ **축하합니다!** Order Management 워크플로우가 완전히 구성·운영됩니다.

---

## Use Case 3 — M365 Copilot + 휴먼 인 더 루프

**목표:** Customer Inquiry 경로 검증 — M365 Copilot 초안 프롬프트 확인, 사람 검토(승인) 경험 점검, 샘플 고객 메일로 경로 테스트, 제안 회신 승인, 회신이 받은 편지함에 도착하는지 검증.

**시나리오:** 고객이 제품 질문을 보냅니다. 매번 수동 작성 대신, 워크플로우가 M365 Copilot으로 근거 있는 초안을 준비하고, 사람 검토자에게 승인을 보내며, 승인자의 결정에 따라 고객에게 회신하거나 후속 처리를 위해 플래그합니다.

### 1) Customer Inquiry 분기 점검

1. 게시된 Order Management 워크플로우를 열고 **Classify** 노드 선택. 분류 노드에서 나가는 **Customer Inquiry** 분기가 초안→검토 시퀀스로 라우팅됨을 확인.

![Classify 노드에서 선택된 Customer Inquiry 분기]({{ '/labs/mcs-workflows-kr/images/customer-inquiry-branch.png' | relative_url }})

2. 그 분기의 **M365 Copilot** 노드 선택. 프롬프트가 수신 메일 본문 기반의 **Customer question** 입력을 쓰는지 확인 — 검토자에게 줄 제안 응답을 준비하는 근거 있는 초안 생성 단계.

> 📝 M365 Copilot 노드는 Microsoft Graph(메일·Teams 채팅 등)를 활용하는 질문에 강합니다. 단, 이 노드 동작은 **읽기 전용** — 검색·조회만 가능하고 메일/Teams 발송은 불가. 쓰기 작업이 필요하면 Work IQ 도구를 가진 **Agent 노드**를 쓰세요.

![메일 본문의 Customer question 입력을 보여주는 M365 Copilot 노드]({{ '/labs/mcs-workflows-kr/images/customer-inquiry-m365-copilot-node.png' | relative_url }})

3. **Human review** 노드 점검: 승인 메시지에 M365 Copilot 제안 회신이 삽입되는지, **Outlook 채널**이 선택됐는지, *Send proposed reply from M365?* 의 Yes/No 입력 확인. (+ 로 다른 입력 유형을 관찰하되 새 입력은 추가하지 않음.)

![제안된 M365 회신과 승인 옵션을 보여주는 Human review 노드]({{ '/labs/mcs-workflows-kr/images/customer-inquiry-human-review-node.png' | relative_url }})

4. Human review 뒤의 **If/Else** 노드 로직 관찰: Yes면 제안 회신을 고객에게 발송, 아니면 원본 메일을 받은 편지함에 플래그.

![Yes는 회신, No는 받은 편지함 플래그로 라우팅하는 If/Else 노드]({{ '/labs/mcs-workflows-kr/images/customer-inquiry-if-else-node.png' | relative_url }})

### 2) Customer Inquiry 엔드투엔드 테스트

1. Outlook에서 랩 계정으로 메일 발송 — 제목: `Order Management - Question about iPad Air warranty and MDM`, 본문은 iPad Air(M2) 보증 기간과 MDM 등록 가능 여부를 묻는 고객 문의.

![Outlook에서 작성 중인 고객 문의 테스트 메일]({{ '/labs/mcs-workflows-kr/images/customer-inquiry-test-email.png' | relative_url }})

2. 워크플로우 **Activity** 패널에서 새 실행을 새로고침해 열고 경로 관찰: Classify → Customer Inquiry.

> ⚠️ 이 경로는 승인 단계에서 일시 정지합니다. 실행이 멈춘 듯 보이면 정상 — Outlook에서 Human review 완료를 기다리는 중.

![Customer Inquiry 경로로 진입한 실행을 보여주는 Activity 패널]({{ '/labs/mcs-workflows-kr/images/customer-inquiry-activity-path.png' | relative_url }})

3. **Human Request** 노드까지 진행되면, Outlook의 승인 메일을 열어 제안된 M365 Copilot 회신을 검토하고 **Yes**로 승인.

![승인을 기다리는 Human Request 노드 실행 상세]({{ '/labs/mcs-workflows-kr/images/customer-inquiry-human-request-waiting.png' | relative_url }})

![제안된 회신과 Yes 버튼이 있는 Outlook 승인 메일]({{ '/labs/mcs-workflows-kr/images/customer-inquiry-approval-email.png' | relative_url }})

4. 받은 편지함에 승인된 회신 메일이 도착하는지 확인 — 사람 승인 후 워크플로우가 재개돼 자동 발송됐음을 의미.

![받은 편지함에 도착한 승인된 회신 메일]({{ '/labs/mcs-workflows-kr/images/customer-inquiry-reply-received.png' | relative_url }})

> ✅ **축하합니다!** Customer Inquiry 경로가 초안 작성·검토·회신을 성공적으로 수행합니다.

---

## Use Case 4 — 재고 관리용 인라인 에이전트 구축

**목표:** Supplier Delay 경로에 **Inventory Task Agent**를 추가하고 MCP 도구를 장착, 구조화 출력을 생성하며, 테스트 메일 수신 후 기대한 Dataverse 작업이 생성되는지 검증.

**시나리오:** 공급업체가 입고 지연을 알립니다. 워크플로우는 메일을 단순 전달하는 게 아니라, 현재 재고를 확인해 영향을 추론하고 긴급도를 판단해 보충 팀이 즉시 행동하도록 구조화된 Dataverse 작업을 생성해야 합니다.

### 1) Supplier Delay 에이전트 추가·구성

1. Classify 노드에서 **Supplier Delay** 범주를 찾아 분기 옆 **+** → **Agent** 추가.

![Agent 추가 메뉴가 열린 Supplier Delay 범주]({{ '/labs/mcs-workflows-kr/images/supplier-delay-add-agent.png' | relative_url }})

2. 새 노드에서 **Agent**를 **New agent in this workflow**로 두고 기본 AI 모델 유지 — 이 경로 전용 인라인 에이전트 생성.
3. **Expand**(… 옆 두 화살표)로 전체 구성 편집 → 노드 제목을 **Inventory Task Agent**로 변경.

![Inventory Task Agent로 이름 변경된 확장된 에이전트 구성]({{ '/labs/mcs-workflows-kr/images/supplier-delay-agent-expanded.png' | relative_url }})
4. **Tools** → **Model Context Protocol (MCP servers)** 에서 두 도구 추가·연결: **Microsoft Dataverse MCP Server**, **Warehouse MCP**. 안내대로 로그인/연결.

![Dataverse MCP와 Warehouse MCP가 연결된 에이전트 도구 패널]({{ '/labs/mcs-workflows-kr/images/supplier-delay-mcp-tools.png' | relative_url }})

5. **Instructions** 상자에 에이전트 지침을 붙여넣습니다(핵심 요지):
   - **Purpose** — 공급업체 배송 지연 통지를 Contoso Electronics용 보충(restock) 작업으로 분류. 지연 통지는 지연 제품명을 담지만 재고 수준은 없으므로, **Warehouse** 도구로 현재 재고를 찾아 긴급도를 판단하고 Dataverse에 작업 기록.
   - **Inputs** — Delay notice: `[email body]`, Review by(Due Date): `[due date]`.
   - **Guidelines** — 현재 재고·보충 세부는 메일이 아니라 Warehouse 도구에서 취득. 온핸드 수량으로 긴급도 판단(0 = 품절·긴급, 낮지만 0 초과 = 버퍼 위험, 충분 = 허용 가능).
   - **Steps** — 지연 통지의 제품/SKU 읽기 → Warehouse 재입고일 조회를 정확한 SKU로 1회 호출(현재 수량·다음 입고일·예상 수량·공급사 반환, stock-check 도구는 호출하지 않음) → 긴급도 판단 → Dataverse **Task** 테이블에 1행 생성(아래 컬럼만):
     - **Subject:** `Restock delay - [product] ([SKU])`
     - **Description:** 현재 온핸드 수량·창고, 지연된 다음 입고일·예상 수량·공급사, 긴급도 판단, 보충 팀을 위한 한 줄 액션.
     - **Priority:** 온핸드 0이면 High, 아니면 Normal.
   - **Rules** — Task 행은 정확히 1개, 지정 컬럼만 설정. 제품이 Warehouse에 없으면 사람이 확인하도록 unrecognised로 기록.
![구성 패널에 붙여넣은 Supplier Delay 에이전트 지침]({{ '/labs/mcs-workflows-kr/images/supplier-delay-agent-instructions.png' | relative_url }})6. 지침의 플레이스홀더를 동적 콘텐츠로 교체:
   - `[email body]` 선택 → 번개 아이콘 → *body* 검색 → **When a new email arrives**의 **Body** 삽입.
   - `[due date]` 선택 → 번개 아이콘 → **Ask Copilot**으로 식 생성 → "Add 3 days to the date and time of arrival of the trigger email" 입력 → Copilot이 `addDays(triggerOutputs()?['body/receivedDateTime'], 3)` 반환 → **Insert**.

> 💡 **"Request human assistance when unsure"** 버튼: 에이전트가 모호함/충돌을 만나면 연결 소유자에게 구조화 질문을 보내, 자동화를 유지하면서 엣지 케이스에 사람 판단을 끌어옵니다.

![Body와 due date 동적 식이 삽입된 에이전트 지침]({{ '/labs/mcs-workflows-kr/images/supplier-delay-dynamic-content.png' | relative_url }})

7. **Output** 섹션을 **Structured output**으로 변경하고 세 속성 추가:
   - `sku` (string) — 지연 통지에 명시된 SKU
   - `stock` (number) — 해당 SKU의 창고 현재 재고 수량
   - `risk` (boolean) — 현재 재고가 0이면 true

![sku·stock·risk 속성의 구조화 출력 구성]({{ '/labs/mcs-workflows-kr/images/supplier-delay-structured-output.png' | relative_url }})

8. 뷰를 최소화하고 **Save** → **Publish**.

![Inventory Task Agent가 추가된 게시된 Order Management Workflow]({{ '/labs/mcs-workflows-kr/images/supplier-delay-workflow-published.png' | relative_url }})

### 2) Supplier Delay 경로 테스트

1. Outlook에서 랩 계정으로 발송 — 제목: `Order Management - Shipment delay - LumiRead E-Reader`, 본문은 LumiRead E-Reader(16GB), SKU-LUMI 입고 지연 통지.

![Outlook에서 작성 중인 공급업체 지연 테스트 메일]({{ '/labs/mcs-workflows-kr/images/supplier-delay-test-email.png' | relative_url }})

2. **Activity** 패널에서 실행을 새로고침해 열고 경로 관찰: Classify → Supplier Delay → Inventory Task Agent.

![Supplier Delay 경로와 Inventory Task Agent 실행을 보여주는 Activity 패널]({{ '/labs/mcs-workflows-kr/images/supplier-delay-activity-path.png' | relative_url }})

3. **Inventory Task Agent** 노드의 도구 실행을 살펴보면 Warehouse 조회와 Dataverse describe/create 작업이 보입니다.

![Warehouse와 Dataverse 도구 호출을 보여주는 Inventory Task Agent 실행 상세]({{ '/labs/mcs-workflows-kr/images/supplier-delay-tool-runs.png' | relative_url }})

4. 구조화 출력 확인: `sku = SKU-LUMI`, `stock = 0`, `risk = true`.

![SKU-LUMI·stock 0·risk true를 보여주는 구조화 출력 값]({{ '/labs/mcs-workflows-kr/images/supplier-delay-structured-output-result.png' | relative_url }})

5. Power Apps → **Tables → Task** 에서 `Restock delay - LumiRead E-Reader (16GB) (SKU-LUMI)` 행 확인 — Due Date는 3일 뒤, Priority = High.

![지연된 LumiRead 입고에 대해 생성된 Dataverse Task 행]({{ '/labs/mcs-workflows-kr/images/supplier-delay-dataverse-task.png' | relative_url }})

> ✅ **축하합니다!** Supplier Delay 경로가 MCP 기반 인라인 에이전트로, 실시간 창고 데이터로 지연 통지를 보강하고 Dataverse 작업과 구조화 출력을 생성합니다.

---

## Use Case 5 — 워크플로우에서 Price Quote 전문 에이전트 호출

**목표:** Quote Request 경로가 게시된 **Price Quote Agent**를 사용하도록 구성하고, 런타임에 발신자·요청 본문을 전달하며, 견적을 완성해 메일을 보내는지 검증.

**시나리오:** 고객이 제품 묶음 가격을 문의합니다. 견적 로직을 워크플로우 안에서 다시 만들지 않고, 가격 가이드를 조회하고 제품 카탈로그 데이터와 결합해 정돈된 견적을 보내는 **이미 게시된 에이전트를 재사용**합니다.

### 1) 재사용 Price Quote Agent 점검

1. Copilot Studio → **Agents**. **New experience** 토글을 ON으로 — Build/Preview/Evaluate/Monitor 탭의 최신 빌더.

![New experience 토글이 활성화된 Agents 목록]({{ '/labs/mcs-workflows-kr/images/agents-list-new-experience.png' | relative_url }})

2. **Price Quote Agent** 열기. Build 탭 우측 패널에서 구성 확인:
   - **Model:** 지정 AI 모델(예: Claude Sonnet 4.6)
   - **Tools:** Microsoft Dataverse MCP Server, Work IQ Mail (Preview)
   - **Knowledge:** Order Management (가격 가이드·고객 등급·정책이 담긴 SharePoint 지식 소스)
   - **Skills:** price-quote (견적 메일 작성·발송용 구조화 스킬)
   - 좌측 **Instructions** 창에 가격 질문 처리에 관한 폭넓은 대화형 가이드라인
![지침·도구·지식을 보여주는 새 Build 경험의 Price Quote Agent]({{ '/labs/mcs-workflows-kr/images/uc5-agent-new-experience.png' | relative_url }})
3. 우상단 **Publish**로 Price Quote Agent 게시. 게시된 에이전트만 워크플로우 Agent 노드 드롭다운에 나타납니다.
4. Order Management 워크플로우로 돌아가 Classify 노드의 **Quote Request** 범주 찾기.

### 2) Quote Request 분기 구성

1. **Quote Request** 옆 **+** → **Agent**.
2. **Agent** 드롭다운에서 **Price Quote Agent**(게시된 기존 에이전트) 선택.

> ⚠️ 드롭다운에는 **게시된** 에이전트만 표시됩니다. 보이지 않으면 에이전트 페이지에서 먼저 게시하세요.

![Price Quote Agent를 보여주는 Quote Request 분기 에이전트 선택기]({{ '/labs/mcs-workflows-kr/images/quote-request-select-existing-agent.png' | relative_url }})

3. **Message** 필드에 입력:
   ```
   Prepare a price quote for this customer request:
   Customer email: [email sender]
   Request: [email body]
   ```
4. 플레이스홀더를 동적 값으로 교체: `[email sender]` → 번개 아이콘 → *from* 검색 → **From** 삽입. `[email body]` → 번개 아이콘 → *body* 검색 → **Body** 삽입.

![From과 Body 동적 토큰이 삽입된 Quote Request Message 필드]({{ '/labs/mcs-workflows-kr/images/quote-request-message-dynamic-content.png' | relative_url }})

5. **Save** → **Publish**.

![Quote Request 분기를 연결한 뒤 게시된 워크플로우]({{ '/labs/mcs-workflows-kr/images/quote-request-workflow-published.png' | relative_url }})

### 3) Quote Request 경로 테스트

1. Outlook에서 랩 계정으로 발송 — 제목: `Order Management - Quote request - Adventure Works`, 본문은 Sony WH-1000XM5 헤드폰 10개, iPad Air(M2, 256GB) 5개에 대한 견적·결제 조건·배송 예상 요청.

![Outlook에서 작성 중인 견적 요청 테스트 메일]({{ '/labs/mcs-workflows-kr/images/quote-request-test-email.png' | relative_url }})

2. **Activity** 패널에서 경로 완료 확인: Classify → Quote Request → Agent.

![Quote Request 분기 실행 완료를 보여주는 Activity 패널]({{ '/labs/mcs-workflows-kr/images/quote-request-activity-path.png' | relative_url }})

3. **Agent** 노드 실행 상세에서 Price Quote Agent가 응답을 준비한 완료 메시지 확인.

![완료 메시지를 보여주는 Quote Request 에이전트 실행 상세]({{ '/labs/mcs-workflows-kr/images/quote-request-agent-completion.png' | relative_url }})

4. Outlook에서 생성된 견적 메일이 받은 편지함에 도착했는지 확인.

![Outlook에 도착한 완성된 견적 메일]({{ '/labs/mcs-workflows-kr/images/quote-request-email-received.png' | relative_url }})

> 💡 **보너스:** Price Quote Agent의 **Preview** 탭에서 "What are the iPad Air prices applicable to Fabrikam?" 질문 → 에이전트가 SharePoint에서 고객 등급 가격 가이드를 검색하고 Dataverse를 `read_query`로 조회해 등급별 정확한 응답을 구성하는 확장 추론을 관찰.

![Fabrikam 가격 질문과 추론을 보여주는 Price Quote Agent Preview 탭]({{ '/labs/mcs-workflows-kr/images/uc5-bonus-agent-reasoning.png' | relative_url }})

> ✅ **축하합니다!** Quote Request 경로가 지식·데이터·메일 액션을 결합한 재사용 가능한 게시 에이전트로 구동됩니다.

---

## 학습 요약 (Summary of Learnings)

Copilot Studio의 Workflows를 최대한 활용하려면:

- **트리거 먼저, 채팅은 없음** — 워크플로우는 이벤트(예약 또는 커넥터 트리거)로 실행돼 사용자 없이 백그라운드에서 동작. 자동화의 "언제"에 맞는 트리거를 고르세요.
- **지저분한 중간은 인라인 에이전트로** — 판단이 필요한 단계(어느 슬롯? 메모 표현은?)는 에이전트 노드가 추론·행동하게 하세요.
- **동적 콘텐츠로 에이전트를 그라운딩** — `/` 토큰이 실제 트리거 데이터(to-do Title)를 에이전트에 공급해, 매 실행이 고정 예시가 아닌 실제 항목에 동작.
- **도구는 에이전트의 손** — Work IQ Calendar·Update to-do·웹 검색이 없으면 추론은 해도 행동은 못 합니다. 목표에 필요한 도구만 정확히 부여.
- **지침으로 행동을 제약** — "8:00 AM–5:00 PM 근무 시간 내에서만" 같은 작은 추가가 에이전트 선택을 크게 바꿉니다. 반복 개선 후 재게시.
- **테스트 전에 게시** — 트리거는 게시 후에만 활성, 변경은 재게시해야 반영.

---

## 결론 및 권장사항 (Conclusions & Recommendations)

> **Workflows 황금률:**
> - 작업을 시작해야 할 이벤트에 트리거를 맞추기 — 테스트는 manual, 일정은 recurrence, "무언가 바뀔 때"는 connector.
> - 추론이 필요한 단계엔 인라인 에이전트, 항상 동일하게 동작해야 하는 단계엔 결정론적 액션 유지.
> - `/` 동적 콘텐츠 토큰으로 트리거 데이터를 참조해 매 실행 실제 입력에 동작.
> - 에이전트에 필요한 도구만 주고, 제약(근무 시간·서식·범주)을 지침에 명시.
> - 테스트 전 항상 **Save → Publish**, 변경 후 재게시. Activity·Monitor 뷰와 Agent 노드 실행 상세로 에이전트가 무엇을 결정·실행했는지 확인.

이 토대 위에서, *말하는* 에이전트에서 *스스로 행동하는* 에이전트로 — 이벤트에 반응하고 실제 데이터를 추론하며 Microsoft 365 전반에서 일을 처리하는 단계로 나아갈 수 있습니다.

---

> 📌 본 한국어 페이지는 [원문 Workflows 랩](https://microsoft.github.io/mcs-labs/labs/mcs-workflows/?event=advanced-agent-in-a-day)(MIT © Microsoft)을 번역·재구성한 것입니다. 스크린샷과 최신 업데이트는 원문을 함께 참고하세요.
