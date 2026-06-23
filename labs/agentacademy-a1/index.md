---
layout: lab
title: "A1 · 채용 에이전트 시작하기"
summary: "기본 인프라 배포 및 중앙 오케스트레이터 에이전트 생성."
module: "AgentAcademy — 커스텀 에이전트 초급"
module_id: agentacademy
level: 100
time: "20분"
audience: "초중급 Maker"
accent: "#0078D4"
tags: ["Introduction", "Provisioning"]
next_url: /labs/agentacademy-a2/
next_title: "A2 · 에이전트 모델 이해"
source_url: "https://microsoft.github.io/agent-academy"
---

# A1 · 채용 에이전트 시작하기

> **Microsoft Agent Academy Operative** 기반 초급 실습의 시작점입니다.
> 채용(Recruiting) 시나리오를 예제로 Copilot Studio의 기본 인프라 배포와 중앙 오케스트레이터 에이전트 생성을 다룹니다.

## 1. 목표

1. Copilot Studio 환경과 기본 인프라를 배포합니다.
2. 채용 시나리오의 **중앙 오케스트레이터 에이전트**를 생성합니다.
3. 이어지는 A2~A4 실습의 기반이 되는 에이전트를 준비합니다.

## 2. 실습 데이터

이 모듈은 아래 샘플 데이터를 사용합니다. (`data/` 폴더에 포함)

- [evaluation-criteria.csv](data/evaluation-criteria.csv) — 평가 기준
- [job-roles.csv](data/job-roles.csv) — 직무 정의
- [Operative_1_0_0_0.zip](data/Operative_1_0_0_0.zip) — Operative 솔루션 패키지
- 이력서 샘플 PDF — `data/resume_data/` 폴더 참고

## 3. 다음 단계

기본 에이전트를 만든 뒤에는 다음 순서로 진행하세요.

1. **A2 · 에이전트 모델 이해** — 사용 사례에 맞는 모델 선택
2. **A3 · 멀티 에이전트** — Child/Connected 에이전트로 확장
3. **A4 · MCP 서버 연결** — 외부 도구(MCP) 통합

> 원 출처: [Microsoft Agent Academy](https://microsoft.github.io/agent-academy)