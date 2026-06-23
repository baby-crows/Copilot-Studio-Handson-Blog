---
layout: lab
title: "랩 2 — Copilot Studio 오케스트레이션 (한국어)"
summary: "생성형 오케스트레이션 플래너가 도구·자식 에이전트를 선택하는 방식, Instructions/Descriptions의 영향, New Orchestrator(에이전틱 추론 루프), 재사용 가능한 Skill까지 실습으로 익히는 랩 2의 이미지 포함 한국어 클론."
edition: "Public Preview"
level: 300
time: "60분"
audience: "Maker"
author: "이영서"
accent: "#5B5FC7"
tags: ["오케스트레이션", "생성형 플래너", "New Orchestrator", "Skill", "MCP"]
source_url: "https://microsoft.github.io/mcs-labs/labs/mcs-orchestration/?event=advanced-agent-in-a-day"
source_title: "Orchestration with Copilot Studio — mcs-labs"
prev_url: /labs/mcs-tools-kr/
prev_title: "랩 1 — 도구(Tools) 실습"
next_url: /labs/mcs-workflows-kr/
next_title: "랩 3 — Workflows (한국어)"
---

# 랩 2 — Copilot Studio 오케스트레이션

> **출처 및 라이선스 (Source & License)**
> 본 페이지는 Microsoft가 공개한 **[microsoft/mcs-labs](https://github.com/microsoft/mcs-labs)** 의 랩
> **[Orchestration with Copilot Studio](https://microsoft.github.io/mcs-labs/labs/mcs-orchestration/?event=advanced-agent-in-a-day)** 를 한국어로 클론·번역한 것입니다.
> 원문은 **MIT License — Copyright © Microsoft Corporation** 하에 배포되며, 본 한국어 자료는 MIT 라이선스가 허용하는 범위
> (저작권·라이선스 고지 유지) 안에서 원문을 번역·재구성했습니다.
> 라이선스 전문: <https://github.com/microsoft/mcs-labs/blob/main/LICENSE>
> · 본 페이지의 스크린샷은 원문 랩(MIT © Microsoft)에서 가져온 것입니다.

Copilot Studio의 **생성형 오케스트레이션 엔진**은 매 턴마다 어떤 도구·지식 소스·자식(child)/연결(connected) 에이전트가 요청을 처리할지 결정합니다.
이 결정의 품질은 거의 전적으로 여러분이 작성한 **Instructions(지침)**·**Descriptions(설명)** 와, **New Orchestrator(에이전틱 추론 루프)** 사용 여부에 달려 있습니다.
오케스트레이션을 제대로 잡는 것이 "똑똑해 보이는" 코파일럿과 "엉뚱한 곳으로 라우팅하거나 환각하는" 코파일럿의 차이를 만듭니다.

---

## 랩 정보

| 항목 | 내용 |
|------|------|
| **레벨** | 300 |
| **대상** | Maker |
| **소요** | 60분 |
| **목표** | 생성형 플래너가 도구·자식 에이전트를 선택하는 방식 이해, Instructions/Descriptions가 선택에 미치는 영향 직접 확인, New Orchestrator(에이전틱 추론 루프)를 New 타입 에이전트에서 사용, 동작을 재사용 가능한 Skill로 패키징해 커스텀 MCP·지식·날씨를 한 턴에 체이닝 |

---

## 왜 중요한가 (Why This Matters)

이 랩이 해결하는 흔한 문제들:

- "내 에이전트가 **엉뚱한 도구**를 골랐어요."
- "Instructions와 Descriptions가 라우팅에 어떻게 영향을 주는지 모르겠어요."
- "**New Orchestrator(에이전틱 추론 루프)** 가 실제로 뭘 바꾸나요?"

> 📝 연계 모듈: [모듈 3 — 오케스트레이션과 동적 체이닝]({{ '/labs/module-orchestration-kr/' | relative_url }}) (이 랩 바로 앞의 45분 세션).

---

## 핵심 개념 (Core Concepts)

| 개념 | 설명 |
|------|------|
| **Generative Orchestration(생성형 오케스트레이션)** | 매 턴 어떤 도구·지식·자식/연결 에이전트가 처리할지 결정하는 엔진 |
| **Instructions(지침)** | 부모 에이전트의 최상위 가이드 — 전반적 동작과 플래너가 요청에 접근하는 방식을 형성 |
| **Descriptions(설명)** | 도구·에이전트별 메타데이터 — 플래너가 무엇으로 라우팅할지 결정할 때 읽음 |
| **New Orchestrator(에이전틱 추론 루프)** | New 타입 에이전트의 기본 오케스트레이터 — 한 턴 안에서 계획→실행→관찰→반복을 작업 완료까지 수행 (Classic에서는 *Enhanced Task Completion* 으로 프리뷰) |
| **Skill** | 오케스트레이터가 필요 시 로드하는 재사용·명명 컴포넌트 — *언제 쓸지* + *의존 도구* + *가드레일 포함 번호 절차* 를 묶어 기본 지침을 짧게 유지 |

**참고 문서(원문):** [Generative Orchestration](https://learn.microsoft.com/en-us/microsoft-copilot-studio/faqs-generative-orchestration) · [Configure generative actions](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-generative-actions) · [Multi-Agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-add-other-agents)

---

## 사전 준비 (Prerequisites)

- **Microsoft Copilot Studio** 접근 권한.
- Dataverse 테이블 뷰 편집·환경 설정 토글이 가능한 **Power Platform 환경**(System Administrator 또는 System Customizer).
- **Account / Contact** Dataverse 테이블에 로드된 샘플 데이터(Use Case #1·#2에서 쓰는 `(sample)` 레코드).
- 환경에 미리 로드된 **Account Data Lookup Agent**(Use Case #1에서 검증·게시).
- (Use Case #3 한정) New 타입 에이전트(New Orchestrator), Dataverse Intelligence(Work IQ), Dataverse MCP 서버를 쓸 수 있는 환경.

---

## 학습 목표 (Summary of Targets)

이 랩을 마치면 다음을 할 수 있습니다.

- 작동하는 샘플 연결 에이전트(Account Data Lookup Agent)를 환경에서 검증.
- Instructions·Descriptions가 플래너에 미치는 영향 이해.
- New 타입 에이전트를 만들고 New Orchestrator(에이전틱 추론 루프)가 다단계 작업을 어떻게 완료하는지 관찰.
- 동작을 재사용 가능한 Skill로 패키징하고, 오케스트레이터가 이를 로드해 커스텀 MCP·두 번째 지식·날씨를 한 턴에 체이닝하는 것을 확인.

---

## 다루는 Use Case

| # | 제목 | 내용 | 소요 |
|---|------|------|:----:|
| 1 | 샘플 연결 에이전트 작동시키기 | 사전 제작 연결 에이전트와 데이터가 준비됐는지 확인 | 10분 |
| 2 | Instructions·Descriptions가 플래너에 미치는 영향 | 플래너 결정이 Instructions/Descriptions에 따라 어떻게 달라지는지 직관 형성 | 20분 |
| 3 | New Orchestrator — 에이전틱 추론 루프 | New 타입 에이전트의 오케스트레이터가 다단계 작업을 끝까지 완료하는 모습 확인 | 30분 |
| 4 | Skill 활용 | 동작을 재사용 가능한 Skill로 패키징하고 오케스트레이터가 커스텀 MCP·지식·날씨를 체이닝하는 것을 관찰 | 30분 |

---

## Use Case 1 — 샘플 연결 에이전트 작동시키기

**목표:** 환경이 준비됐고 샘플 연결 에이전트(Account Data Lookup Agent)가 게시됐는지 확인합니다.

> 📝 멀티 에이전트 랩 등 다른 랩에서 이미 이 검증을 마쳤다면 Use Case #1을 건너뛰고 #2로 진행해도 됩니다.

### 1) Dataverse Search가 켜져 있는지 확인

1. Copilot Studio 우상단 **톱니바퀴** 아이콘 → **Go to Power Platform admin center**.
2. [Power Platform 관리 센터](https://admin.powerplatform.microsoft.com/)에서 **Manage** 탭 → **Environments** → 목록에서 환경 선택.
3. 환경 페이지 상단 내비게이션의 **Settings**(상단 명령 — 전역 톱니 설정이 아님)를 선택. 직접 URL을 붙여넣지 말고 관리 센터를 통해 이동.
4. **Product** 그룹 펼치기 → **Features**.
5. **Dataverse search** 섹션에서 두 체크박스가 모두 활성화됐는지 확인:
   - *Turn on search indexing to support Dataverse intelligence (Work IQ)…*
   - *Show global search bar in all model driven apps and turn on search indexing…*

![Dataverse Search 설정]({{ '/labs/mcs-orchestration-kr/images/image-28.png' | relative_url }})

6. 변경했다면 **Save**.

### 2) 연결 에이전트용 인덱스 확인

> ⚠️ 연결 에이전트 동작에 필수는 아니지만, 미리 로드된 에이전트가 결과를 반환하도록 몇 개 테이블을 인덱싱해야 합니다.

1. [Power Apps 메이커 포털](https://make.powerapps.com/)로 이동.

![Power Apps 열기]({{ '/labs/mcs-orchestration-kr/images/image-19.png' | relative_url }})

2. 왼쪽 메뉴 **Tables** → **Account** 테이블 선택 → **Data experiences**의 **Views** → **Quick Find Active Accounts**.
3. **View Column** 으로 다음 열이 뷰에 있는지 확인(스크롤 필요): Address 1: State/Province, ZIP/Postal Code, City, Annual Revenue, Currency.
4. 누락된 열은 **+ View column**으로 추가.

![Account 뷰]({{ '/labs/mcs-orchestration-kr/images/image-20.png' | relative_url }})

5. 우측 하단 **Find by**에 검색 가능 필드(State/Province, ZIP/Postal Code, City)를 추가하려면 **Edit find table columns**로 확인·추가.

![Account 검색 가능 열 추가]({{ '/labs/mcs-orchestration-kr/images/image-21.png' | relative_url }})

6. **Save and publish**로 인덱스 업데이트. **완료 전까지 페이지를 벗어나지 마세요!** → 좌상단 **Back** → **Tables**로 복귀.

![Tables로 이동]({{ '/labs/mcs-orchestration-kr/images/image-22.png' | relative_url }})

7. **Contact** 테이블 선택 → **Views** → **Quick Find Active Contacts** → **View Column**으로 Anniversary, Birthday, Job Title, Marital Status 확인. 누락 시 **+ View column** 추가.

![Contact 열 추가]({{ '/labs/mcs-orchestration-kr/images/image-23.png' | relative_url }})

8. **Save and publish**(완료 전 이탈 금지).

### 3) Account Data Lookup Agent 테스트·게시

1. Copilot Studio 탭에서 **Account Data Lookup Agent** 열기 → 우상단 **Test** → `What are the accounts in Texas?` 입력.
2. 에이전트가 동작하고 데이터가 인덱싱됐음을 보여주는 응답 확인.

![Account Lookup 테스트]({{ '/labs/mcs-orchestration-kr/images/image-24.png' | relative_url }})

3. 우상단 **Settings** → Generative AI 설정의 **Connected agents** 섹션에서 *Let other agents connect to and use this one* 을 **On**으로. (왼쪽 내비의 별도 *Connected Agents* 항목이 아니라 Generative AI 페이지의 Connected agents 섹션입니다.)
4. Settings를 닫고 **Publish** → *Publish this agent* 대화상자에서 **Force newest version** 체크 → **Publish**.

![에이전트 게시]({{ '/labs/mcs-orchestration-kr/images/image-29.png' | relative_url }})

> ⚠️ 게시되지 않은 에이전트에는 연결할 수 없습니다. 최신 버전 강제 적용으로 연결 에이전트가 최신 변경을 가져오게 합니다.

> ✅ **Use Case #1 완료!** **핵심 정리:** 연결 에이전트가 Dataverse 데이터를 조회하려면 환경 수준에서 **Dataverse Search**가 켜져 있어야 하고, **Quick Find 인덱스** 열이 런타임 필터 가능 필드를 결정하며, 연결 에이전트는 **게시 + 공유 토글**이 모두 켜져 있어야 연결됩니다.

---

## Use Case 2 — Instructions·Descriptions가 플래너에 미치는 영향

**목표:** 생성형 오케스트레이션 플래너가 Instructions·Descriptions를 어떻게 읽어 올바른 계획을 조립하는지 직관을 쌓습니다.

### 1) Instructions·Descriptions가 설정되는 위치 살펴보기

Account Data Lookup Agent를 열고 아래 위치를 차례로 확인합니다. 각각이 플래너가 다음에 할 일을 결정할 때 읽는 *훅(hook)* 입니다.

**① Overview의 Instructions**

- **Overview** 페이지에서 에이전트 수준 Instructions를 읽습니다 — 목적·동작 규칙·전역 제약을 기술.

![Overview의 Instructions]({{ '/labs/mcs-orchestration-kr/images/image-30.png' | relative_url }})

- Instructions는 **매 턴 실행**됩니다. 도구 설명(해당 도구를 쓸지 결정할 때만 읽음)과 달리 에이전트 수준 Instructions는 모든 턴의 플래너 컨텍스트에 추가됩니다. 예: 인자 처리 규칙(`(sample)`이 이름에 있으면 다른 도구로 넘길 때 포함), 포맷/동작 규칙(`#Formatting Rules` 아래 "파일 내보내기·생성을 절대 제안하지 말 것").

> 💡 에이전트 수준 Instructions는 강력하지만 비쌉니다(매 턴 플래너 컨텍스트 소비). 정말 모든 곳에 적용되는 규칙에만 쓰고, 특정 도구/자식에서만 필요한 규칙은 그 도구/자식의 **description**에 두세요.

**② 자식 에이전트(Child Agents)**

- 상단 내비 **Agents** → 이 연결 에이전트 안의 자식들(**Account Agent**, **Contact Agent**, 둘 다 Child 관계)을 확인. 각각 계정 조회 vs 연락처 조회라는 전문 역량을 나타냅니다.

![자식 에이전트 — Account Agent와 Contact Agent]({{ '/labs/mcs-orchestration-kr/images/image-32.png' | relative_url }})

**③ 자식 에이전트의 Descriptions**

- **Account Agent**를 열고 Details 패널의 **Name**·**Description** 확인.

![자식 에이전트 Details — Name과 Description]({{ '/labs/mcs-orchestration-kr/images/image-31.png' | relative_url }})

- 플래너 라우팅에서 **Name이 Description보다 우선순위가 높습니다**. 의도를 드러내는 명확한 이름(예: "Account Agent")이 대부분의 일을 합니다. Description은 이름만으로 담지 못하는 맥락·처리 규칙을 추가하는 자리입니다.

> 💡 두 자식 에이전트의 이름이 비슷하면 description이 결정타가 됩니다. 잘못 라우팅되면 먼저 **이름이 충분히 구별되는지** 확인하세요.

**④ 자식 에이전트의 Instructions**

- 같은 자식 에이전트에서 왼쪽 패널 **Instructions** 선택.

![Account Agent — Instructions]({{ '/labs/mcs-orchestration-kr/images/image-33.png' | relative_url }})

- 자식 수준 Instructions는 **그 자식이 실행될 때만** 동작합니다. 스크린샷에서 Account Agent의 Instructions는 **Find Account**, **Get Account Details** 두 도구를 이름으로 참조하고 각각 언제 쓸지 지시합니다. 초록색 알약(pill)은 자유 텍스트가 아니라 피커에서 삽입된 **명시적 도구 참조**로, 플래너는 이를 특정 도구를 가리키는 하드 포인터로 읽습니다.

> 💡 이름·설명 조정으로 원하는 결과가 안 나오면, child 수준 Instructions로 올바른 도구 사용을 강제하는 것이 좋습니다. 단, 도구의 이름·설명을 먼저 손보고 그래도 부족할 때 Instructions를 쓰세요.

**⑤ 도구의 Descriptions**

- 상단 내비 **Tools** → **Find Account** 도구 열기. (도구에 빨간 느낌표가 있으면 연결이 안 된 것 — 우상단에서 **Connection** 설정 후 **Save**, 닫았다 다시 열기.)

![Find Account 도구 — Details]({{ '/labs/mcs-orchestration-kr/images/image-34.png' | relative_url }})

- 도구 Name·Description도 자식 에이전트와 같은 우선순위 패턴(Name 우선, Description 보강). 이 도구의 설명("city, account name, primary contact, state 등으로 계정을 찾는다")은 ① 작업을 명명하고 ② 입력을 자연어로 힌트해, 사용자가 "accounts in Texas"라고 말했을 때 플래너가 그 값이 이 도구의 입력으로 매핑됨을 인식하게 합니다. 또한 **Available to: Account Agent** 로 도구 가용성이 특정 자식에 한정됩니다.

**⑥ 입력(Inputs)의 Descriptions**

- 같은 도구에서 **Inputs** → search 입력 펼치기.

![Find Account 도구 — Inputs]({{ '/labs/mcs-orchestration-kr/images/image-35.png' | relative_url }})

- 입력 설명은 플래너에게 **어떤 값이 들어가야 하고 어떻게 포맷하는지**를 알려줍니다. search 입력 설명("두 자리 대문자 주 코드, 5자리 우편번호, 도시, 계정명, 주 연락처명을 포함한 검색 쿼리")의 "two digit state code in all caps"는 플래너가 "Texas"를 `TX`로 변환하게 합니다 — Dataverse 검색은 올바른 대소문자·포맷일 때만 매칭됩니다.

> ⚠️ 입력 설명은 **동적 체이닝의 기반**입니다. 한 도구의 출력을 다른 도구의 입력으로 넘길 때, 모든 입력에 값의 형태를 알 수 있을 만큼 명확한 설명이 있어야 변환이 결정론적이 됩니다.

### 2) 데모 (순서대로, 대화 리셋 없이)

1. 우상단 **Test** → **+** 로 새 대화 시작.

> ⚠️ 아래 프롬프트는 **순서대로, 중간 리셋 없이** 실행하세요. 여러 프롬프트가 이전 결과("them", "the 2nd one")를 참조합니다.

2. **위치로 계정 찾기:**
   ```
   What are the accounts in Texas?
   ```
   액티비티 트래커를 펼쳐 세 가지 플래너 결정과 **입력 값 변환**을 확인. `search` 값이 `"Texas"`가 아니라 `"TX"` 입니다.

![액티비티 트래커 — Find Account 입력 search: TX]({{ '/labs/mcs-orchestration-kr/images/image-36.png' | relative_url }})

3. **턴 간 컨텍스트 유지:**
   ```
   What are all the details on them?
   ```
   플래너는 재검색하지 않고 이전 턴의 4개 계정에 대해 **Get Account Details**를 계정당 한 번씩 호출(Total 4). "them"은 도구로 보내지지 않고 구체적 4개 계정으로 해소됩니다.

![액티비티 트래커 — Account Agent 아래 4번의 Get Account Details]({{ '/labs/mcs-orchestration-kr/images/image-37.png' | relative_url }})

> 💡 이 *find → details* 패턴은 중요한 설계 선택입니다. search 도구는 매칭당 최소 레코드만 반환하고, details 도구는 사용자가 요청한 항목의 전체 페이로드만 가져와 토큰 예산을 아낍니다.

4. **관련 엔티티로 드릴다운:**
   ```
   What is the job title of the primary contact of the 2nd one?
   ```
   플래너가 **Account Agent → Contact Agent**로 전환하고, "the 2nd one"을 `Adventure Works (sample)`, "primary contact of"를 `Nancy Anderson (sample)`로 해소해 자연어 Task로 자식에 전달합니다.

![액티비티 트래커 — 해소된 Task 입력으로 Contact Agent 디스패치]({{ '/labs/mcs-orchestration-kr/images/image-38.png' | relative_url }})

5. **파생 필드 사용(DB에 없는 age 계산):**
   ```
   How old are they?
   ```
   `Get-Contact-Age` 도구는 없습니다. Contact Agent가 `Get-Contact-Details`로 birthdate를 가져오고 LLM이 오늘 날짜로 나이를 계산해 Summary에 "1960-04-22 생, 2026-05-10 기준 66세" 식으로 도출 과정을 보여줍니다.

![액티비티 트래커 — birthdate로 나이를 계산하는 Contact Agent]({{ '/labs/mcs-orchestration-kr/images/image-39.png' | relative_url }})

6. **상태 필드 + 플래너 자기설명:**
   ```
   Are they married?
   ```
   응답 확인(Nancy Anderson은 기혼) 후 액티비티 트래커 항목 하단 **Get rationale** 선택 → 플래너가 도구 선택 이유와 계획 수립 과정을 평이한 언어로 설명합니다.

![액티비티 트래커 — Get rationale로 플래너 계획을 평이하게 표시]({{ '/labs/mcs-orchestration-kr/images/image-40.png' | relative_url }})

> 💡 **Get rationale**은 오케스트레이션에서 가장 유용한 튜닝 도구입니다. 플래너가 잘못 동작하면 이유를 알려주므로 Instructions·Descriptions와 나란히 읽으세요. 의도와 다르면 어느 설명을 다듬어야 할지 정확히 가리킵니다.

7. **연락처로 직접 전환:**
   ```
   What is Susanna Stubberod's phone number?
   ```
   플래너가 주제가 사람임을 인식해 **Account Agent 없이 곧장 Contact Agent**로 디스패치하고, Task에 연락처와 계정 맥락(Litware, Inc.)을 함께 담습니다.

![액티비티 트래커 — Susanna Stubberod 전화번호를 Contact Agent로 직접 디스패치]({{ '/labs/mcs-orchestration-kr/images/image-41.png' | relative_url }})

> 📝 Account Agent와 Contact Agent가 서로를 호출하지 않는 **피어 자식**이기에, 플래너는 질문이 시작되는 쪽 어디서든 진입할 수 있습니다. 같은 도구 세트가 모든 방향의 질문에 답합니다 — 각 도구에 좋은 설명을 쓰면 플래너가 경로를 찾습니다.

> ✅ **Use Case #2 완료!** **핵심 정리:** Instructions는 *동작*을, Descriptions는 *라우팅*을 형성합니다. 플래너는 **에이전트·자식 에이전트·도구·입력** 네 수준에서 설명을 읽고, 어느 한 수준이 약하면 잘못된 라우팅/인자로 이어집니다. 대화 컨텍스트(대명사·서수)는 이전 턴 기준으로 해소됩니다.

---

## Use Case 3 — New Orchestrator (에이전틱 추론 루프)

**목표:** New 타입 에이전트를 세우고, New Orchestrator의 에이전틱 추론 루프가 다중 도구 작업 완료를 어떻게 구동하는지 검증합니다.

> 📝 *Enhanced Task Completion은 어디로?* Classic에서는 Settings → Generative AI → *Enhanced task completion* 토글로 프리뷰됐습니다. New 경험에서는 New 타입 에이전트가 New Orchestrator(에이전틱 추론 루프)를 **기본으로** 사용하며 토글이 없습니다.

### 1) Dataverse Intelligence(Work IQ)와 Dataverse MCP 서버 활성화

1. Use Case #1과 동일하게 Power Platform 관리 센터로 이동 → **Manage** → **Environments** → 환경 → 상단 **Settings**.
2. **Product** 그룹 → **Features**.
3. **Dataverse intelligence** 아래 *Turn on Dataverse intelligence (Work IQ)…* 체크 확인.
4. **Dataverse Model Context Protocol** 아래 MCP 클라이언트 옵션(GA·Preview) 모두 체크 확인 → 변경 시 **Save**.

![Work IQ + Dataverse MCP 기능 설정]({{ '/labs/mcs-orchestration-kr/images/image-42.png' | relative_url }})

### 2) New 타입 Sales Account Assistant 만들기

1. Copilot Studio에서 **New experience** 토글(우상단)이 ON인지 확인(기본값).
2. 왼쪽 **Agents** → 우상단 **New Agent** 선택. (드롭다운의 *New classic agent* 가 아니라 **New Agent** 자체를 선택해야 New 타입 에이전트가 생성됩니다.)
3. 새 디자이너가 Build 탭에서 열리면 이름 지정:
   ```
   Sales Account Assistant
   ```
4. **Instructions** 박스에 붙여넣기:
   ```
   You are a Sales Account Assistant for sales associates. Help users complete multi-step tasks end to end. Use your Dataverse tools to look up account and contact data and the weather tool for current weather. When a request touches gifts or spending, follow the company gifting policy in your knowledge. Complete the whole task before responding rather than stopping to ask at each step.
   ```
5. **Model**은 기본값(Claude Sonnet 4.6) 유지 → **Save**. ID가 부여되고 Preview·Evaluate 탭이 활성화됩니다.

![Build 탭의 New 타입 Sales Account Assistant]({{ '/labs/mcs-orchestration-kr/images/new-orch-01.png' | relative_url }})

### 3) 오케스트레이터가 쓸 도구 추가

**날씨 도구 추가 (Maker 인증)**

1. 우측 레일 **Add tool** → `Weather` 검색 → **Get current weather (MSN Weather)** → **Add**.

![도구 추가 — MSN Weather Get current weather]({{ '/labs/mcs-orchestration-kr/images/new-orch-02.png' | relative_url }})

2. Tools 목록에서 **Get current weather** 선택 → Tool details 열기.
3. **Authentication mode**를 **Maker**로 → Connection이 *Not connected* → **Create new connection** → **Create** → **Save**.

![Tool details — 연결이 있는 Maker 인증 모드]({{ '/labs/mcs-orchestration-kr/images/new-orch-03.png' | relative_url }})

> ⚠️ 익명·API 키·서비스 계정 도구는 **Maker**를 쓰세요. MSN Weather는 익명 인증이라 메이커로 실행해 연결을 모든 사용자에게 재사용합니다. User로 두면 첫 호출 시 "Connection Required" 카드가 뜹니다. (메일·파일처럼 로그인 사용자로 동작하는 도구는 User 유지.)

4. Tool details의 **Inputs**: Location은 **AI**로 두고(에이전트가 대화에서 추론), Units는 *How is this filled?* 를 AI→**Value**로 바꿔 변수에 바인딩 → 변수 Value의 chevron에서 **I (Imperial)** 선택 → **Save**. (`I`=화씨, `C`=섭씨)

**Microsoft Dataverse MCP Server 도구 추가**

1. **Add tool** → `Dataverse` 검색 → **Model Context Protocol** 필터 → **Microsoft Dataverse MCP Server**(GA 카드, Preview 아님).

![도구 추가 — Microsoft Dataverse MCP Server (GA)]({{ '/labs/mcs-orchestration-kr/images/new-orch-05.png' | relative_url }})

2. **Select a connection** 에서 Dataverse 연결 선택(이전 랩에서 만들었다면 녹색 체크). 없으면 **Not connected → Create new connection → Create** 후 Entra 동의 → **Next**.
3. **Review capabilities**(`read_query`, `search`, `create_table`, `update_record` 등)에서 기본 선택 유지 → **Confirm**. 이 랩은 `read_query`(계정·연락처 읽기)와 `search`(스키마 탐색)만 사용합니다.
4. **Save**. Tools 목록에 Get current weather, Microsoft Dataverse MCP Server가 보입니다.

### 4) 지식 추가

1. Build 탭 우측 레일 **Add knowledge** → **SharePoint**(Powered by Work IQ) → **Browse items** → OnePlace → Documents → HR → `company_policies_sample.pdf` → **Confirm selection** → **Add to agent**.
2. Knowledge 섹션에 파일이 보이는지 확인.

![지식 파일과 도구가 연결된 Build 탭]({{ '/labs/mcs-orchestration-kr/images/new-orch-09.png' | relative_url }})

### 5) 에이전틱 추론 루프 테스트

**Preview** 탭을 엽니다. New Orchestrator는 작업을 인라인으로 표출 — "Working on it…" 후 호출하는 각 도구를 명명하는 추론 흐름(train of thought)이 보입니다.

1. **단일 도구 호출:**
   ```
   What is the current weather in Seattle?
   ```

![추론 루프 — Get current weather]({{ '/labs/mcs-orchestration-kr/images/new-orch-04.png' | relative_url }})

2. **Dataverse MCP로 구조화 데이터 조회:**
   ```
   Give me a table with all the accounts that are in Texas
   ```
   "Dataverse의 accounts 테이블을 검색·조회해야 한다"고 추론하고 `read_query`를 호출, Markdown 표로 렌더링.

![추론 루프 — read_query가 텍사스 계정을 반환]({{ '/labs/mcs-orchestration-kr/images/new-orch-06.png' | relative_url }})

3. **이전 결과 수정:**
   ```
   Add the account number to the list
   ```
   이전 턴 컨텍스트를 재사용해 Account Number 열을 추가(필요 시 두 번째 `read_query`).

![추론 루프 — 컨텍스트에서 account number 추가]({{ '/labs/mcs-orchestration-kr/images/new-orch-08.png' | relative_url }})

4. **다중 도구 추론(지식 + Dataverse + 날씨):**
   ```
   I need to get a gift for the primary account contact for Litware. Can you propose an appropriate gift that takes into consideration our gifting policies and their weather to make some good recommendations for an appropriate gift.
   ```
   한 턴에 여러 단계를 구동 — 선물 정책 검색(지식) → Litware 계정·주 연락처 `read_query`(Dataverse MCP) → 연락처 도시의 `Get current weather` → 정책 준수·날씨 적합 추천을 종합하고 `company_policies_sample.pdf` 인용 포함.

![추론 루프 — 정책 인용이 포함된 다중 도구 선물 추천]({{ '/labs/mcs-orchestration-kr/images/new-orch-12.png' | relative_url }})

5. **추론 흐름의 단일 스텝 검사:** 트레이스의 어떤 도구 스텝이든 펼칠 수 있습니다. `read_query` 스텝을 펼치면 오케스트레이터가 보낸 정확한 파라미터(생성된 SQL)와 추론한 원시 결과가 보입니다.

![펼친 추론 스텝 — read_query 파라미터 + 결과]({{ '/labs/mcs-orchestration-kr/images/new-orch-07.png' | relative_url }})

> 📝 **추론 루프 vs 표준 오케스트레이션(UC#2):** 표준 생성형 오케스트레이션은 단일 패스이고 매우 검사하기 쉽습니다(모든 결정이 Activity Tracker에 표시, Get rationale로 계획을 읽음). New Orchestrator는 사용자의 최종 목표에 최적화 — 한 턴 안에서 계획→실행→관찰→반복하며 작업을 완료하고, 별도 Activity Tracker가 아니라 Preview 패널에 작업을 인라인 표출합니다. 모든 스텝을 검사해야 하면 표준, 완성된 결과를 원하면 New 타입을 선택하세요.

> ✅ **Use Case #3 완료!** **핵심 정리:** New 타입 에이전트는 기본으로 New Orchestrator(에이전틱 추론 루프)를 사용해 한 턴에 작업을 완료합니다. 단, 가시성은 트레이드오프 — Preview 패널의 추론 흐름을 펼쳐 파라미터·결과를 봅니다. 자격 증명 패턴을 도구에 맞추세요(익명·API 키 → Maker, 로그인 사용자로 동작 → User).

---

## Use Case 4 — Skill 활용

**목표:** Use Case #3의 Sales Account Assistant를 확장해 주문 문제를 끝까지 진단·해결하게 만들고, New Orchestrator가 Skill을 로드해 MCP 도구·지식·날씨를 한 턴에 체이닝하는 것을 관찰합니다.

> ⚠️ 이 Use Case는 Use Case #3의 Sales Account Assistant(**Get current weather**, **Microsoft Dataverse MCP Server**, **company_policies_sample.pdf** 지식이 연결됨) 위에 직접 빌드합니다.

### 1) Customer Care 지식 소스 추가

1. **Sales Account Assistant**(Build 탭) → 우측 레일 **Add knowledge** → **SharePoint** 카드.
2. **Browse items** → OnePlace → Documents → **Customer** → `Contoso-Customer-Care-Policies.pdf` → **Confirm selection**.

![Customer 폴더에서 Customer Care 정책 선택]({{ '/labs/mcs-orchestration-kr/images/uc4-knowledge-customer.png' | relative_url }})

3. **Add to agent**. Knowledge 섹션에 내부 HR 문서와 고객 대상 Customer Care 문서 두 개가 보입니다.

![두 지식 소스가 연결됨]({{ '/labs/mcs-orchestration-kr/images/uc4-knowledge-both.png' | relative_url }})

> 📝 두 정책 소스는 의도적입니다. 고객 대상 Contoso Customer Care Policies는 에이전트가 **고객에게 인용**하는 소스, 내부 `company_policies_sample.pdf`는 에이전트가 **판단·에스컬레이션**에 쓰되 고객에게 읽어 주지 않는 가이드입니다.

### 2) MCP 서버 연결 만들기

이 Use Case는 사전 제작 커스텀 MCP 커넥터 **Order Management MCP**·**Warehouse MCP**(이커머스 백엔드 시뮬레이션)를 씁니다. New 타입 에이전트가 쓰기 전 각 연결이 필요합니다.

> ⚠️ **임시 우회(프리뷰 한계):** 현재 New 타입 에이전트의 인라인 Add tool → 연결 단계로는 이 커스텀 MCP 커넥터의 신규 연결을 만들 수 없습니다. 임시 classic 에이전트를 만들어 연결을 한 번 생성하면 New 타입이 이를 찾아 재사용합니다.

1. **Agents** 페이지 → **New Agent** 옆 chevron → **New classic agent** → 이름 `Enable New MCP Servers` → **Create**. (연결 생성용으로만 존재.)
2. 에이전트 **Overview** → **Add tool** → **Model Context Protocol (MCP)** 필터 → `Order Management` 검색 → Enter.
3. **Order Management MCP Server** 선택 → Connection 드롭다운(*Not connected*) → **Create new connection** → **Create**(자격 증명 불필요) → 연결되면 **Add and configure** → 서버 액션(`search_orders`, `get_order`, `get_shipment`, `request_return`, `get_return_status`) 로드.

![Classic 에이전트로 MCP 연결 생성]({{ '/labs/mcs-orchestration-kr/images/uc4-connection-create.png' | relative_url }})

4. **Warehouse MCP Server**(`check_stock`, `get_fulfillment_status`, `find_alternatives`, `get_restock_date`)에 대해 같은 방식으로 연결 생성. classic 에이전트는 그대로 둡니다.

![두 MCP 서버가 classic 에이전트에 추가됨]({{ '/labs/mcs-orchestration-kr/images/uc4-connections-both.png' | relative_url }})

### 3) MCP 서버 도구를 Sales Account Assistant에 추가

1. **Sales Account Assistant**(Build 탭) → 우측 레일 Tools 섹션의 **+ Add tool**.
2. **Model Context Protocol (MCP)** 필터 → `Order Management` 검색 → **Order Management MCP Server**. 이번엔 Connection 단계가 앞서 만든 연결로 해소됨 → **Next**.
3. **Review capabilities**에서 서버 액션이 로드됨("Couldn't load MCP tools" 오류 없음) → **Confirm**.

![New 타입 에이전트에서 MCP 역량 로드]({{ '/labs/mcs-orchestration-kr/images/uc4-tool-capabilities.png' | relative_url }})

4. **Warehouse MCP Server**도 반복. Tools 목록에 네 개(Get current weather, Microsoft Dataverse MCP Server, Order Management MCP Server, Warehouse MCP Server)가 보입니다.

![네 개 도구가 모두 연결됨]({{ '/labs/mcs-orchestration-kr/images/uc4-tools-attached.png' | relative_url }})

### 4) Skill 추가

Skill은 주문 문제에 대한 명명된 플레이북을 오케스트레이터에 제공합니다. UI에서 직접 만듭니다.

1. 우측 레일 Skills 섹션의 **+ Add skill** → 대화상자에서 **Create from blank**.

![Add skill 대화상자 — Upload 또는 Create from blank]({{ '/labs/mcs-orchestration-kr/images/uc4-skill-add.png' | relative_url }})

2. 세 필드를 채웁니다.
   - **Name:**
     ```
     order-resolution-concierge
     ```
   - **Description:** (언제 이 Skill을 쓸지 — 지연·정체·분실·파손·품절·반품/교환·날씨 영향 주문에 대해 사용. 주문이 이행 파이프라인 어디에 있는지 진단하고 정책에 근거해 옵션 보고. 사용자가 명시적으로 요청할 때만 행동.)
   - **Instructions:** 원문 랩의 `SKILL.md` 본문(절차·도구 목록·가드레일)을 그대로 붙여넣습니다. 핵심 절차 요약:
     1. 주문·고객 식별(`get_order` 또는 `search_orders`; 다중 매칭 시 한 번만 질문, 추측 금지).
     2. 주문 상태로 진단(배송됨→`get_shipment`, 미배송→`get_fulfillment_status`).
     3. 지연·품절 시 `check_stock`→품절이면 `get_restock_date`; 동일 제품의 다른 사이즈/색만 `find_alternatives`.
     4. 옵션을 정책에 근거(고객 대상=Contoso Customer Care Policies 인용, 내부=company_policies는 판단·에스컬레이션만).
     5. 날씨 영향 질문이면 `get_order`로 목적지 확인→`get_shipment`로 배송 중 확인→`Get current weather`(현재 조건, 예보 아님).
     6. 물어본 질문에만 답하고 멈춤.
     7. **명시적 요청이 있을 때만** 행동(`request_return`→`get_return_status`; 교환은 `check_stock` 확인 후).
     - 가드레일: 도구 결과·정책이 뒷받침하지 않는 환불·교환·재입고·배송 결과를 약속 금지; 도구가 빈/오류면 사실대로 말하고 데이터 날조 금지; 내부 정책을 고객에게 노출 금지.

![Create from blank Skill 폼이 채워진 모습]({{ '/labs/mcs-orchestration-kr/images/uc4-skill-create.png' | relative_url }})

> 📝 `SKILL.md` 파일로 작성하면 `name`·`description`은 작은 YAML front matter에 담기고, 폼으로 채울 때는 Name·Description 필드가 그 역할을 하며 Instructions 필드는 본문만 담습니다.

3. **Create**. Skills 아래 **order-resolution-concierge** 가 나타나고 에이전트가 저장됩니다.

![에이전트에 연결된 Skill]({{ '/labs/mcs-orchestration-kr/images/uc4-skill-attached.png' | relative_url }})

### 5) 에이전트 Instructions 업데이트

Use Case #3의 Instructions를 Skill 인식 버전으로 교체합니다(주문 문제는 Skill로, 내부 vs 고객 정책 경계).

1. **Instructions** 박스 전체를 선택하고 다음으로 교체:
   ```
   You are the Sales Account Assistant for sales associates. Help users resolve order issues end to end — order status, shipments, returns, exchanges, inventory, restock timing, and delivery-weather risk.

   Use your tools to do the work: search_orders and get_order plus the Order Management and Warehouse MCP servers for order, fulfillment, stock, and return actions; the Dataverse tools for account and contact data; and the weather tool for current conditions at a delivery destination.

   For any order problem (delayed, stuck, out of stock, damaged, return, exchange, or weather-risk), follow the Order Resolution Concierge skill.

   Ground customer-facing answers in the Contoso Customer Care Policies (returns, refunds, exchanges, cancellations, shipping) and cite the relevant section. Treat the internal company policy as internal guidance only — use it to decide and escalate, and do not quote it to a customer.

   Answer the question that was asked. Only take an action (open a return or commit an exchange) when the user explicitly asks. Never invent order, stock, tracking, or weather data — if a tool returns nothing or errors, say so and offer the next-best step.
   ```
2. **Save**.

![Skill 인식 Instructions 업데이트]({{ '/labs/mcs-orchestration-kr/images/uc4-instructions.png' | relative_url }})

### 6) 데모

Preview 패널을 열고 아래 프롬프트를 실행합니다. 주문 문제에서는 추론 흐름에 `Loaded Skill: …order-resolution-conc…` 이후 MCP 도구 호출·지식 검색·종합 답변이 보입니다.

> ⚠️ 고객 이름이 들어간 프롬프트 사이에는 대화를 **리셋**하세요("I'm Sarah Mitchell" 등은 오케스트레이터가 그 사람을 컨텍스트에 유지). 다음 프롬프트 전 Preview 상단 **New chat**.

1. **전체 계정 그림(식별 + 팬아웃):**
   ```
   Hi, I'm Sarah Mitchell. Can you pull up my orders and summarize where each one stands, flagging anything that's delayed or has a return in progress?
   ```
   `search_orders`로 Sarah의 세 주문을 찾고 `get_order`로 한꺼번에 가져온 뒤 `get_shipment`·`get_fulfillment_status`로 실시간 상태를 채웁니다.

![계정 포트폴리오 요약]({{ '/labs/mcs-orchestration-kr/images/uc4-demo-1-portfolio.png' | relative_url }})

2. **번들 딜레마(Skill 로드; 혼합 가용성):**
   ```
   Order ORD-10460 still hasn't arrived. What's holding it up, and what are my options?
   ```
   Skill 로드 후 `get_order`→`get_fulfillment_status`+`check_stock`(두 품목)→품절 품목 `get_restock_date`→정책 검색. 한 품목 백오더, 한 품목 재고·피킹 상태로 보고.

![Skill 로드 및 번들 진단]({{ '/labs/mcs-orchestration-kr/images/uc4-demo-2-bundle.png' | relative_url }})

3. **재입고 시점(정직한 "대기"):**
   ```
   When will the LumiRead e-reader in order ORD-10422 ship?
   ```
   `get_order`→`get_fulfillment_status`→`get_restock_date`가 재입고일을 반환하고, 배송일을 날조하지 않고 "재입고 대기 중"으로 보고.

![재입고 답변]({{ '/labs/mcs-orchestration-kr/images/uc4-demo-3-restock.png' | relative_url }})

4. **사이즈/색 교환(find_alternatives):**
   ```
   The black TrailMark hoodie in order ORD-10455 — can I get it in XL or grey instead?
   ```
   `get_order`→`find_alternatives`가 동일 제품의 진짜 대체(XL·그레이)를 찾고, 답하기 전에 Customer Care 교환 규칙을 확인.

![교환 옵션]({{ '/labs/mcs-orchestration-kr/images/uc4-demo-4-exchange.png' | relative_url }})

5. **날씨와 배송 리스크(도메인 교차 종합):**
   ```
   My order ORD-10421 is out for delivery — could the weather hold it up?
   ```
   `get_order`+`get_shipment`로 목적지·배송 중 확인 → 그 도시의 `Get current weather` → 배송 지연 정책 → 날씨가 우려인지 결론(현재 조건, 예보 아님).

![날씨 → 배송 리스크 종합]({{ '/labs/mcs-orchestration-kr/images/uc4-demo-5-weather.png' | relative_url }})

6. **정책 근거 적격성(가드레일 작동):**
   ```
   The PulseWave earbuds in order ORD-10318 are defective. Confirm I'm within policy, then go ahead and start the return for me.
   ```
   행동을 요청해도 정책을 먼저 확인: `get_order`+`get_shipment`로 배송일 확인, 정책의 30일 반품 창(§1.1)에 따라 기간 초과면 `request_return`을 호출하지 않고 해당 조항을 인용하며 거절.

![반품 창을 인용한 정책 근거 거절]({{ '/labs/mcs-orchestration-kr/images/uc4-demo-6-policy-refusal.png' | relative_url }})

> 📝 샘플 주문은 현재 날짜보다 한참 이전이라 30일 창을 벗어나므로, 이 프롬프트는 실행된 반품이 아니라 정책 근거 거절을 보여 줍니다.

7. **추측 금지(명확화 질문 가드레일):**
   ```
   Hi, this is James Rivera. Can you check on my recent order?
   ```
   `search_orders`가 James의 두 주문을 찾아, 추측 대신 어느 주문인지 한 번 명확화 질문.

![추측 대신 명확화 질문]({{ '/labs/mcs-orchestration-kr/images/uc4-demo-7-guardrail.png' | relative_url }})

> ✅ **Use Case #4 완료!** **핵심 정리:** Skill은 오케스트레이터가 필요 시 로드하는 재사용·명명 플레이북으로 *언제 쓸지*+*의존 도구*+*절차*를 묶어 기본 지침을 짧게 유지합니다. 커스텀 MCP 서버가 도메인 액션을 추가하고, 두 지식 소스는 두 청중(고객 대상은 인용, 내부는 판단)에 대응하며, 그라운딩은 실제로 작동(정책 인용·반품 창 준수·기간 초과 반품 거절)합니다.

---

## 학습 요약 (Summary of Learnings)

이 랩에서 Copilot Studio 오케스트레이션 엔진을 두 각도에서 보았습니다.

- **표준 생성형 오케스트레이션(UC#2)** — 사용자 의도에 따라 턴마다 도구/자식/지식 하나를 고르는 단일 패스 플래너. 매우 검사하기 쉬움(Activity Tracker·Get rationale). 에이전트 Instructions, 자식·도구 Name+Description, 입력 Description으로 튜닝.
- **New Orchestrator — 에이전틱 추론 루프(UC#3)** — New 타입 에이전트의 기본 오케스트레이터(Classic에서는 Enhanced Task Completion으로 프리뷰). 한 턴에 계획→실행→관찰→반복하며 작업 완료. 완성된 결과를 원할 때 유리, 단계별 투명성이 필요할 때 불리.
- **Skills(UC#4)** — New Orchestrator가 필요 시 로드하는 재사용·명명 플레이북. *언제 쓸지*+*의존 도구*+*가드레일 포함 절차* 를 패키징.

두 오케스트레이터의 가장 중요한 차이: 표준은 **다음 올바른 스텝**에, New Orchestrator는 **사용자의 최종 목표**에 최적화합니다.

### 결론 및 권장사항 (Conclusions & Recommendations)

> **오케스트레이션 황금률:**
> - **Names route, Descriptions explain, Instructions force** — 가장 싼 신호(도구 이름)부터 튜닝하고, 그다음 설명, 그래도 부족하면 자식/부모 Instructions로 에스컬레이션.
> - **입력 설명은 동적 체이닝의 기반** — 명확한 입력 설명이 없으면 플래너가 출력→입력 변환을 추측해야 합니다.
> - **Get rationale를 설명의 디버거 트레이스로** 사용 — 잘못된 결정 시 어느 설명을 다듬어야 할지 가리킵니다.
> - **자격 증명 패턴을 도구 의도에 맞추기** — 익명/API 키/서비스 계정은 Maker, 사용자로 동작하는 도구는 End-user.
> - **오케스트레이터를 의도적으로 선택** — 투명성이 중요하면 표준, 완성된 결과가 중요하면 New Orchestrator.

---

> 📌 본 한국어 페이지는 [원문 Orchestration 랩](https://microsoft.github.io/mcs-labs/labs/mcs-orchestration/?event=advanced-agent-in-a-day)(MIT © Microsoft)을 번역·재구성한 것입니다. Skill 본문 등 전체 원문과 최신 업데이트는 원문을 함께 참고하세요.
