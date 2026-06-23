---
layout: lab
title: "모듈 2 — Copilot Studio 도구(Tools) (한국어)"
summary: "커넥터·커스텀 커넥터·REST API·MCP 서버·에이전트 플로우·AI 프롬프트·CUA까지 에이전트 도구 생태계 개요. 연계 실습은 랩 1."
edition: "Classic"
level: 300
time: "30분"
audience: "Maker"
author: "이영서"
accent: "#5B5FC7"
tags: ["Tools", "Connector", "MCP", "Agent Flow", "CUA"]
source_url: "https://microsoft.github.io/mcs-labs/modules/tools-overview/"
source_title: "Copilot Studio Tools — mcs-labs"
prev_url: /labs/module-core-concepts-kr/
prev_title: "모듈 1 — 핵심 개념 개요"
next_url: /labs/mcs-tools-kr/
next_title: "랩 1 — 도구(Tools) 실습"
---

# 모듈 2 — Copilot Studio 도구(Tools)

> **출처 및 라이선스 (Source & License)**
> 본 페이지는 Microsoft가 공개한 **[microsoft/mcs-labs](https://github.com/microsoft/mcs-labs)** 의 모듈
> **[Copilot Studio Tools](https://microsoft.github.io/mcs-labs/modules/tools-overview/)** 와 연계 슬라이드 덱을 한국어로 번역·요약·재구성한 것입니다.
> 원문은 **MIT License — Copyright © Microsoft Corporation** 하에 배포되며, 본 한국어 자료는 MIT 라이선스가 허용하는 범위(저작권·라이선스 고지 유지) 안에서 재구성했습니다.
> 라이선스 전문: <https://github.com/microsoft/mcs-labs/blob/main/LICENSE>
> · [슬라이드(PPT) 다운로드](https://github.com/microsoft/mcs-labs/raw/main/presentations/bootcamp/08.%20Copilot%20Studio%20Tools%20Overview%20RRS_CB.pptx)

> **레벨** 300 · **소요** 30분 · **연계 랩** → [랩 1: 도구(Tools) 실습 (한국어)]({{ '/labs/mcs-tools-kr/' | relative_url }}) · [원문(영어)](https://microsoft.github.io/mcs-labs/labs/mcs-tools/?event=advanced-agent-in-a-day)

에이전트가 단순 대화를 넘어 **실제 행동(시스템 연결·프로세스 자동화·기록 작성)**을 하도록 만드는 도구 생태계를 다룹니다. 오케스트레이터가 에이전트 지침과 사용자 입력에 따라 어떤 도구를 호출할지 결정합니다.

## 에이전트 도구 상자(Agent Toolbox)

| 도구 | 한국어 설명 |
|------|-------------|
| **프리빌트 커넥터** | 1,400+ 플러그앤플레이 서비스. DLP·인증·거버넌스 내장, 에이전트·플로우 간 재사용 |
| **커스텀 커넥터** | 자체 REST API를 트리거·액션으로 래핑해 조직 전체에서 재사용 |
| **REST API(직접)** | OpenAPI 스펙만 지정하면 바로 연결. 빠른 프로토타이핑용, 에이전트별 설정(재사용 X) |
| **MCP 서버** | 표준화된 도구 인터페이스 + 자동 디스커버리. 서버 한 번 업데이트로 모든 에이전트 반영 |
| **에이전트 플로우** | 결정론적 워크플로우 자동화. 매번 동일하게 실행되어야 하는 비즈니스 로직 |
| **AI 프롬프트** | 모델 선택형 통제된 AI 액션. 텍스트·문서·이미지 변환, 구조화 출력(JSON 등) |
| **Computer Use(CUA)** | 비전 기반 데스크톱/브라우저 UI 자동화 |

## 커넥터 vs REST API vs MCP — 선택 기준

- **Power Platform 커넥터** — *안전한 기본값*. 커넥터가 존재하거나 조직 전반 재사용·거버넌스가 필요할 때.
- **REST API(직접)** — *빠른 길*. 일회성 통합·빠른 프로토타입·아직 커넥터가 없을 때.
- **MCP 서버** — *미래 대비*. API가 자주 바뀌거나 여러 에이전트가 같은 도구를 쓰거나 중앙 관리를 원할 때.
- 빠른 판단: **프리빌트 커넥터 있으면 사용 → 없고 재사용 필요하면 커스텀 커넥터/MCP → 단순 프로토타입이면 REST API.**

## 에이전트 플로우(Agent Flows)

에이전트는 목표에 따라 자율적으로 추론하고, 반복적·예측 가능한 무거운 작업은 결정론적 플로우가 처리합니다. AI 액션을 선택적으로 끼워 넣어
규칙으로 표현하기 어려운 판단만 지능화합니다. 다단계·조건부 승인(휴먼 인 더 루프)으로 보험 청구·금융 컴플라이언스·법무 문서 검토·공급망 품질관리 같은 실제 프로세스를 반영합니다.

## MCP(Model Context Protocol)

"AI 에이전트를 위한 USB-C". 도구마다 커스텀 통합을 만들지 않고 표준 인터페이스로 연결합니다. **LLM 단독(정적 지식) → LLM+커넥터(도구마다 커스텀 코드) → LLM+MCP(표준화·즉시 호환)**.
Dataverse·D365(Sales/Finance/Supply Chain 등)·GitHub·Outlook 등 OOB MCP 서버 카탈로그가 빠르게 확장 중이며 커스텀 MCP 서버도 구축 가능합니다.

## Computer Use Agents(CUA)

사용자가 프롬프트를 주면 → CUA가 화면 스크린샷으로 상태를 파악하고 액션(클릭·입력·스크롤)을 결정·실행 → 다시 관측하며 완료까지 반복합니다. API가 없는 레거시/UI 시스템 자동화에 강력합니다.
**RPA vs CUA**: RPA는 규칙 기반·UI 트리·스크립트인 반면 CUA는 LLM 기반·비전·자연어 지시·시각 피드백 기반 자기수정. 보안은 Azure 경계 내 실행, 학습 미사용, 전송·저장 암호화, 스크린샷 감사 추적, Intune 정책 제어, Responsible AI 검토.

---

> 💡 이 모듈의 개념을 실제로 실습하려면 → **[랩 1: 도구(Tools) 실습 (한국어)]({{ '/labs/mcs-tools-kr/' | relative_url }})**

> 📌 본 한국어 페이지는 [원문 모듈](https://microsoft.github.io/mcs-labs/modules/tools-overview/)(MIT © Microsoft)을 번역·재구성한 것입니다. 최신 내용은 원문을 함께 참고하세요.
