---
layout: lab
title: "Agent Builder vs Copilot Studio 상세 비교 (한국어)"
summary: "M365 Copilot Agent Builder와 Copilot Studio를 목적·코딩 레벨·대상·확장 방법으로 비교하고, Agent Builder 선언형 에이전트 개념·예시·핸즈온, Copilot Studio 구(Classic)·신(New) 경험 차이를 스크린샷과 함께 정리."
edition: "Public Preview"
level: 300
time: "20분"
audience: "Maker"
author: "이영서"
accent: "#B11F4B"
tags: ["Agent Builder", "Copilot Studio", "Declarative Agent", "Classic vs New", "비교"]
---

> 두 가지 에이전트 구축 방식을 **목적·코딩 레벨·대상·확장 방법** 관점에서 비교하고, 각각의 개념과 예시를 정리한 교육용 자료입니다.
> 참고: Microsoft Learn · Agent_Blog 실습 가이드 · KBHC Copilot Studio Introduction 덱

## 1. 한눈에 보는 비교표

"무엇을 만드느냐"보다 **누가, 어느 수준의 코딩으로, 어떤 목적**으로 쓰느냐가 선택의 핵심입니다.

| 구분 | M365 Copilot Agent Builder | Copilot Studio |
|------|----------------------------|----------------|
| **한 줄 정의** | M365 Copilot 안에서 만드는 **간단한 선언형 에이전트** | 다양한 채널에 배포하는 **본격 에이전트 빌드 플랫폼** |
| **주 목적** | 온보딩·문서 Q&A 등 RAG 기반 응답 | 업무 자동화·고급 액션·오케스트레이션 |
| **코딩 레벨** | 노코드 | 로우코드 (드래그앤드롭 + 필요 시 코드/식) |
| **주 사용자** | 코드 경험 없는 업무 사용자 | 정보 담당자, 업무 자동화 담당, 메이커 |
| **확장 방법** | 지식 소스 연결, 시작 프롬프트 | 도구/액션, 커넥터, 플로우, MCP, 연결된 에이전트 |
| **데이터/실행 범위** | M365 Copilot 그래프/연결 지식 | Power Platform·외부 API·다양한 데이터 소스 |
| **배포 대상** | M365 Copilot · Teams 내 | Teams, 웹, 음성 등 다채널 |
| **라이선스(개략)** | M365 Copilot | Copilot Studio (웹 기반) |
| **대표 활용** | 사내 문서 도우미, FAQ 봇 | 승인 워크플로, 백오피스 자동화, 멀티에이전트 |

> ※ 라이선스·기능은 변경될 수 있어 실제 도입 시 공식 문서를 확인하세요. SharePoint Agents·Agents Toolkit 등 추가 옵션은 별도 비교 참고.

## 2. Agent Builder — 선언형 에이전트

**Copilot Agent Builder**는 코드 없이 **자연어 지침(Instructions)** 과 **지식 소스**만으로 동작을 정의하는 **선언형 에이전트(Declarative Agent)** 도구입니다. 복잡한 프로그래밍 없이도, 사용자 요청을 처리하는 규칙과 데이터 소스 연결을 선언적으로 기술하여 누구나 손쉽게 특수 목적의 AI 에이전트를 만들 수 있습니다.

### 핵심 특징

| 특징 | 설명 |
|------|------|
| **Low-Code / No-Code** | 코드 대신 **지침 기반**으로 동작을 정의 |
| **Microsoft 365 통합** | SharePoint·OneDrive·Teams 등과 자연스럽게 연결 (별도 인덱싱·구성 불필요) |
| **확장성** | 다양한 데이터 소스 연결 + 이미지 생성·**Python 코드 인터프리터** 등 기능 활용 |
| **안전성** | Microsoft 365 보안 및 규정 준수 정책을 그대로 적용 (사용자가 접근 가능한 데이터만 참조) |

### 어디서 만드나

Teams 또는 M365 Copilot App의 **Copilot 좌측 탭 → [에이전트 만들기]** 에서 생성합니다. **① 대화형**(원하는 에이전트를 묘사하면 Copilot이 지침·자료를 자동 작성)과 **② 수동 구성**(지침·참조자료·기능을 직접 추가)을 함께 활용하면 빠르고 구조적으로 만들 수 있습니다.

![M365 Copilot 좌측의 에이전트 만들기 진입 화면]({{ '/labs/agentbuilder-vs-studio-kr/images/ws4-1-create.png' | relative_url }})

*M365 Copilot 좌측 탭 → "에이전트 만들기"에서 선언형 에이전트 생성 시작*

### 실제 예시 — 파트너 인사이트 도우미

메일·채팅·Teams·SharePoint 등 **내부 자료와 웹서치를 종합**해 미팅 대상자의 정보와 인사이트를 제공하는 에이전트입니다. 지침에 출력 포맷·주의사항(예: 1년 이상 경과 정보 경고, 사내 향응·접대 규정 고지)을 정의하고, **코드 인터프리터**로 HTML 인포그래픽 리포트까지 생성할 수 있습니다.

![파트너 인사이트 도우미 에이전트의 종합 인사이트 분석 결과 화면]({{ '/labs/agentbuilder-vs-studio-kr/images/ws4-example-partner-agent.png' | relative_url }})

*"파트너 인사이트 도우미"가 종합 인사이트 분석 결과를 제공하는 모습 — 출처·최신성 고지 포함*

