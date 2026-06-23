---
layout: lab
title: "모듈 1 — Copilot Studio 핵심 개념 개요 (한국어)"
summary: "에이전트·토픽·지식·도구·변수·채널 등 Classic 구성 요소와 New 오케스트레이션 개념을 한 번에 훑는 개요 모듈."
edition: "Classic"
level: 200
time: "30분"
audience: "Maker"
author: "이영서"
accent: "#0078D4"
tags: ["핵심 개념", "Topics", "Knowledge", "RAG", "오케스트레이션"]
source_url: "https://microsoft.github.io/mcs-labs/modules/copilot-studio-core-concepts-overview/"
source_title: "Copilot Studio Core Concepts Overview — mcs-labs"
next_url: /labs/module-tools-kr/
next_title: "모듈 2 — Copilot Studio 도구(Tools)"
---

# 모듈 1 — Copilot Studio 핵심 개념 개요

> **출처 및 라이선스 (Source & License)**
> 본 페이지는 Microsoft가 공개한 **[microsoft/mcs-labs](https://github.com/microsoft/mcs-labs)** 의 모듈
> **[Copilot Studio Core Concepts Overview](https://microsoft.github.io/mcs-labs/modules/copilot-studio-core-concepts-overview/)** 와
> 연계 슬라이드 덱을 한국어로 번역·요약·재구성한 것입니다.
> 원문은 **MIT License — Copyright © Microsoft Corporation** 하에 배포되며, 본 한국어 자료는 MIT 라이선스가 허용하는 범위
> (저작권·라이선스 고지 유지) 안에서 재구성했습니다.
> 라이선스 전문: <https://github.com/microsoft/mcs-labs/blob/main/LICENSE>
> · [슬라이드(PPT) 다운로드](https://github.com/microsoft/mcs-labs/raw/main/presentations/advanced-agent-in-a-day/02.%20Copilot%20Studio%20Core%20Concepts_AIAD.pptx)

> **레벨** 200 · **소요** 30분

에이전트·토픽·지식 소스·도구·변수·채널 등 구성 요소를 **Classic 작성 모델**과 **신규 생성형 오케스트레이션** 양쪽 관점에서 훑는 개요 모듈입니다.

## Classic Copilot Studio의 주요 구성 요소

| 구성 요소 | 한국어 설명 |
|-----------|-------------|
| **Topics(토픽)** | 메이커가 대화의 모든 흐름을 직접 설계·제어하는 작성형 경험. 구조적이고 예측 가능한 상호작용에 유리 |
| **Knowledge(지식)** | SaaS 기반 RAG 패턴으로 콘텐츠를 검색·요약. 일반 RAG와 달리 토픽·도구와 함께 오케스트레이션 가능 |
| **Tools(도구)** | Power Platform 커넥터·Power Automate 플로우를 감싼 "대화형 API 래퍼". 입력을 모으고 출력을 동적으로 생성 |
| **Variables(변수)** | 대화 상태·정보를 메모리에 저장해 대화를 적응적으로 끌고 감 (상태 유지) |
| **Agents(에이전트)** | 도구·지식을 묶어 소비하거나 외부 에이전트와 연결 (멀티 에이전트 오케스트레이션) |
| **Channels(채널)** | Teams, 웹챗, SharePoint 등 다양한 인터페이스로 에이전트를 원클릭 배포 |
| **Analytics / Evaluations** | 대화·감사·성능에 대한 E2E 텔레메트리, 테스트셋 기준 품질 평가 |

## 지식(Knowledge)과 RAG의 핵심

- 단순 검색이 아니라 사람의 정보 탐색 과정을 모사: **요청 → 쿼리 이해 → 검색 → 관련성 점검·반복 → 요약 → 더 나은 응답**.
- RAG 3단계: **Search(최적화 쿼리로 인덱스 검색) → Retrieve(가장 관련 있는 스니펫 추출) → Summarize(인용 포함 근거 기반 응답)**.
- RAG가 **하지 않는 것**: 두 긴 문서 비교, 계약-정책 준수 검증 같은 심층 문서 분석. 이런 작업은 결정론적 로직·사람 검토·전용 도구가 필요.

## Classic vs New 오케스트레이터

- **Classic(메인라인)**: *계획 생성 → 실행*. 사용자 발화에서 토픽/액션/지식으로 계획을 세우고 슬롯 필링·실행 후 통합 응답 생성.
- **New(추론 루프)**: *Think → Act → Observe → Reflect*를 목표 달성까지 반복. 매 턴을 실제 관측에 근거해 결정하므로 긴 작업에 안정적이고 오류에서 회복 가능. 단, **토픽·차일드 에이전트 미지원, 비결정론적 전용**.

## New 컴포넌트 모델

전역 행동·사실·액션·절차·메모리·위임·코드 실행을 분리합니다. **Skills(`SKILL.md` 절차 + 샌드박스 보조 파일)**,
**Connected agents(필요 시에만 위임)** 등으로 구성됩니다. 설계 원칙은 "루프 안에서 신뢰·검사·안전이 가능한 *가장 작은 컴포넌트*를 선택".

## Evaluations(평가)

테스트셋을 여러 그레이더(General Quality, Compare Meaning, Text Similarity, Exact/Partial Match, Capability Use, Classification)로
채점하고 합격률 임계값을 설정합니다. 테스트셋은 **Zones of Coverage**로 설계 — ① 반드시 통과(≈100%), ② 비핵심/모호(<100%, 투자 로드맵), ③ 가드레일(차단되어야 하므로 ≈0%).

---

> 📌 본 한국어 페이지는 [원문 모듈](https://microsoft.github.io/mcs-labs/modules/copilot-studio-core-concepts-overview/)(MIT © Microsoft)을 번역·재구성한 것입니다. 최신 내용은 원문을 함께 참고하세요.
