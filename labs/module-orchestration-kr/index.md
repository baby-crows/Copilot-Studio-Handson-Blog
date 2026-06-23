---
layout: lab
title: "모듈 3 — 오케스트레이션과 동적 체이닝 (한국어)"
summary: "내장 NLU·생성형 오케스트레이션·New 추론 루프, 입력/출력 핸드셰이크, 동적 체이닝, New 에이전트 이동 이유와 마이그레이션 멘탈 모델."
edition: "Public Preview"
level: 300
time: "45분"
audience: "Maker"
author: "이영서"
accent: "#5B5FC7"
tags: ["오케스트레이션", "NLU", "동적 체이닝", "마이그레이션"]
source_url: "https://microsoft.github.io/mcs-labs/modules/orchestration/"
source_title: "Orchestration and Dynamic Chaining — mcs-labs"
prev_url: /labs/module-tools-kr/
prev_title: "모듈 2 — 도구(Tools)"
---

# 모듈 3 — 오케스트레이션과 동적 체이닝

> **출처 및 라이선스 (Source & License)**
> 본 페이지는 Microsoft가 공개한 **[microsoft/mcs-labs](https://github.com/microsoft/mcs-labs)** 의 모듈
> **[Orchestration and Dynamic Chaining](https://microsoft.github.io/mcs-labs/modules/orchestration/)** 와 연계 슬라이드 덱을 한국어로 번역·요약·재구성한 것입니다.
> 원문은 **MIT License — Copyright © Microsoft Corporation** 하에 배포되며, 본 한국어 자료는 MIT 라이선스가 허용하는 범위(저작권·라이선스 고지 유지) 안에서 재구성했습니다.
> 라이선스 전문: <https://github.com/microsoft/mcs-labs/blob/main/LICENSE>
> · [슬라이드(PPT) 다운로드](https://github.com/microsoft/mcs-labs/raw/main/presentations/bootcamp/09.%20Orchestration%20and%20Dynamic%20Chaining%20Concepts_CB.pptx)

> **레벨** 300 · **소요** 45분 · **연계 랩** → [랩 2: Copilot Studio 오케스트레이션](https://microsoft.github.io/mcs-labs/labs/mcs-orchestration/?event=advanced-agent-in-a-day)

에이전트가 모든 대화 경로를 수동으로 짜는 대신, 도구·토픽·지식·지침을 제공하면 **오케스트레이터가 동적으로 계획을 조립**하는 방식을 다룹니다.

## 자연어 이해(NLU)

예: *"다음 주에 파리행 비행기를 예약하고 싶어"* → **의도**(비행기 예약) + **엔티티**(목적지=파리, 날짜=다음 주) 추출 → 의도·엔티티·맥락에 가장 맞는 응답/추가 질문 결정.

## 세 가지 의도 인식 방식

- **내장 NLU 모델** — 사전 학습된 기본 모델. 트리거 구문·커스텀 엔티티로 구성. 쿼리당 단일 의도, 확장 불가.
- **생성형 오케스트레이션(Classic)** — LLM 사용. 복합 의도 처리, 토픽/액션/지식 체이닝, 누락 입력 자동 질문, 통합 응답 생성. (체인당 5메시지, 트리거 가능 토픽·액션 128개 제한)
- **New 오케스트레이터(추론 루프)** — LLM 기반, 긴 작업 안정성, 오류 회복, 지침 준수, 턴 간 동적 계획 갱신, 더 나은 도구 선택·검증. (토픽·차일드 에이전트 미지원, 비결정론적 전용)

## Classic vs Generative 오케스트레이션

- **Classic**: 발화 → 토픽 선택(트리거 구문 매칭) → 매칭된 토픽을 *작성된 그대로* 실행 → 매칭 없으면 지식 검색 → 그래도 없으면 폴백. 예측 가능하지만 메이커가 대부분의 경로를 수동 설계.
- **Generative**: 발화 → 계획 생성(토픽/도구/지식 조합) → 슬롯 필링·실행 → 모든 출력으로 통합 응답. 더 대화형이고 유연.

## 입력/출력 설계(핸드셰이크)

입력은 명확한 이름·설명·예시·검증용 값 목록을 제공(누락 시 동적 질문 자동 생성)합니다. 출력은 통합 응답에 쓰이며, 같은 정보를 여러 AI 프롬프트로 중복 전달("double paying") 피하고,
종료가 필요하면 *End all Topics*로 중복 응답 방지. 한 토픽의 출력(OrderID)을 다른 토픽의 입력으로 자연스럽게 전달합니다.

## 지침(Instructions)·이름·설명

오케스트레이터는 이름·설명에 크게 의존하므로 정확하게 작성합니다. *플레인 텍스트로 묘사하지 말고* `/`로 도구·토픽·변수를 직접 참조하세요. 단순하게 시작해 점진적으로 개선합니다.

## 동적 체이닝(Dynamic Chaining)

한 출력 → 다음 도구/에이전트/토픽 입력으로 연결(체인당 최대 5단계). 플래너가 "답에 이르는 경로"를 찾고 필요한 입력·가용 정보를 평가해 계획을 세우고 실행합니다.
예: *"내 계좌 잔액은?"* → 계정 식별 → 금융 시스템 조회 → "$132.16".

## 왜 New 에이전트로 이동하나

더 적고 똑똑한 질문(이미 아는 것은 추론, 누락만 질문, 묶음/재정렬), 곁가지·맥락 전환 후 작업 복귀, 더 정확한 도구 선택·병렬 실행, 지침 우선(instruction-first), 오류에서 지능적 재시도, 턴을 가로지르는 유연한 흐름.
기반 개념: **Chain of Thought(중간 추론 표출)**, **Self-Reflection & Critique(자기 검토·재시도)**, **Termination Conditions(목표 달성·예산 소진·복구 불가 오류·사용자 중단·진척 없음)**.

## 마이그레이션 멘탈 모델

*포팅이 아니라 재설계* — 토픽·변수·Power Fx·차일드 에이전트 등을 1:1 복사하지 말고, "에이전트가 수행해야 할 작업(intent)" 기준으로 루프에 맞는 컴포넌트로 번역하세요.

---

> 📌 본 한국어 페이지는 [원문 모듈](https://microsoft.github.io/mcs-labs/modules/orchestration/)(MIT © Microsoft)을 번역·재구성한 것입니다. 최신 내용은 원문을 함께 참고하세요.