### 규제 환경 적용 예시 — 금융상품 컴플라이언스 가이드

**목적**: 직원이 사내 승인된 컴플라이언스/약관 문서에서만 답을 찾도록 하여, 잘못된 안내나 비승인 정보 노출을 방지.

**지식 소스**: 컴플라이언스팀이 관리하는 SharePoint 사이트(승인 문서만)

**지침(Instructions) 예시**:

- 답변은 반드시 연결된 **승인 문서에서만** 근거를 찾고, 출처 문서명과 위치를 함께 표시합니다.
- 문서에 근거가 없으면 "확인된 근거가 없습니다"라고 답하고 **추측하지 않습니다**.
- 특정 상품의 **투자 권유·수익 보장 표현을 사용하지 않습니다** (규제 준수).
- 민감·개인정보(고객 식별정보)는 출력하지 않습니다.
- 결과는 마크다운 표로 제공하고, 마지막에 "본 답변은 내부 참고용이며 공식 안내가 아님" 고지를 덧붙입니다.

> 규제 포인트: ① 승인 소스 한정(환각 차단) ② 출처 명시(감사 추적) ③ 투자 권유 금지 ④ 개인정보 미노출 ⑤ 면책 고지

### 직접 해보기 — 선언형 에이전트 핸즈온 (3단계)

> 아래 핸즈온은 **Agent_Blog 제작자(chichoi1991)** 의 자료입니다. 본인이 작성한 자료가 아니며, 출처를 밝혀 연결합니다.

| 단계 | 내용 | 바로가기 |
|:----:|------|----------|
| **Step 1** | 에이전트 생성 및 지침 작성 — 에이전트 만들기 진입, 대화형·수동으로 지침 작성 | [핸즈온 열기 →](https://chichoi1991.github.io/Agent_Blog/chapters/ws4-1-create-agent/) |
| **Step 2** | 참조자료 · 기능 추가 — 메일·채팅·SharePoint 지식, 웹검색, 코드 인터프리터 활성화 | [핸즈온 열기 →](https://chichoi1991.github.io/Agent_Blog/chapters/ws4-2-ref-feature/) |
| **Step 3** | 테스트 및 공유 — 테스트 패널로 검증하고 조직 구성원에게 공유 | [핸즈온 열기 →](https://chichoi1991.github.io/Agent_Blog/chapters/ws4-3-test-share/) |

> 출처: [Agent_Blog — 선언형 에이전트 만들기 (chichoi1991.github.io)](https://chichoi1991.github.io/Agent_Blog/chapters/ws4-0-overview/) · 본 핸즈온/예시 이미지는 해당 저자 제작물입니다.

## 3. Copilot Studio — 구(클래식) vs 신(새 경험)

**Copilot Studio**는 본격적인 에이전트 빌드 플랫폼으로, 최근 **"새 에이전트 경험"** 으로 재설계(rebuilt)되었습니다. 두 경험은 아키텍처·런타임이 근본적으로 달라 서로 이전(migration)할 수 없습니다.

| 구 — 클래식 경험 | 신 — 새 에이전트 경험 |
|------------------|------------------------|
| 토픽(Topic)·플로우·분기 로직·노드 중심 작성 | **자연어 설명**으로 에이전트 작성 시작 |
| 캔버스가 주 작성 화면 (토픽/지식/액션/설정 분리) | 단일 화면에 정체성·지식·도구·스킬·설정 통합 |
| 명시적 트리거·대화 설계에 의존 | 토픽 플로우 대신 **지시 + 추론**이 동작 주도 |
| 오케스트레이션을 클래식/생성형 중 선택 가능 | 모든 에이전트가 **강화된 오케스트레이션** 사용 (M365 데이터 심층 추론) |
| 왼쪽 메뉴: **Topics · Knowledge · Actions · Settings** | 상단 탭: **Build · Preview · Evaluate · Monitor** |

> **선택 기준:** 새 에이전트를 만들고 더 나은 응답 품질·자연어 작성을 원하면 **새 경험**; 기존 클래식 에이전트 유지/확장이나 대화 흐름의 정밀·결정론적 제어가 필요하면 **클래식 경험**.

![구버전(클래식) Copilot Studio - 국가 정보 안내 에이전트 화면]({{ '/labs/agentbuilder-vs-studio-kr/images/studio-classic-country-agent.png' | relative_url }})

***[구버전 · 클래식]** 국가 정보 안내 에이전트 — Overview·Knowledge·Tools·Agents·Topics·Activity 등 탭이 분리된 클래식 UI*

![새 경험 Copilot Studio - HR Policy FAQ Agent 빌드 화면]({{ '/labs/agentbuilder-vs-studio-kr/images/studio-new-hr-faq-agent.png' | relative_url }})

***[신버전 · 새 경험]** HR Policy FAQ Agent — 단일 Build 화면에 Microsoft IQ·Skills·Tools·Knowledge·Connected agents 통합 (Build·Preview·Evaluate·Monitor)*

> 출처: Microsoft Learn (overview / classic-vs-new) · 구버전 이미지: KBHC Copilot Studio Introduction 덱 · 신버전 이미지: [Meet the new Copilot Studio (Tech Community 블로그)](https://techcommunity.microsoft.com/blog/copilot-studio-blog/meet-the-new-copilot-studio-rebuilt-for-more-complex-multi-step-work/4526488)
